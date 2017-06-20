class DropUserTable < ActiveRecord::Migration[5.0]
  def up
    drop_table :users
  end

  def down
    create_table :users
  end
end
