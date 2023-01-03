Rails.application.routes.draw do
  resources :concerts
  resources :artists
  resources :users
  resources :sessions, only: [:create]
#   update later when adding delete and shit
#   delete :logout, to: "sessions#logout"
#   get :logged_in, to: "sessions#logged_in"
#   resources :registrations, only: [:create]
#   get "/sessions", to: "sessions#index"
# root to: "static#home"
end
