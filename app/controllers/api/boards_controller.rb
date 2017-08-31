class Api::BoardsController < ApplicationController

  # before_action :required_logged_in
  
  def index
    # @boards = Board.includes(:pins).where(user_id: params[:user_id])
    @boards = Board.where(user_id: params[:user_id])
    # @boards = current_user.boards
    render 'api/boards/index'
  end

  def show
    # keeps us from using n+1
    # @board = Board.includes(:pins).find(params[:id])
    @board = Board.find(params[:id])
    render 'api/boards/show'
  end

  def create
    # @board = Board.new(board_params)
    @board = current_user.boards.new(board_params)
    @board.user_id = current_user.id

    if @board.save
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def update
    @board = current_user.boards.find(params[:id])
    if @board.update_attributes(board_params)
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages
    end
  end

  def destroy
    # @board = Board.includes(:pins).find(params[:id])
    @board = current_user.boards.find(params[:id])
    @board.destroy
    render 'api/boards/show'
  end

  private
  def board_params
    params.require(:board).permit(:board_name, :user_id, :description)
  end
end
