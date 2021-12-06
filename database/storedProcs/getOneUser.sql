CREATE OR ALTER PROCEDURE [dbo].[getUserByEmail]
  @email VARCHAR(100)
AS
SET NOCOUNT ON
BEGIN
     SELECT
          u.id,
          u.username,
          u.full_name,
          u.tel_number,
          u.email,
          u.password,
          u.isAdmin,
          u.isSent,
          u.isDelivered,
          u.isDeparture,
          u.isUpdated
     FROM [users] u
     WHERE email = @email AND isDeleted = 0
END