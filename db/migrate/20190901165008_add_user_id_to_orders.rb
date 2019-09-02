class AddUserIdToOrders < ActiveRecord::Migration[5.2]
  def change
    add_column :orders, :user_id, :integer
  end
end
