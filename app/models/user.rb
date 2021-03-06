class User < ApplicationRecord
  has_many :orders
  has_many :messages

  # this causes "Unpermitted parameter: :username" for some reason
  validates :username, presence: true

  # Pre-generated by devise
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
