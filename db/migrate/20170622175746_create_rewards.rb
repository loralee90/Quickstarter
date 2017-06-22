class CreateRewards < ActiveRecord::Migration[5.0]
  def change
    create_table :rewards do |t|
      t.integer :project_id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.integer :cost, null: false
      t.date :delivery_date

      t.timestamps
    end

    add_index :rewards, :project_id
  end
end
