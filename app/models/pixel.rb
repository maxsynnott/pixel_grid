class Pixel < ApplicationRecord
  belongs_to :grid
  has_many :placements, dependent: :destroy

  validates :x, presence: true, numericality: { only_integer: true }
  validates :y, presence: true, numericality: { only_integer: true }
end
