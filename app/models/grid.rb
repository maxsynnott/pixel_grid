class Grid < ApplicationRecord
  has_many :placements, dependent: :destroy

  validates :height, presence: true, numericality: { only_integer: true }
  validates :width, presence: true, numericality: { only_integer: true }

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
end
