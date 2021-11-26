
CREATE TABLE [dbo].users
(
    id VARCHAR(100) PRIMARY KEY NOT NULL,
    username VARCHAR(100) NOT NULL,
    full_name VARCHAR(100) NOT NULL,
    tel_number INT NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    passward VARCHAR(100) NOT NULL,
    isSent INT DEFAULT(0),
    isDelivered INT DEFAULT(0),
    isDeparture INT DEFAULT(0),
    isUpdated INT DEFAULT(0),

)
GO

select * from users;