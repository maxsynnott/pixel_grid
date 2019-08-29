require 'test_helper'

class ChatRoomsControllerTest < ActionDispatch::IntegrationTest
  test "should get name" do
    get chat_rooms_name_url
    assert_response :success
  end

end
