class AddPixelQueueToGrids < ActiveRecord::Migration[5.2]
  def change
    add_column :grids, :queue, :integer, array:true, default: []
  end
end
