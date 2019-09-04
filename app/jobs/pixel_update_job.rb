class PixelUpdateJob < ApplicationJob
  queue_as :default

  def perform(args = {})
    # Do something later
    @grid = Grid.find(args[:grid_id])
    @grid.update_pixel([args[:x], args[:y], args[:color_index]])
    ActionCable.server.broadcast("grid_#{@grid.id}", x: args[:x],
                                                     y: args[:y],
                                                     colorIndex: args[:color_index])
  end
end
