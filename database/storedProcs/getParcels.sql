CREATE OR ALTER PROCEDURE getParcel
AS
BEGIN
SELECT * FROM  parcels WHERE isSent=0
END