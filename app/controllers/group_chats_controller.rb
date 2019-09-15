class GroupChatsController < ApplicationController
  def create
  end

  def show
    @group_chat = GroupChat.find(params[:id])
  end
end
