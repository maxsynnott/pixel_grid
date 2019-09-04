class Api::V1::GridsController < Api::V1::BaseController
  def place_pixel
    @grid = Grid.find(params[:id])
    x = params[:x]
    y = params[:y]
    color_index = params[:colorIndex]
    ActionCable.server.broadcast("grid_#{@grid.id}", x: x,
                                                     y: y,
                                                     colorIndex: color_index)
    PixelUpdateJob.perform_later(grid_id: @grid.id, x: x, y: y, binary: "%04b" % color_index)
  end
end
