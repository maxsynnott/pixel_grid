class Pixel < ApplicationRecord
  belongs_to :grid
  has_many :placements, dependent: :destroy
end
