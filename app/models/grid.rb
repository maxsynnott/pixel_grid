class Grid < ApplicationRecord
  has_many :placements, dependent: :destroy

  validates :height, presence: true, numericality: { only_integer: true }
  validates :width, presence: true, numericality: { only_integer: true }
  validates :pixel_size, presence: true, numericality: { only_integer: true }

  # Method for testing purposes, call .populate on a grid instance to populate it with..
  # ..random coloured pixel.
  def populate
    (width * height).times do
      3.times { pixel_array << rand(0..255) }
      pixel_array << 255
    end
    save!
  end
end
