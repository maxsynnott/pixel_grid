class Grid < ApplicationRecord
  has_many :placements, dependent: :destroy

  validates :height, presence: true, numericality: { only_integer: true }
  validates :width, presence: true, numericality: { only_integer: true }
  validates :pixel_size, presence: true, numericality: { only_integer: true }

  def populate
    colors = %w[aqua gray navy silver
                black green olive teal
                blue lime purple white
                fuchsia maroon red yellow]
    x = 0
    y = 0
    while x < width && y < height
      while x < width
        placements << Placement.create!(x: x, y: y, grid: self, user: User.first,
                                        color: colors.sample)
        x += pixel_size
      end
      y += pixel_size
      x = 0 unless y == height
    end
  end
end
