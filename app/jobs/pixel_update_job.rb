class PixelUpdateJob < ApplicationJob
  queue_as :default

  def perform(args = {})
    # Do something later
    x = args[:x].to_i
    y = args[:y].to_i
    color_index = args[:color_index].to_i
    id = args[:grid_id].to_i

    @grid = Grid.find(id)
    @grid.update_pixel([x, y, color_index])
    ActionCable.server.broadcast("grid_#{@grid.id}", x: x,
                                                     y: y,
                                                     colorIndex: color_index)
  end
end
