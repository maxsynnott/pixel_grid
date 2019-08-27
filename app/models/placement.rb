class Placement < ApplicationRecord
  belongs_to :user
  belongs_to :pixel

  # These colors are based on the 16 named HTML colors. (just for testing)
  validates :color, presence: true, inclusion: { in: %w[aqua gray navy silver
                                                        black green olive teal
                                                        blue lime purple white
                                                        fuchsia maroon red yellow] }
end
