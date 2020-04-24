require 'test_helper'

class GiveyouControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get giveyou_show_url
    assert_response :success
  end

  test "should get new" do
    get giveyou_new_url
    assert_response :success
  end

  test "should get edit" do
    get giveyou_edit_url
    assert_response :success
  end

end
