class ChatRoomsController < ApplicationController
  def show
    @chat_room = ChatRoom.include(messages: :user).find(params[:id])
  end
end
