class Api::V1::GroupChatsController < Api::V1::BaseController
  def messages
    @group_chat = GroupChat.find(params[:id].to_i)
    messages = {}
    @group_chat.messages.each do |mes|
      messages[mes.id] = { content: mes.content,
                           author: mes.user.email,
                           created: mes.created_at }
    end
    render json: messages
  end

  def create_message
    Message.create!(user: current_user, group_chat_id: params[:id].to_i, content: params[:content])
  end
end
