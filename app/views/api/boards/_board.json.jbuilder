json.set! :author_image_url, board.author.image_url
json.set! :author, board.author.username
json.extract! board, :id, :board_name, :description, :user_id

json.pins do
  board.pins.each do |pin|
    json.set! pin.id do
      json.partial! 'api/pins/pin.json.jbuilder', pin: pin
    end
  end
end
