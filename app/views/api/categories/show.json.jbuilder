json.category do
  json.extract! @category, :id, :name
end

json.projects do
  @category.projects.each do |project|
    json.set! project.id do
      json.extract! project, :id, :title, :description, :end_date, :funding_goal, :details, :category_id, :creator_id, :total_pledge_amount
    end
  end
end
