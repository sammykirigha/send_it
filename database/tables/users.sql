
CREATE TABLE [dbo].users
(
    id VARCHAR(100) PRIMARY KEY NOT NULL,
    username VARCHAR(100) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    tel_number INT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    [password] VARCHAR(100) NOT NULL,
    isAdmin INT DEFAULT(0),
    isDeleted INT DEFAULT(0),
    isSent INT DEFAULT(0),
    isDelivered INT DEFAULT(0),
    isDeparture INT DEFAULT(0),
    isUpdated INT DEFAULT(0),

)
GO

insert into users(id, username, full_name, tel_number, email, password) VALUES(1, 'sammy', 'sammy kirigha', 0989808098, 'sam@gmail.com', 'password')
select * from users;