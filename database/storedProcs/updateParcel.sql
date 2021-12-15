CREATE OR ALTER PROCEDURE updateParcel(@id INT)
AS
BEGIN
UPDATE parcels SET status='sent1' WHERE id=@id
END