json.array! @projects do |project|
  json.extract! project, :id, :title
  json.category_name project.category.name
end
