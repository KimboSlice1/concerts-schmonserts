class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :city, :date, :description
  has_one :artist
  has_one :user

  
end
