class GroupChatsController < ApplicationController
  def create
    @group_chat = GroupChat.new(group_chat_params)
    @group_chat.grid = Grid.find(params[:grid_id])
    @group_chat.save

    redirect_to grid_path(@group_chat.grid)
  end

  def show
    @group_chat = GroupChat.find(params[:id])
  end

  private

  def group_chat_params
    params.require(:group_chat).permit(:name)
  end
end
