class AddPixelCreditsToUser < ActiveRecord::Migration[5.2]
  def change
      add_column :users, :pixel_credits, :integer, default: 0, null: false
  end
end
