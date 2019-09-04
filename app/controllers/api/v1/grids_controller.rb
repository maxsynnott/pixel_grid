class Api::V1::GridsController < Api::V1::BaseController
  def place_pixel
    PixelUpdateJob.perform_later(grid_id: params[:id],
                                 x: params[:x],
                                 y: params[:y],
                                 color_index: params[:colorIndex])
  end
end
