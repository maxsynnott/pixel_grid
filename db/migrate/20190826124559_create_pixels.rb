class CreatePixels < ActiveRecord::Migration[5.2]
  def change
    create_table :pixels do |t|
      t.integer :x
      t.integer :y
      t.references :grid, foreign_key: true

      t.timestamps
    end
  end
end
