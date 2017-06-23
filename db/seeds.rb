# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create(name: "Guest", email: "guest@guest.com", password: "password")
User.create(name: "Lora Lee", email: "loraalee@gmail.com", password: "password")
User.create(name: "Bob", email: "bob@bob.com", password: "password")

Project.destroy_all
Project.create(
  title: "Violini - The World's Smallest Violin",
  description: "World's smallest violin",
  end_date: DateTime.now,
  funding_goal: 1000,
  creator_id: 1,
  category_id: 1
)

Project.create(
  title: "Pegasus - The Flying Car",
  description: "A car that flies!",
  end_date: DateTime.now,
  funding_goal: 50000,
  creator_id: 2,
  category_id: 2
)

Category.destroy_all
Category.create(name: "Art")
Category.create(name: "Crafts")
Category.create(name: "Design")
Category.create(name: "Fashion")
Category.create(name: "Film & Video")
Category.create(name: "Food")
Category.create(name: "Music")
Category.create(name: "Technology")
Category.create(name: "Theater")
