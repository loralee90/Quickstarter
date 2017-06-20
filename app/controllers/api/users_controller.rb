class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      session[:session_token] = @user.reset_token
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.new(user_params)

    if @user.save
      render
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :name)
  end
end
