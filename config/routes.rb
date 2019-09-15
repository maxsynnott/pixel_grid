Rails.application.routes.draw do
  require "sidekiq/web"
  devise_for :users

  authenticate :user, lambda { |u| u.admin } do
    mount Sidekiq::Web => '/sidekiq'
  end

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
