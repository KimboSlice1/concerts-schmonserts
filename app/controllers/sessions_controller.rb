class SessionsController < ApplicationController

# include CurrentUserConcern

  # def create
  #   user = User
  #   .find_by(email: params["user"]["email"])
  #^^ email is passed into user as a nested value
  #   .try(:authenticate, params["user"]["password"])
  #^^kinda the same

  #   if user 
  #     session[:user_id]=user.id
  #     render json: {
  #       status: :created,
  #       logged_in: true, 
  #       user: user
  #     }
  #   else 
  #     render json: {status: 401}
  #   end
  # end

  # def logged_in
  #   if @current_user
  #     render json: {
  #       logged_in: true, 
  #       user: @current_user
  #     }
  #   else 
  #     render json: {
  #       logged_in: false
  #     }
  # end
  # def logout
  #   reset_session
  #   render json: {status: 200, logged_out: true}
  
  # end





  def login
    user = User.find_by(username:params[:username])

    if user&.authenticate(params[:password])

      render json: user, status: :ok
    else 
      render json: {errors: 'Invalid Password or Username'}, status: :unauthorized
    end

    

  end
  
  def index
    session[:session_hello] ||= "World"
    cookies[:cookies_hello] ||= "World"
    render json: { session: session, cookies: cookies.to_hash }
  end

end
