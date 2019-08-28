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

  def update_pixel(x, y, rgba)
    start_index = 4 * (y * width + x)
    (0..3).each { |i| pixel_array[start_index + i] = rgba[i] }
    # It reaches here instantly however the save takes a couple seconds
    save!
  end
end
