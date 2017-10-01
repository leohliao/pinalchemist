class Api::SearchesController < ApplicationController
  def index
    search = params[:search]
    @search = {}
    @search[:users] = User.whose_username_starts_with(search)
    @search[:boards] = Board.whose_board_name_starts_with(search)
    @search[:pins] = Pin.whose_title_starts_with(search)
    render 'api/searches/show'
  end
end
