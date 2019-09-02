Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'

  resources :grids, only: [:show]

  resources :orders, only: [:create, :index] do
    resources :payments, only: [:new, :create]
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      post '/grids/:id/place_pixel', to: 'grids#place_pixel'
    end
  end
end
