class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    
    p @user

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid Username or password"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      log_out!
      render "api/users/show"
    else
      render json: ["There is no current user to log out"], status: 404
    end
  end
end