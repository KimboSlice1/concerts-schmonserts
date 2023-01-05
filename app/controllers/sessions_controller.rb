class SessionsController < ApplicationController

  # def login
  #   user_to_find_to_login=User.find_by(username: params[:username])
  # if user_to_find_to_login #now we want to verify their password
  #   if user_to_find_to_login.authenticate(params[:password])

  #     session[:user_id] =user_to_find_to_login.id
  #     render json: user_to_find_to_login
  #     render json: user_to_find_to_login

  #   else 
  #     render json: {error: "**Check Your Password, Homie**"}
  #   end

  #   else
  #     render json: {error: "Username OR Password Don't Match "}
  #   end
  # end
# include CurrentUserConcern

  # def create
  #   user = User
  #   .find_by(email: params["user"]["email"])
  # ^^ email is passed into user as a nested value
  #   .try(:authenticate, params["user"]["password"])
  # end

  def create
    user = User.find_by(username: params[:username])
  
    if user&.authenticate(params[:password])
      # Log in the user and return their information
      render json: user, status: :ok
    else
      # Return an error message if the login credentials are invalid
      render json: { errors: 'Invalid username or password' }, status: :unauthorized
    end
  end
  

  def login
    user = User.find_by(username:params[:username])

    if user&.authenticate(params[:password])

      render json: user, status: :ok
    else 
      render json: {errors: 'Invalid Password or Username'}, status: :unauthorized
    end

  end
  
  def logout
    reset_session
    head :ok
  end
  
  def index
    session[:session_hello] ||= "World"
    cookies[:cookies_hello] ||= "World"
    render json: { session: session, cookies: cookies.to_hash }
  end

end
