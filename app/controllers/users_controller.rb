class UsersController < ApplicationController
rescue_from ApplicationRecord::RecordNotFound, with: :user_not_found
ApplicationRecord::RecordInvalid, with: :user_unable_to_create

    def index 
        render json: User.all
    end

    def show
        user = User.find(params[:id])
        if user
            render json: user, status: :ok
        else
            user_not_found
    end

    def create
        new_user = User.create!(user_params)
        

        if create_user
        render json: user, status: :created

        

        else 
            user_unable_to_create
    end


    private
    #issue finding user
    def user_not_found
        render json:{error: 'Nope'}
    end

    #issuse creating user
    def user_unable_to_create(the_invalid_user_exception)

        # render json: {error: the_invalid_user_exception}
        render json: {errors: the_invalid_user.record.errors.full_message}


    end
    #error handling
    # def render_unprocessable_entity(invalid)
    #     render json:{errors: invalid.record.errors}, status: :unprocessable_entity
    # end


    def user_params
        params.permit(:username, :email, :password)
    end

    def user_create_params
        params.permit(:username, :email, :password)
    end

    def user_find
        user_to_find = User.find_by(id:params[:id])
    end

    end
