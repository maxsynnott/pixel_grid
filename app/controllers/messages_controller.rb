class MessagesController < ApplicationController

  def new
    @message = Message.new
  end


  def create
    content = params[:message][:content]
    @message = Message.new(content: content )
    @message.save
    ActionCable.server.broadcast 'chat',
        content: @message.content
    head :created
  end
end

