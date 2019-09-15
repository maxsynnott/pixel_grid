class GroupChat < ApplicationRecord
  belongs_to :grid
  has_many :messages
end
