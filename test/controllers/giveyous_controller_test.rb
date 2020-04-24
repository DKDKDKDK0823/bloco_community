require 'test_helper'

class GiveyousControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get giveyous_show_url
    assert_response :success
  end

  test "should get new" do
    get giveyous_new_url
    assert_response :success
  end

  test "should get edit" do
    get giveyous_edit_url
    assert_response :success
  end

end
