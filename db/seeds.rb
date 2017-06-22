# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: "Guest", email: "guest@guest.com", password: "password")
User.create(name: "Lora Lee", email: "loraalee@gmail.com", password: "password")
User.create(name: "Bob", email: "bob@bob.com", password: "password")

Project.create(
  title: "Violini - The World's Smallest Violin",
  url: "mini.com",
  description: "World's smallest violin",
  end_date: Date.now(),
  funding_goal: 1000,
  creator_id: 1,
  category_id: 1  
)
