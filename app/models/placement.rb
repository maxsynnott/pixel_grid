class Placement < ApplicationRecord
  belongs_to :user
  belongs_to :grid

  validates :x, presence: true, numericality: { only_integer: true }
  validates :y, presence: true, numericality: { only_integer: true }
end
