class Api::SearchesController < ApplicationController
  def index
    @searches = {}
    @searches[:users] = User.find(params[:search])
    @searches[:boards] = Board.whose_board_name_starts_with(params[:search])
    @searches[:pins] = Pin.whose_title_starts_with(params[:search])
    render 'api/searches/show'
  end
end
