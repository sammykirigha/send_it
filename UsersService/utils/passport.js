const passport = require('passport')
const db = require('../db/db')
const CustomError = require('./customError')
const config = require('../Config/config')
const {JwtStrategy, ExtractJwt} = require('passport-jwt')
const {LocalStrategy} = require('passport-local')
const { default: EncryptedData } = require('../helpers/encrypt')

passport.use(
    new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        async (email, password, done) => {
            try {
                const {recordset} = await db.exec('getUserByEmail', {email} )
                const user = recordset[0]

                if(!user) throw new CustomError(400, 'Invalid credentials')
                const passwordMatch = await EncryptedData.generateHash(
                    password,
                    user.password
                )
                if(!passwordMatch) {
                    throw new CustomError(400, 'Invalid credentials')
                }
                return done(null, user)
            } catch (error) {
                return done(error)
            }
        }

    )
)

passport.use(
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.secretkey,
            jsonWebTokenOptions: {maxAge: {expiresIn: '24h'}}
        },
        (jwtPayload, done) => done(null, jwtPayload),
    )
)

const localAuthentication = passport.authenticate('local', {
    session: false
})

const jwtAuthentication = (req, res, next) => {
    passport.authenticate('jwt', {session: false}, (err, user) => {
        if(err || !user) throw new CustomError(401, 'please login to continue')
        req.user = user;
        next()
    })(req, res, next)
}

export {localAuthentication, jwtAuthentication};