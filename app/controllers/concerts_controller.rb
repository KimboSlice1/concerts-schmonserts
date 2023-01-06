class ConcertsController < ApplicationController
    
    def index
        render json: Concert.all
    end

    def show 
        concert_found = Concert.find_by_id(params[:id])
        if concert_found
            render json: concert_found
        else
            render json: {"error": "Concert not found"}, status: :not_found
        end
    end

    def create
        # byebug
        new_concert = Concert.create!(concert_params)

        if new_concert.valid?
            render json: new_concert, status: :created
        else
            render json: {"error": new_concert.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy 
        found_concert = Concert.find_by_id(params[:id])
        if found_concert
            found_concert.destroy
            head :no_content
        else
            render json: {"errors": "Concert not found"}, status: :not_found
        end
    end

    def update
        found_concert = Concert.find_by_id(params[:id])
        if found_concert.update!(concert_params)
            render json: found_concert, status: :ok
        else
            render json: found_concert.error, status: :unprocessable_entity
        end
    end
        








    private ####

    def concert_params 
        params.permit( :city, :date, :description, :artist_id)
    end

end

