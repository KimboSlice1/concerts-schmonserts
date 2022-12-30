class SessionsController < ApplicationController

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
