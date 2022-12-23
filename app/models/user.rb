class User < ApplicationRecord
  has_many :concerts
  has_many :artists, through: :concerts
  has_secure_password
end
