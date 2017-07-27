class Api::BoardsController < ApplicationController
  def index
    @boards = Board.includes(:pins).where(user_id: params[:user_id])
    render 'api/boards/index'
  end

  def show
    # keeps us from using n+1
    @board = Board.includes(:pins).find(params[:id])
    render 'api/boards/show'
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

  def destroy
    @board = Board.includes(:pins).find(params[:id])
    @board.destroy
    render 'api/boards/show'
  end

  private
  def board_params
    params.require(:board).permit(:board_name, :user_id, :description)
  end
end
