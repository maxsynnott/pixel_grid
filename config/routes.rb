Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :grids, only: [:show]
  resources :messages, only: [:new, :create]

end
