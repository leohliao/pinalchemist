class Api::BoardsController < ApplicationController
  def index
    @boards = Board.all
    render 'api/boards/index'
  end

  def create
    @board = Board.new(board_params)
    @board.user_id = current_user.id

    if @board.save
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def show
    @board = Board.find(params[:id])
    render 'api/boards/show'
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy
    render 'api/pins/show'
  end

  private
  def board_params
    params.require(:board).permit(:board, :user_id, :description)
  end
end
