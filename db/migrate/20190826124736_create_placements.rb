class CreatePlacements < ActiveRecord::Migration[5.2]
  def change
    create_table :placements do |t|
      t.string :color
      t.references :user, foreign_key: true
      t.references :pixel, foreign_key: true

      t.timestamps
    end
  end
end
