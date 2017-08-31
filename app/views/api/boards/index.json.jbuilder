@boards.each do |board|
  json.set! board.id do
    json.partial!('api/boards/board', board: board)
  end
end

# json.array! @boards do |board|
#   json.board_name board.board_name
#   json.description board.description
#   json.user_id board.user_id
#   json.id board.id
#   json.my_pins board.pins
# end
