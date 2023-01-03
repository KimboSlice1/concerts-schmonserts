class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :artist_id, :user_id, :city, :date, :description
  has_one :artist
  # has_many :users

  
end
