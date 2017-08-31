class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])
    render 'api/users/show'
  end

  def create
    @user = User.new(user_params)
    @user.image_url = "http://res.cloudinary.com/leosoba/image/upload/v1501093275/user_profile_img_ogenba.jpg"

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    # @user = User.find_by(username: params[:username])
    @user = current_user

    if @user.update_attributes(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :image_url, :description)
  end
end
