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
    @following = current_user.i_am_following.where(following_id: params[:following][:following_id]).first
    @user = User.find_by_id(@following.following_id)
    @following.destroy
    render json: 'api/user/show.json.jbuilder'
  end

  private

  def following_params
    params.require(:following).permit(:following_id, :follower_id)
  end
end
