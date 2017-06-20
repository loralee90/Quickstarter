class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    
    if @user
      session[:session_token] = @user.reset_token
      render '/api/users/show'
    else
      render json: ["Invalid email or password"], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout
      render json: {}
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end
