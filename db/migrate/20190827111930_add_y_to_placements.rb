class AddYToPlacements < ActiveRecord::Migration[5.2]
  def change
    add_column :placements, :y, :integer
  end
end
