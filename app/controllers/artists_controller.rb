class ArtistsController < ApplicationController
    def index
        render json: Artist.all
    end
    
    def show
        artist_found = Artist.find_by_id(params[:id])
        if artist_found
            render json: artist_found #add serializer here if we need to show an additional model
        else
            render json: {"error": "Aritst not found"}, status: :not_found
        end
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
