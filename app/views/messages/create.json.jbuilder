json.id         @message.id
json.(@message, :content, :image)
json.image      @message.image.url
json.user_name  @message.user.name
json.date       @message.created_at.strftime("%Y/%m/%d %H:%M")

