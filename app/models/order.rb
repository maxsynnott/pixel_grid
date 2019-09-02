class Order < ApplicationRecord
  belongs_to :user
  validates :user_id, presence: true, on: :create
end
