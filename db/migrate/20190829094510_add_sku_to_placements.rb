class AddSkuToPlacements < ActiveRecord::Migration[5.2]
  def change
  	add_column :placements, :sku, :string, null: false
  end
end
