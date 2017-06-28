json.extract! user, :id, :email, :name
json.image_url asset_path(user.image.url)
