class ChangePixelBitsToVaryingBitString < ActiveRecord::Migration[5.2]
  def change
    change_column :grids, :pixel_bits, "bit varying(4000000)"
  end
end
