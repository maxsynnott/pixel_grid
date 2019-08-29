class AddPixelBitsToGrid < ActiveRecord::Migration[5.2]
  def change
    add_column :grids, :pixel_bits, "bit(4000000)"
  end
end
