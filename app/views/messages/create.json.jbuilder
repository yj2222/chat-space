json.id         @message.id
json.(@message, :content, :image)
json.user_name  @message.user.name
json.date       @message.created_at.strftime("%Y/%m/%d %H:%M")

