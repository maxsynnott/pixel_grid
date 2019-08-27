class AddPixelSizeToGrids < ActiveRecord::Migration[5.2]
  def change
    add_column :grids, :pixel_size, :integer
  end
end
