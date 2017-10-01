json.users do
  json.array!(@searches[:users]) do |user|
    json.id user.id
    json.username user.username
    json.image_url user.image_url
    json.description user.description
  end
end

json.boards do
  json.array!(@searches[:boards]) do |board|
    json.id board.id
    json.board_name board.board_name
    json.description board.description
    json.user_id board.user_id
  end
end

json.pins do
  json.array!(@searches[:pins]) do |pin|
    json.id pin.id
    json.title pin.title
    json.description pin.description
    json.user_id pin.user_id
    json.image_url pin.image_url
  end
end
