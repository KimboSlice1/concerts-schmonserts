class Concert < ApplicationRecord
  belongs_to :artist, dependent: :destroy, optional:true
  belongs_to :user, optional:true
 
end
