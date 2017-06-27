@projects.each do |project|
  json.set! project.id do
    json.partial! '/api/projects/project', project: project
  end
end
