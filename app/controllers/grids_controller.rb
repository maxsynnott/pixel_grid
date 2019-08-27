class GridsController < ApplicationController
  def new
  end

  def create
  end

  def show
    @grid = Grid.find(params[:id])
  end

  def populate
    @grid = Grid.find(params[:id])
  end
end
