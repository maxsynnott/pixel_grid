Rails.application.routes.draw do
  require "sidekiq/web"
  devise_for :users

  authenticate :user, lambda { |u| u.admin } do
    mount Sidekiq::Web => '/sidekiq'
  end

  root to: 'pages#home'

  resources :grids, only: [:show] do
    resources :group_chats, only: [:create]
  end

  resources :orders, only: [:create, :index] do
    resources :payments, only: [:new, :create]
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      post '/grids/:id/place_pixel', to: 'grids#place_pixel'
      get '/group_chats/:id/messages', to: 'group_chats#messages'
      post '/group_chats/:id/create_message', to: 'group_chats#create_message'
    end
  end

  resources :group_chats, only: [:show]
end
