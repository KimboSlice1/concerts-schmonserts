class ApplicationController < ActionController::API
  include ActionController::Cookies
  
  # skip_before_action :verify_authenticity_token
  # rails has rules when communicating with routes. this rule is a token. this token is generated by the system by our secret key value and it makes sure the user is the real user. in an api we need to skip that process and thats what this does
 
end