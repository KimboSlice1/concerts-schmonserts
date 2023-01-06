Rails.application.routes.draw do
  resources :concerts, only: [ :index, :show, :create, :update, :destroy]
  resources :artists, only: [ :show, :create, :index]
  resources :users, only: [:login, :show, :create, :index]
  resources :sessions, only: [:create]
  resources :addartists, only: [ :show ]
#   update later when adding delete and shit


  post '/login', to:'sessions#create'
  delete '/sessions', to: 'sessions#destroy'
  get    "/userInSession", to:"sessions#get_logged_in_user" 
  delete '/logout/:id', to: 'sessions#logout'

  get "/cookie-click", to: "sessions#click"
end
