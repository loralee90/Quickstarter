json.project do
  json.extract! @project, :id, :title, :description, :end_date, :funding_goal, :details, :category_id, :creator_id, :total_pledge_amount
  json.reward_ids @project.rewards.pluck(:id)
end
json.rewards do
  @project.rewards.each do |reward|
    json.set! reward.id do
      json.extract! reward, :title, :description, :cost, :delivery_date
    end
  end
end
