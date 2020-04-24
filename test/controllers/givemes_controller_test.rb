require 'test_helper'

class GivemesControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get givemes_show_url
    assert_response :success
  end

  test "should get new" do
    get givemes_new_url
    assert_response :success
  end

  test "should get edit" do
    get givemes_edit_url
    assert_response :success
  end

end
