json.pin do
  json.set! :author_image_url, @pin.author.image_url
  json.set! :author_username, @pin.author.username
  json.extract! @pin, :id, :title, :description, :image_url, :user_id

json.board do
  json.set! :author_image_url, @board.author.image_url
  json.set! :author_username, @board.author.username
  json.extract! @board, :id, :board_name, :description, :user_id

  json.pinned_boards do
    @pin.boards.each do |board|
      json.set! board.id, board.id
    end
  end
end

  json.pins do
    @board.pins.each do |pin|
      json.set! pin.id do
        json.partial! 'api/pins/pin.json.jbuilder', pin: pin
      end
    end
  end
end
