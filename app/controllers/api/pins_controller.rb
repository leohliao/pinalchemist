class Api::PinsController < ApplicationController

before_action :required_logged_in

  def index
    @pins = Pin.all
    render 'api/pins/index'
  end

  def show
    @pin = Pin.find(params[:id])
    render 'api/pins/show'
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.user_id = current_user.id

    if @pin
      @pin.save
      render 'api/pins/show'
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def update
    @pin = current_user.pins.find(params[:id])

    if @pin.update(pin_params)
      render 'api/pins/show'
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def destroy
    @pin = current_user.my_pins.find(params[:id])
    @pin.destroy
    render 'api/pins/show'
  end

  private

  def pin_params
    params.require(:pin).permit(:title, :image_url, :user_id, :description)
  end

end
