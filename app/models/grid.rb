class Grid < ApplicationRecord
  has_many :pixels, dependent: :destroy
end
