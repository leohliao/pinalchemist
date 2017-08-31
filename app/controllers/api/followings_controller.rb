class Api::FollowingsController < ApplicationController

  def create
    @following = Following.new(following_params)
    @user = User.find(@following.following_id)

    if @following.save
      render 'api/users/show'
    else
      render json: @following.errors.full_messages, status: 400
    end
  end

  def destroy
    @following = Following.where(following_id: params[:following][:following_id]).first
    # @user = User.find(:following.following_id)
    @user = @follow.disciple

    @following.destroy
    render json: 'api/user/show'
  end

  private

  def following_params
    params.require(:following).permit(:following_id, :follower_id)
  end
end
