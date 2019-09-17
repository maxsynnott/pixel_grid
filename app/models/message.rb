class Message < ApplicationRecord
  belongs_to :group_chat
  belongs_to :user

  after_create :broadcast_message

  private

  def broadcast_message
    ActionCable.server.broadcast("group_chat_#{group_chat.id}", author: user.username, content: content)
  end
end
