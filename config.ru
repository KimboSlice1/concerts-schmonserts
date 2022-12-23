# This file is used by Rack-based servers to start the application.

require_relative "config/environment"

# Allow CORS requests
# use Rack::Cors do
#     allow do
#         origins '*'
# Once we know what we want our front end to fetch to like localhost/3000

# resource '*' , headers: :any, methods:[:get, :post, :delete, :put, :patch, :options, :head]
#     end
# end

# use Rack::JSONBodyParser

run Rails.application
Rails.application.load_server
