CREATE DATABASE SENDIT;
GO
drop table parcels;
CREATE TABLE [dbo].parcels
(
    id VARCHAR(100) PRIMARY KEY NOT NULL,
    [description] VARCHAR(250) NOT NULL,
    sender_number INT NOT NULL,
    receiver_number INT NOT NULL,
    start_location VARCHAR(100) NOT NULL,
    end_location VARCHAR(100) NOT NULL,
    [status] VARCHAR(50) NOT NULL,
    isCancelled INT DEFAULT(0),
    isDelivered INT DEFAULT(0)
);
GO

SELECT *
FROM parcels