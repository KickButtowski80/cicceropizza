require 'test_helper'

class MenusControllerTest < ActionController::TestCase
  test "should get lunch" do
    get :lunch
    assert_response :success
  end

  test "should get dinner" do
    get :dinner
    assert_response :success
  end

end
