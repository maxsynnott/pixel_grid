class GridChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "some_channel"
    stream_from "grid_#{params[:grid_id]}"
    ActionCable.server.broadcast("grid_#{params[:grid_id]}", users: ActionCable.server.connections.length)
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
    ActionCable.server.broadcast("grid_#{params[:grid_id]}", users: ActionCable.server.connections.length)
  end

  # Convert usercount update to seperate method, can't now as don't have wifi to test
end
