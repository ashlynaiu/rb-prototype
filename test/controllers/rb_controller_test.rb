require 'test_helper'

class RbControllerTest < ActionController::TestCase
  test "should get people" do
    get :people
    assert_response :success
  end

end
