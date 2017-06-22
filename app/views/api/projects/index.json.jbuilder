@projects.each do |project|
  json.set! project.id do
    json.extract! project, :id, :title, :description, :creator_id, :category_id, :end_date, :funding_goal, :total_pledge_amount
    json.category_name project.category.name
  end
end
