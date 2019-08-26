class CreateGrids < ActiveRecord::Migration[5.2]
  def change
    create_table :grids do |t|
      t.integer :height
      t.integer :width

      t.timestamps
    end
  end
end
