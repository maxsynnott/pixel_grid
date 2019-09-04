class Api::V1::GridsController < Api::V1::BaseController
  def place_pixel
    validated = true
    @grid = false

    @grid = Grid.find(params[:id]) if (0..Grid.last.id).include?(params[:id])
    if @grid
      validated = false if (0...@grid.width).include?(params[:x])
      validated = false if (0...@grid.height).include?(params[:y])
      validated = false if (0..15).include?(params[:colorIndex])
    end

    if validated
      PixelUpdateJob.perform_later(grid_id: params[:id],
                                   x: params[:x],
                                   y: params[:y],
                                   color_index: params[:colorIndex])
    end
  end
end
