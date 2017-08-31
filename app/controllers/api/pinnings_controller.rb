class Api::PinningsController < ApplicationController
  def create
    @pinning = Pinning.new(pinning_params)
    if @pinning.save
      @pin = @pinning.pin
      render 'api/pins/show'
    else
      render json: @pinning.errors.full_messages, status: 400
    end
  end

  def destroy
    @pinning = Pinning.where(board_id: params[:pinning][:board_id], pin_id: params[:pinning][:pin_id]).first
    board = @pinning.board
    @pinning.destroy
    render 'api/boards/show'
  end

  private
  def pinning_params
    params.requre(:pinning).permit(:pin_id, :board_id)
  end

end
