class GroupChatsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "group_chat_#{params[:group_chat_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
