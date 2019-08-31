class RemovePixelSizeFromGrids < ActiveRecord::Migration[5.2]
  def change
    remove_column :grids, :pixel_size
  end
end
