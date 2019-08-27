class Placement < ApplicationRecord
  belongs_to :user
  belongs_to :grid

  # These colors are based on the 16 named HTML colors. (just for testing)
  validates :color, presence: true, inclusion: { in: %w[aqua gray navy silver
                                                        black green olive teal
                                                        blue lime purple white
                                                        fuchsia maroon red yellow] }
  validates :x, presence: true, numericality: { only_integer: true }
  validates :y, presence: true, numericality: { only_integer: true }
end
