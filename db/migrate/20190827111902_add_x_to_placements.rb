class AddXToPlacements < ActiveRecord::Migration[5.2]
  def change
    add_column :placements, :x, :integer
  end
end
