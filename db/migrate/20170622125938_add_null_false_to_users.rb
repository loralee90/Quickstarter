class AddNullFalseToUsers < ActiveRecord::Migration[5.0]
  def change
    change_column_null :projects, :creator_id, false
  end
end
