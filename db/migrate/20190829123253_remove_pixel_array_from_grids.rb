class RemovePixelArrayFromGrids < ActiveRecord::Migration[5.2]
  def change
    remove_column :grids, :pixel_array
  end
end
