class Artist < ApplicationRecord
  has_many :concerts
  has_many :users, through: :concerts
end
