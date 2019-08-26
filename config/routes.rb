Rails.application.routes.draw do
  get 'orders/new'
  get 'orders/create'
  get 'orders/show'
  get 'orders/index'
  get 'placements/create'
  get 'grids/new'
  get 'grids/create'
  get 'grids/show'
  get 'grids/destroy'
  devise_for :users
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
