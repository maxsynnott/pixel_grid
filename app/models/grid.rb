class Grid < ApplicationRecord
  has_many :placements, dependent: :destroy

  validates :height, presence: true, numericality: { only_integer: true }
  validates :width, presence: true, numericality: { only_integer: true }

  before_create :fill_bits

  # Method for testing purposes, call .populate on a grid instance to populate
  # it with random coloured pixels.
  def populate
    bit_string = ""
    # For each coordinate in the grid it picks a random number from 0-15 and
    # converts it into a string of 4 bits
    (width * height).times { bit_string << "%04b" % rand(15) }
    self.pixel_bits = bit_string
    save!
  end

  def update_pixel(x, y, bit_string)
    # This can be used to update and save any pixel on the grid to any color
    start_index = (width * y + x) * 4
    pixel_bits_will_change!
    pixel_bits[start_index..(start_index + 3)] = bit_string
    save!
  end

  private

  def fill_bits
    self.pixel_bits = ""
    (width * height).times { pixel_bits << "0000" }
  end
end
