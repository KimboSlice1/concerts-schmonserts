Rails.application.routes.draw do
  resources :concerts, only: [ :index, :show, :create, :update, :destroy]
  resources :artists
  resources :users, only: [:login]
  resources :sessions, only: [:create]
  resources :addartists, only: [ :show ]
#   update later when adding delete and shit


post '/login', to:'sessions#create'
post '/login', to:'sessions#login'
#   delete :logout, to: "sessions#logout"
#   get :logged_in, to: "sessions#logged_in"
#   resources :registrations, only: [:create]
#   get "/sessions", to: "sessions#index"
# root to: "static#home"
end
