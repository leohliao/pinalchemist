class Api::PinsController < ApplicationController
  def show
    @pin = Pin.find_by(user_id: params[:user_id])
    render 'api/pins/show'
  end

  def create
    @pin = Pin.new(pin_params)

    if @pin
      @pin.save
      render 'api/pin/show'
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def update
    @pin = Pin.find_by(pin: params[:user_id])
    if@pin.update(pin_params)
      render 'api/pin/show'
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def destroy
    @pin = Pin.find_by(pin: params[:user_id])
    
  end

  private

  def pin_params
    params.require(:pin).permit(:title, :image_url, :user_id, :description)
  end

end
