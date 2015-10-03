require 'test_helper'

class RbControllerTest < ActionController::TestCase
  test "should get financial-details" do
    get :financial-details
    assert_response :success
  end

end
