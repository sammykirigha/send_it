CREATE OR ALTER PROCEDURE [dbo].[uspCreateParcel]
    @id VARCHAR(100),
    @description VARCHAR(250),
    @sender_number INT,
    @receiver_number INT,
    @start_location VARCHAR(100),
    @end_location VARCHAR(100),
    @status VARCHAR(100),
    @isUpdated INT,
    @isDelivered INT,
    @sender_id VARCHAR(100)

AS
BEGIN
    SET NOCOUNT ON
    INSERT INTO [dbo].parcels
        (
        id,
        [description],
        sender_number,
        receiver_number,
        start_location,
        end_location,
        [status],
        isUpdated,
        isDelivered,
        sender_id
        )
    VALUES
        (
            @id,
            @description,
            @sender_number,
            @receiver_number,
            @start_location,
            @end_location,
            @status,
            @isUpdated,
            @isDelivered,
            @sender_id
     )

END