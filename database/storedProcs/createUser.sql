CREATE OR ALTER PROCEDURE [dbo].[uspCreateUser] 
    @username VARCHAR(100),
    @full_name VARCHAR(100),
    @tel_number INT,
    @email VARCHAR(100),
    @password VARCHAR(100),
    @isAdmin INT
AS
BEGIN
     SET NOCOUNT ON
     INSERT INTO dbo.users
     (
         username,
         full_name,
         tel_number,
         email,
         [password],
         isAdmin
     )
     VALUES
     (
        @username,
        @full_name,
        @tel_number,
        @email,
        @password,
        @isAdmin
     )
END;
GO