class ChangeOrderPrice < ActiveRecord::Migration[5.2]
  def change
    change_column :orders, :price, :integer, default: 5
  end
end
