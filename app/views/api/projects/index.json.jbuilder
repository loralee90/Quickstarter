@projects.each do |project|
  json.set! project.id do
    project.extract! :id, :title, :description, :creator_id, :end_date, :funding_goal, :pledges 
  end
end
