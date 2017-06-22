class DropUrlColumnFromProjects < ActiveRecord::Migration[5.0]
  def change
    remove_column :projects, :url
  end
end
