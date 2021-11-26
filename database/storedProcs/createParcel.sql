CREATE OR ALTER PROCEDURE [dbo].[uspCreateParcel]
    @id VARCHAR(100),
    @description VARCHAR(250),
    @sender_number INT,
    @receiver_number INT,
    @start_location VARCHAR(100),
    @end_location VARCHAR(100),
    @status VARCHAR(100),
    @isCancelled INT,
    @isDelivered INT

AS
BEGIN
    SET NOCOUNT ON
    INSERT INTO [dbo].projects
        (
        id,
        [description],
        sender_number,
        receiver_number,
        start_location,
        end_location,
        [status],
        isCancelled,
        isDelivered
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
            @isCancelled,
            @isDelivered
     )

END