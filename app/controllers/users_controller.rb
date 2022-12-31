class UsersController < ApplicationController

    def show
        user = User.find(params[:id])
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        render json: user, status: :created
    end


    private
    #error handling
    def render_unprocessable_entity(invalid)
        render json:{errors: invalid.record.errors}, status: :unprocessable_entity
    end


    def user_params
        params.permit(:username, :email, :bio, :password)
    end
end
