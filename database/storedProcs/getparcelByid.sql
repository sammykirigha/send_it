CREATE OR ALTER PROCEDURE getParcelById( @id VARCHAR(100))
AS
BEGIN
SELECT * FROM  parcels WHERE id=@id
END


EXEC getParcelById @id='abc' ;