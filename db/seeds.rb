# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Dash = User.create!(
  avatar_url: "https://avatars0.githubusercontent.com/u/8090140?v=4&s=460",
  email: "dash@lewagon.org",
  password: "123123"
)
Max = User.create!(
  avatar_url: "https://avatars2.githubusercontent.com/u/2471555?v=4&s=460",
  email: "max@lewagon.org",
  password: "123123"
)
Syad = User.create!(
  avatar_url: "https://avatars2.githubusercontent.com/u/414418?v=4&s=460",
  email: "syad@lewagon.org",
  password: "123123"
)
chat_room = ChatRoom.create!(name: "general")

message_1 = Message.create!(
  content: "Hello",
  chat_room: chat_room,
  user: dash
)
message_2 = Message.create!(
  content: "Hey",
  chat_room: chat_room,
  user: max
)
message_3 = Message.create!(
  content: "Yo",
  chat_room: chat_room,
  user: syad
)
