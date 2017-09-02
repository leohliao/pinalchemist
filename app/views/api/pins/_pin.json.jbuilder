json.set! :author_image_url, pin.author.image_url
json.set! :author, pin.author.username
json.extract! pin, :id, :title, :description, :user_id, :created_at
json.image_url asset_path(pin.image_url)

json.pinned_boards do
  pin.boards.each do |board|
    json.set! board.id, board.id
  end
end
