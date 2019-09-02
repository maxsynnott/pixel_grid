class GridChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "grid_#{params[:grid_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
