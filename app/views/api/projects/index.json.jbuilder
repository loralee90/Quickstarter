@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :description, :creator_id, :category_id, :end_date, :funding_goal, :total_pledge_amount
    json.category_name project.category.name
    json.creator_name project.creator.name
    json.creator_image_url asset_path(project.creator.image.url)
    json.image_url asset_path(project.image.url)
  end
end
