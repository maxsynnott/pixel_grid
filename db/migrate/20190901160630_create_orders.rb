class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.string :state
      t.integer :amount
      t.json :payment

      t.timestamps
    end
  end
end
