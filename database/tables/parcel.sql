CREATE DATABASE SENDIT
DROP TABLE parcels

CREATE TABLE [dbo].parcels
(
    id VARCHAR(100) PRIMARY KEY NOT NULL,
    [description] VARCHAR(250) NOT NULL,
    sender_number INT NOT NULL,
    receiver_number INT NOT NULL,
    start_location VARCHAR(100) NOT NULL,
    end_location VARCHAR(100) NOT NULL,
    [status] VARCHAR(50) NOT NULL,
    isDeleted INT DEFAULT(0),
    isUpdated INT DEFAULT(0),
    isSent INT DEFAULT(0),
    isDelivered INT DEFAULT(0),
    sender_id VARCHAR(100) FOREIGN KEY REFERENCES [dbo].users(id) ON DELETE CASCADE ON UPDATE CASCADE,
);
GO

SELECT *
FROM parcels