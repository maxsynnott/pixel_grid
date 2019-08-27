class AddPixelArrayToGrids < ActiveRecord::Migration[5.2]
  def change
    add_column :grids, :pixel_array, :integer, array:true, default: []
  end
end
