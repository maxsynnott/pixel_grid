class AddPriceToPlacements < ActiveRecord::Migration[5.2]
  def change
  	#add_monetize :placements, :price, currency: { present: false }
  end
end
