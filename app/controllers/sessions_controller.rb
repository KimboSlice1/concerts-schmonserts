class SessionsController < ApplicationController

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
  
  
 
  def destroy
    user = User.find_by(id: params[:id])
    head :ok
  end


 
  
  
  def index
    session[:session_hello] ||= "World"
    cookies[:cookies_hello] ||= "World"
    render json: { session: session, cookies: cookies.to_hash }
  end

end
