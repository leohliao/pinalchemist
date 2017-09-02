json.extract! user, :id, :username, :image_url

json.pins do
  user.pins.each do |pin|
    json.set! pin.id do
      json.partial! 'api/pins/pin.json.jbuilder', pin: pin
    end
  end
end

json.my_pins do
  user.my_pins.each do |pin|
    json.set! pin.id do
      json.partial! 'api/pins/pin.json.jbuilder', pin: pin
    end
  end
end

json.boards do
  user.boards.each do |board|
    json.set! board.id do
      json.partial! 'api/boards/board.json.jbuilder', board: board
    end
  end
end

json.disciples do
  user.disciples.each do |disciple|
    json.set! disciple.id do
      json.extract! disciple, :id, :image_url, :username
    end
  end
end

json.masters do
  user.masters.each do |master|
    json.set! master.id do
      json.extract! master, :id, :image_url, :username
    end
  end
end

if current_user
  if user.disciples.exists?(id: current_user.id)
    json.followed true
  else
    json.followed false
  end
end
