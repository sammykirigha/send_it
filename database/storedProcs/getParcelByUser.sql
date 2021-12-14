CREATE OR ALTER PROCEDURE [dbo].[getParcelByUserId]
@sender_id VARCHAR(100)
AS
BEGIN
SELECT * FROM parcels WHERE sender_id = @sender_id
END

EXEC getParcelByUserId '37ac9d59-8198-492f-a9e6-23e524dafab5'