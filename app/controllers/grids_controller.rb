class GridsController < ApplicationController
  def show
    @grid = Grid.find(params[:id])
    @queue = @grid.queue
  end
end
