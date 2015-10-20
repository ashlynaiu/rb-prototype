require 'test_helper'

class RbControllerTest < ActionController::TestCase
  test "should get leadlist" do
    get :leadlist
    assert_response :success
  end

end
