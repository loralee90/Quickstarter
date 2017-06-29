# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Reward.destroy_all
Pledge.destroy_all
User.destroy_all
Category.destroy_all
Project.destroy_all

users = User.create!([
  {name: "Guest", email: "guest@guest.com", password: "password"},
  {name: "Lora Lee", email: "loraalee@gmail.com", password: "password"},
  {name: "Bob", email: "bob@bob.com", password: "password"},
  {name: "Sue de Beer Studio", email: "studio@studio.com", password: "password", image: File.open("app/assets/images/sue_avatar.jpg")},
  {name: "Ursula Murray Husted", email: "ursula@ursula.com", password: "password", image: File.open("app/assets/images/ursula_avatar.jpeg")},
  {name: "Nova Iskra", email: "nova@nova.com", password: "password", image: File.open("app/assets/images/folkk_avatar.png")},
  {name: "Input Club", email: "input@input.com", password: "password", image: File.open("app/assets/images/input_club_avatar.png")},
  {name: "Garrett Martin", email: "garrett@garrett.com", password: "password", image: File.open("app/assets/images/garrett_avatar.jpg")},
])
# User.create(name: "Guest", email: "guest@guest.com", password: "password")
# User.create(name: "Lora Lee", email: "loraalee@gmail.com", password: "password")
# User.create(name: "Bob", email: "bob@bob.com", password: "password")

a = Category.create!(name: "Art")
b = Category.create!(name: "Crafts")
c = Category.create!(name: "Design")
d = Category.create!(name: "Fashion")
e = Category.create!(name: "Film & Video")
f = Category.create!(name: "Food")
g = Category.create!(name: "Music")
h = Category.create!(name: "Technology")
i = Category.create!(name: "Theater")

v = Project.create!(
  title: "Oakly: Portable Wireless Keyboard",
  description: "The Oakly is a fully programmable, compact keyboard with an
  oak frame and custom keyswitches. Designed by Matteo + Input Club.",
  end_date: DateTime.new(2017, 8, 1),
  funding_goal: 20000,
  creator_id: users[6].id,
  category_id: c.id,
  image: File.open("app/assets/images/wood_keyboard.jpg"),
  details: "You use your keyboard every day.
  From morning to night you type using your keyboard to express your innermost
  thoughts and ideas. The keyboard is your window into the digital world,
  it allows you to convey your mind in a way unlike any other tool.
  Features in the WhiteFox [Vera]
  Fully Programmable Keys
  Durable PBT Keycaps
  Aluminum Body
  Perfect Compact Layout
  Open Source Hardware
  Our new Halo Mechanical Switches
  The WhiteFox is a new class of mechanical keyboard, a higher quality and
  more adaptable device than what you are used to. Every key is fully programmable,
  our software is open source, and the aesthetic is light and elegant. The keycaps
  are crafted from highly durable PBT engineering plastics, and the legends are
  dye-sublimated so they will never wear or fade. The body is solid aluminum,
  very compact, and can fit on any desk. The rationale behind this keyboard is
  to provide you with a beautiful piece of functional art that you can customize and
  fully control."
)

w = Reward.create!(
  project_id: v.id,
  title: "Oakly Keyboard (Halo True)",
  description: "One Oakly Mechanical Keyboard, fully assembled with
  Halo True tactile mechanical switches.",
  cost: 169,
  delivery_date: DateTime.new(2017, 12)
)

Pledge.create!(
  amount: 5000,
  pledgeable_type: "Reward",
  pledgeable_id: w.id,
  backer_id: users[1].id
)

Pledge.create!(
  amount: 10000,
  pledgeable_type: "Reward",
  pledgeable_id: w.id,
  backer_id: users[3].id
)

Pledge.create!(
  amount: 5000,
  pledgeable_type: "Project",
  pledgeable_id: v.id,
  backer_id: users[0].id
)

n = Project.create!(
  title: "'The Lions of Valletta' Director's Cut",
  description: "A director's cut of The Lions of Valletta- a graphic
  novel about cats, art history, and the meaning of life.",
  end_date: DateTime.new(2017, 7, 26),
  funding_goal: 2000,
  creator_id: users[4].id,
  category_id: a.id,
  image: File.open("app/assets/images/lions_of_valletta.jpeg"),
  details: "The Lions of Valletta is a 150 page, full color, all-ages graphic novel.
  (This isn't a sad story, I promise.) When my dad was diagnosed with a
  pretty advanced form of lymphoma, we planned a trip to Malta so he'd
  have something to look forward to while in treatment. He got better and
  we took the trip in 2004. I was captivated with the landscape of Malta
  and delighted by the large numbers of stray cats that lived by the docks
  and sunned themselves on the UNESCO World Heritage sites as though they
  owned the place. Most of the cats ignored us, some of them begged for
  food or ear scratches, but the most interesting ones considered us gravely
  and moved on. I found myself wondering what they were looking for.
  That question became the kernel of this story embodied in the main
  characters: Cilla and Betto. Cilla feels that life will only be complete
  when she finds a good home with people, while Betto is happy being a cat on
  the docks. Their adventure brings them through city, country, water, and
  eventually to a place where both of them can be happy.
  I have added in many of my favorite things to write and draw: architecture,
  art history, cultural history, philosophy, big questions, small answers,
  boats of all sizes, and fish heads."
)

o = Reward.create!(
  project_id: n.id,
  title: "The Book",
  description: "A signed copy of the Director's Cut Edition of The Lions of Valletta.",
  cost: 25,
  delivery_date: DateTime.new(2017, 11)
)

p = Reward.create!(
  project_id: n.id,
  title: "Artist's Edition of The Book",
  description: "A signed copy of the Kickstarter Gold/Director's Edition of
  The Lions of Valletta with an original watercolor sketch of the book's
  characters on the bookplate.",
  cost: 50,
  delivery_date: DateTime.new(2017, 11)
)

q = Reward.create!(
  project_id: n.id,
  title: "Handbound Edition",
  description: "A kickstarter exclusive handbound copy of the Kickstarter
  Gold/Director's Edition of The Lions of Valletta with an original watercolor
  portrait of the cat of your choice.",
  cost: 250,
  delivery_date: DateTime.new(2017, 12)
)

Pledge.create!(
  amount: 250,
  pledgeable_type: "Reward",
  pledgeable_id: q.id,
  backer_id: users[3].id
)

Pledge.create!(
  amount: 100,
  pledgeable_type: "Reward",
  pledgeable_id: p.id,
  backer_id: users[4].id
)

Pledge.create!(
  amount: 50,
  pledgeable_type: "Reward",
  pledgeable_id: o.id,
  backer_id: users[1].id
)

Pledge.create!(
  amount: 800,
  pledgeable_type: "Project",
  pledgeable_id: n.id,
  backer_id: users[1].id
)

Pledge.create!(
  amount: 300,
  pledgeable_type: "Project",
  pledgeable_id: n.id,
  backer_id: users[0].id
)

r = Project.create!(
title: "Folkk: Handcrafted Homeware With a Cause",
description: "Folkk is a social business that connects Balkan rural artisans
with emerging young designers to make the highest quality homeware.",
end_date: DateTime.new(2017, 7, 20),
funding_goal: 20000,
creator_id: users[5].id,
category_id: b.id,
image: File.open("app/assets/images/folkk.jpg"),
details: "Our aim is to preserve centuries-long legacy of craftsmanship of
the Balkan artisans, by providing them with a steady income, as well as to
give the locally designed and manufactured products worldwide visibility
through our online platform.
We make sure to provide ethical and fair compensation to all the people
involved in the production and supply chain. Folkk is an initiative of Nova
Iskra creative hub from Belgrade, Serbia.
This modular, triform serving board lets you arrange a compelling dinner
or snack arrangement with ease. You can use it as a single large board,
or play around with trapeze-like cuts and use the segments to make up your
own, unique table setting.
It takes more than 100 hours of work and the collaboration of two distanced
craft workshops to create a pillow such  as Ment. Stuffed with unprocessed
wool collected from Serbian shepherds and completed by high-quality twill
on the backside, Ment pillows speak of their infinitely human origin."
)

s = Reward.create!(
  project_id: r.id,
  title: "Folk Supporter",
  description: "Support us on our mission to preserve and advance traditional
  crafts across the Balkans. In return, you will receive endless amount of love!",
  cost: 10,
  delivery_date: DateTime.new(2017, 8)
)

Pledge.create!(
  amount: 3000,
  pledgeable_type: "Project",
  pledgeable_id: r.id,
  backer_id: users[0].id
)

Pledge.create!(
  amount: 5000,
  pledgeable_type: "Reward",
  pledgeable_id: s.id,
  backer_id: users[5].id
)

t = Reward.create!(
  project_id: r.id,
  title: "TAPA Board",
  description: "You will receive one TAPA triform serving & cutting board.
  You will be ready to create endless variations of food arrangements, and
  enjoy your food in an entirely new way! It comes in lavish textures of
  steamed walnut, locally sourced and carefully selected.",
  cost: 70,
  delivery_date: DateTime.new(2017, 10)
)

Pledge.create!(
  amount: 8000,
  pledgeable_type: "Reward",
  pledgeable_id: t.id,
  backer_id: users[4].id
)

u = Reward.create!(
  project_id: r.id,
  title: "MENT Pillow",
  description: "You will receive one MENT, 100% hand-woven, wool-filled pillow.
  It takes more than 100 hours of handwork and collaboration of two remote
  workshops to create a single MENT. There's nothing like it.",
  cost: 110,
  delivery_date: DateTime.new(2017, 10)
)

Pledge.create!(
  amount: 1000,
  pledgeable_type: "Reward",
  pledgeable_id: u.id,
  backer_id: users[4].id
)

j = Project.create!(
  title: "the White Wolf",
  description: "A low-budget, intellectual horror-thriller that fuses
  the structure of a classic werewolf story with the Italian Giallo.",
  end_date: DateTime.new(2017, 7, 28),
  funding_goal: 5000,
  creator_id: users[3].id,
  category_id: a.id,
  image: File.open("app/assets/images/white_wolf.jpg"),
  details: "Dear Friends,
  This Kickstarter is to support my new film, The White WOLF, - a low-budget,
  intellectual horror-thriller that fuses the structure of a classic werewolf
  story with the Italian Giallo.
  The White Wolf is set in the 1980’s on a small island off the coast of New
  England.The film focuses on a terminally ill Patient who is travelling along
  the coast ofMaine to visit a lighthouse remembered from his childhood.
  The island is now the site of a medical clinic, overseen by a reclusive
  Doctor, who is also a lecturer at a local university.
  The non-linear narratives reveal the greater themes of the film’s premise:
  transformation by way of an unreliable sense of self; an unreliable sense
  of self by way of longings or desires; longings or desires by way of dire
  circumstances. I created a short ASK film to tell you more about this project,
  my process, and how the funding would be used. Click above to see.
  I have had difficulty returning my major films to the internet, because of
  my history of music piracy. For this film I am committed to doing an original
  score so that the film can be watched online by a broader public. So after
  its gallery run, everyone can see this film.
  Those of you who make films know how much teamwork goes into making even
  the shortest films. I ask you to support independent, creative filmmaking—and
  to support it as a producer by contributing to this campaign.
  Thank you in advance, and I hope that you join me on the scary, beautiful
  universe of my new film The White WOLF.
  xoxo,
  Sue de Beer"
)

k = Reward.create!(
  project_id: j.id,
  title: "Private Vimeo Link to the Final Film",
  description: "You will receive a vimeo link with a password to the finished
  film for the duration of its initial run at the Gallery. If you are not NYC
  based, this will give you access to the work while it is on view in New York City.",
  cost: 10,
  delivery_date: DateTime.new(2018, 5)
)

Pledge.create!(
  amount: 200,
  pledgeable_type: "Reward",
  pledgeable_id: k.id,
  backer_id: users[0].id
)

l = Reward.create!(
  project_id: j.id,
  title: "Movie Night at Marianne Boesky Gallery",
  description: "A Movie Night at Marianne Boesky Gallery. Contributors will be
  able to preview the film with me before it opens to the public. Popcorn will be served.",
  cost: 25,
  delivery_date: DateTime.new(2018, 5)
)

m = Reward.create!(
  project_id: j.id,
  title: "Limited Edition Film Poster",
  description: "An unframed archival inkjet print, dims: 16\" x 20\", signed. Edition of 100",
  cost: 75,
  delivery_date: DateTime.new(2017, 11)
)

Pledge.create!(
  amount: 900,
  pledgeable_type: "Reward",
  pledgeable_id: k.id,
  backer_id: users[1].id
)

Pledge.create!(
  amount: 750,
  pledgeable_type: "Reward",
  pledgeable_id: k.id,
  backer_id: users[2].id
)

Pledge.create!(
  amount: 250,
  pledgeable_type: "Reward",
  pledgeable_id: k.id,
  backer_id: users[3].id
)

x = Project.create!(
  title: "UNBOUNDED: A Feature Documentary",
  description: "4 travelers. 4 months. No support team. A documentary
  following an adventure into Patagonia for exploration and conservation.",
  end_date: DateTime.new(2017, 7, 28),
  funding_goal: 5000,
  creator_id: users[7].id,
  category_id: e.id,
  image: File.open("app/assets/images/mountain_climb.jpg"),
  details: "'Unbounded' is an adventure-travel documentary following a young,
  unaided crew of four as they hike and pack-raft for four months into the infinite
  region known as Patagonia. The crew’s journey is based along the \“Greater Patagonian
  Trail,\" a relatively unknown route that is now the longest continual trail network
  in South America. The adventure takes the crew through dense forests, snow-capped
  mountains, active volcanoes, barren deserts and everything in-between. The film focuses
  on discovering the indescribable factors of the region, learning the history and culture
  of the people living amongst the Andes, and bringing to light the incredible beauty of
  the area – all in an effort to help raise awareness of the need to preserve this untamed,
  but delicate environment. A portion of the film's proceeds will go towards environmental
  organizations in Chile to help protect and maintain the rivers and landscapes in this
  unique part of the world."
)

Reward.create!(
  project_id: x.id,
  title: "Digital Photo Album",
  description: "An exclusive digital photo album of the best photos from
  the trip + behind-the-scenes updates on the film.",
  cost: 10,
  delivery_date: DateTime.new(2017, 8)
)

Pledge.create!(
  amount: 5000,
  pledgeable_type: "Project",
  pledgeable_id: x.id,
  backer_id: users[1].id
)

y = Project.create!(
  title: "Drones: A Feature Documentary",
  description: "A film about drones and their effect on the world.",
  end_date: DateTime.new(2017, 7, 28),
  funding_goal: 5000,
  creator_id: users[1].id,
  category_id: e.id,
  image: File.open("app/assets/images/drone.jpg"),
  details: "'Drones' is an adventure documentary following a crew of ,
  soldiers as they hike and pack-raft for four months into the infinite
  region known as Patagonia. The crew’s journey is based along the \“Greater Patagonian
  Trail,\" a relatively unknown route that is now the longest continual trail network
  in South America. The adventure takes the crew through dense forests, snow-capped
  mountains, active volcanoes, barren deserts and everything in-between. The film focuses
  on discovering the indescribable factors of the region, learning the history and culture
  of the people living amongst the Andes, and bringing to light the incredible beauty of
  the area – all in an effort to help raise awareness of the need to preserve this untamed,
  but delicate environment. A portion of the film's proceeds will go towards environmental
  organizations in Chile to help protect and maintain the rivers and landscapes in this
  unique part of the world."
)

Reward.create!(
  project_id: y.id,
  title: "Early Screening",
  description: "An exclusive release screening in New York City.",
  cost: 10,
  delivery_date: DateTime.new(2017, 10)
)

Pledge.create!(
  amount: 5000,
  pledgeable_type: "Project",
  pledgeable_id: y.id,
  backer_id: users[6].id
)
