require 'test_helper'

class DataControllerTest < ActionController::TestCase
  test "should get creator" do
    get :creator
    assert_response :success
  end

end
