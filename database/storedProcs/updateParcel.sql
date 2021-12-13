CREATE OR ALTER PROCEDURE [dbo].[uspUpdateParcel]
  (
  @id VARCHAR(100),
  @description VARCHAR(250),
  @sender_number INT,
  @receiver_number INT,
  @start_location VARCHAR(100),
  @end_location VARCHAR(100),
  @status VARCHAR(50),
  @isCancelled INT,
  @isDelivered INT
  )

AS 
BEGIN
     UPDATE dbo.parcels SET
        [description] = @description,
        sender_number = @sender_number,
        receiver_number = @receiver_number,
        start_location = @start_location,
        end_location = @end_location,
        [status] = @status,
        isCancelled = @isCancelled,
        isDelivered = @isDelivered
     WHERE id = @id
     SELECT @@ROWCOUNT
END  