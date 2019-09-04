class PixelUpdateJob < ApplicationJob
  queue_as :default

  def perform(args = {})
    # Do something later
    @grid = Grid.find(args[:grid_id])
    @grid.update_pixel(args[:x], args[:y], args[:binary])
    # @grid.update_pixel(args.x, args.y, args.binary)
  end
end
