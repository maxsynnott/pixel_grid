Rails.application.routes.draw do
  get 'messages/content'
  get 'chat_rooms/name'
  devise_for :users
  root to: 'pages#home'
  
  get 'chat_rooms/:id(.:format)', to: 'chat_rooms#show'
  post 'chat_rooms/:chat_room_id/messages(.:format)', to: 'messages#create' as: chat_room_messages

  resources :grids, only: [:show]
end
