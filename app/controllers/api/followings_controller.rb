class Api::FollowingsController < ApplicationController

  def create
    @following = Following.new(following_params)
    @user = User.find_by_id(@following.following_id)

    if @following.save
      render 'api/users/show.json.jbuilder'
    else
      render json: @following.errors.full_messages, status: 400
    end
  end

  def destroy
    @following = Following.where(following_id: params[:following][:following_id], follower_id: params[:following][:follower_id]).first
    @user = User.find_by_id(@following.following_id)
    if @following.destroy
      render json: 'api/user/show.json.jbuilder'
    else
      render json: @following.errors.full_messages, status: 422
    end
  end

  private

  def following_params
    params.require(:following).permit(:following_id, :follower_id)
  end
end
