require 'test_helper'

class MessagesControllerTest < ActionDispatch::IntegrationTest
  test "should get content" do
    get messages_content_url
    assert_response :success
  end

end
