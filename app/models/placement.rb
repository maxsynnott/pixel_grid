class Placement < ApplicationRecord
  after_create :broadcast_placement

  belongs_to :user
  belongs_to :grid

  # These colors are based on the 16 named HTML colors. (just for testing)
  validates :x, presence: true, numericality: { only_integer: true }
  validates :y, presence: true, numericality: { only_integer: true }

  def broadcast_placement
    ActionCable.server.broadcast("grid_#{grid.id}", { x: x, y: y, color: "black",
                                                      current_user_id: user.id })
  end
end
