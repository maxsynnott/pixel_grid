require 'test_helper'

class GridsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get grids_new_url
    assert_response :success
  end

  test "should get create" do
    get grids_create_url
    assert_response :success
  end

  test "should get show" do
    get grids_show_url
    assert_response :success
  end

  test "should get destroy" do
    get grids_destroy_url
    assert_response :success
  end

end
