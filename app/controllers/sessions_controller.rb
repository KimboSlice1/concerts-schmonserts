class SessionsController < ApplicationController

  def create
    user = User.find_by(username: params[:username])

    if user&.authenticate(params[:password])
      # Log in the user and return their information
      render json: user, status: :ok
      # Create a cookie with a long expiration time
      cookies[:user_id] = { value: user.id, expires: 1.year.from_now }
    else
      # Return an error message if the login credentials are invalid
      render json: { errors: 'Invalid username or password' }, status: :unauthorized
    end
  end
  

  # def login
  #   user = User.find_by(username:params[:username])

  #   if user&.authenticate(params[:password])

  #     render json: user, status: :ok
  #   else 
  #     render json: {errors: 'Invalid Password or Username'}, status: :unauthorized
  #   end

  # end
  
  
 
  def destroy
    user = User.find_by(id: params[:id])
    #Deletes the cookie for the seassion
    cookies.delete :user_id
    head :ok
  end

  # def click
  #     cookies[:click] ||= 0
  #     cookies[:click] = cookies[:click].to_i + 1
  #     session[:click] ||= 0
  #     session[:click] += 1
  # end
 
  
  # DON'T UNCOMMENT
  # def index
  #   session[:session_hello] ||= "World"
  #   cookies[:cookies_hello] ||= "World"
  #   render json: { session: session, cookies: cookies.to_hash }
  # end

end
