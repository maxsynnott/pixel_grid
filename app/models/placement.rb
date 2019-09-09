class Placement < ApplicationRecord
  belongs_to :user
  belongs_to :grid

  validates :x, presence: true, numericality: { only_integer: true }
  validates :y, presence: true, numericality: { only_integer: true }

  after_create :broadcast_placement

  private

  def broadcast_placement
    ActionCable.server.broadcast("grid_#{grid.id}", x: x, y: y, color: color)
  end
end
