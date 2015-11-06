require 'test_helper'

class RbControllerTest < ActionController::TestCase
  test "should get opportunity" do
    get :opportunity
    assert_response :success
  end

end
