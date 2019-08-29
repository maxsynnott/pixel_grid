Rails.application.routes.draw do
  get 'chat_rooms/name'
  devise_for :users
  root to: 'pages#home'

  resources :grids, only: [:show]
end
