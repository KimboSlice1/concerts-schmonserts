class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :artist_id, :user_id, :city, :date, :description
  # has_many :artists
  # has_many :users
end
