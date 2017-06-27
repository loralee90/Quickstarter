json.project do
  json.partial! '/api/projects/project', project: @project
  json.extract! @project, :details
  json.reward_ids @project.rewards.pluck(:id)
  json.backers @project.total_backers
end

json.rewards do
  @project.rewards.each do |reward|
    json.set! reward.id do
      json.extract! reward, :title, :description, :cost, :delivery_date
    end
  end
end
