require 'test_helper'

class PlacementsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get placements_create_url
    assert_response :success
  end

end
