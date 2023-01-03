class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :genre, :album
  has_many :concerts
end
