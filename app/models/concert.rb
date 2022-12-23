class Concert < ApplicationRecord
  belongs_to :artist, dependent: :destroy
  belongs_to :user
end
