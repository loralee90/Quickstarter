class CreatePledges < ActiveRecord::Migration[5.0]
  def change
    create_table :pledges do |t|
      t.integer :amount, null: false
      t.string :pledgeable_type, null: false
      t.integer :pledgeable_id, null: false
      t.integer :backer_id, null: false

      t.timestamps
    end

    add_index :pledges, :pledgeable_id
    add_index :pledges, :backer_id
  end
end
