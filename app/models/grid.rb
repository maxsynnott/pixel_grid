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

  def update_pixel(xyc)
    batch_update if queue.length >= 100 # Will update pixel to db every x num of pixel_bits
    queue << [xyc[0], xyc[1], xyc[2]]
    save
  end

  private

  def fill_bits
    self.pixel_bits = ""
    (width * height).times { pixel_bits << "0000" }
  end

  def batch_update
    pixel_bits_will_change!
    queue.each do |xyc|
      start_index = (width * xyc[1] + xyc[0]) * 4
      pixel_bits[start_index..(start_index + 3)] = "%04b" % xyc[2]
    end
    self.queue = []
    save!
  end
end
