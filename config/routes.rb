Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :grids, only: [:show]

  resources :orders, only: [:create, :index] do
    resources :payments, only: [:new, :create]
  end

end
