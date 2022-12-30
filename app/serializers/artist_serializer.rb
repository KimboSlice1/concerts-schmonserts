class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :genrem :album
  has_many :concerts
end
