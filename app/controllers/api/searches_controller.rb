class Api::SearchesController < ApplicationController
  def index
    search = params[:search]
    @searches = {}
    @searches[:users] = User.whose_username_starts_with(search)
    @searches[:boards] = Board.whose_board_name_starts_with(search)
    @searches[:pins] = Pin.whose_title_starts_with(search)
    render 'api/searches/show'
  end
end
