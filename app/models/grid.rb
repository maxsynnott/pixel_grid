class Grid < ApplicationRecord
  has_many :placements, dependent: :destroy

  validates :height, presence: true, numericality: { only_integer: true }
  validates :width, presence: true, numericality: { only_integer: true }
  validates :pixel_size, presence: true, numericality: { only_integer: true }

  def populate
    (width * height * 4).times do
      pixel_array << rand(0..255)
    end
    save!
  end
end
