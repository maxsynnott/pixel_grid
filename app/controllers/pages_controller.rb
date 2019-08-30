class PagesController < ApplicationController
  # skip_before_action :authenticate_user!, only: [:home]

  def home
    # redirect_to grid_path(Grid.last)
    @grid = Grid.last
    render 'grids/show'
  end
end
