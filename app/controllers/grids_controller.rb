class GridsController < ApplicationController
  def new
  end

  def create
  end

  def show
    @grid = Grid.find(params[:id])
    @queue = @grid.queue
  end
end
