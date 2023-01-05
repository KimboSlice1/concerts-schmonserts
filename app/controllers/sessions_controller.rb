class SessionsController < ApplicationController



  def login
    user_to_find_to_login=User.find_by(username: params[:username])


  if user_to_find_to_login #now we want to verify their password

    if user_to_find_to_login.authenticate(params[:password])
      render json: user_to_find_to_login

    else 
      render json: {error: "**Check Your Password, Homie**"}
    end

    else
      render json: {error: "Username OR Password Don't Match "}
    end

  end

end

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
