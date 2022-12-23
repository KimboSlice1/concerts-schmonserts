class ArtistsController < ApplicationController
    def index
        render json: Artist.all
    end

    def create
        new_artist = Artist.create(new_artist_params)
        if new_artist.valid?
            render json: new_artist
        else 
            render json: {"errors": new_artist.errors.full_messages}, status: :unprocessable_entity
        end
    end




    private #####
        def new_artist_params
            params.permit(:name, :genre, :album)
        end
end
