class Concert < ApplicationRecord
  belongs_to :artist, class_name: 'Artist', dependent: :destroy
  belongs_to :user
  
end
