Rails.application.routes.draw do
  resources :concerts
  resources :artists
  resources :users
  get "/sessions", to: "sessions#index"
end
