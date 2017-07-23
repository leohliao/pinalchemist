json.partial! "api/users/user", user: @user
json.image_url asset_path(user.image.url)
