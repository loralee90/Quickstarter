class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.string :url, null: false
      t.string :description, null: false
      t.date :end_date, null: false
      t.integer :funding_goal, null: false
      t.text :details
      t.integer :creator_id
      t.integer :category_id, null: false

      t.timestamps
    end

    add_index :projects, :creator_id
  end
end
