Rails.application.routes.draw do
  resources :artists
  resources :users
  get "/sessions", to: "sessions#index"
end
