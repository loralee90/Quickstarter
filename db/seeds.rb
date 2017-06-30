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
  {name: "Lora Lee", email: "loraalee@gmail.com", password: "password", image: File.open("app/assets/images/photo.jpg")},
  {name: "Bob", email: "bob@bob.com", password: "password"},
  {name: "Sue de Beer Studio", email: "studio@studio.com", password: "password", image: File.open("app/assets/images/sue_avatar.jpg")},
  {name: "Ursula Murray Husted", email: "ursula@ursula.com", password: "password", image: File.open("app/assets/images/ursula_avatar.jpg")},
  {name: "Nova Iskra", email: "nova@nova.com", password: "password", image: File.open("app/assets/images/folkk_avatar.png")},
  {name: "Input Club", email: "input@input.com", password: "password", image: File.open("app/assets/images/input_club_avatar.png")},
  {name: "Garrett Martin", email: "garrett@garrett.com", password: "password", image: File.open("app/assets/images/garrett_avatar.jpg")},
  {name: "Senic", email: "senic@senic.com", password: "password", image: File.open("app/assets/images/senic_avatar.jpg")},
  {name: "eto wine", email: "eto@eto.com", password: "password", image: File.open("app/assets/images/eto_avatar.jpg")},
  {name: "John Vanderslice", email: "john@john.com", password: "password", image: File.open("app/assets/images/vanderslice_avatar.jpeg")},
  {name: "Rise Grand Rapids", email: "rise@rise.com", password: "password", image: File.open("app/assets/images/grand_rapids_avatar.png")},
  {name: "Timbuktu Labs", email: "timbuktu@timbuktu.com", password: "password", image: File.open("app/assets/images/timbuktu_avatar.jpg")},
  {name: "Freshly Picked", email: "freshly@freshly.com", password: "password", image: File.open("app/assets/images/freshly_picked_avatar.png")},
])

a = Category.create!(name: "Art")
b = Category.create!(name: "Crafts")
c = Category.create!(name: "Design")
d = Category.create!(name: "Fashion")
e = Category.create!(name: "Film & Video")
f = Category.create!(name: "Food")
g = Category.create!(name: "Music")
h = Category.create!(name: "Publishing")
i = Category.create!(name: "Technology")

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
  fully control. We also invented two new types of mechanical keyswitches
  that are available as options for the WhiteFox. Our goal when inventing
  these switches was to significantly reduce \"pre-load\" or the initial
  effort required when you first touch a switch. With this new capability,
  we were able to recreate the feeling of the most desirable keyboards in
  the world in a simple mechanical switch. Years of experimentation and prototyping
  went into the development of the WhiteFox and it is filled with small details
  that make all the difference. For example, the arrow key cluster is slightly
  separated from the control keys, making it easier to switch from typing to navigating
  solely by touch. The plate that the mechanical keyswitches are mounted into is the
  perfect thickness of aluminum to allow slight flex, making your typing experience
  much easier on your fingers. Designed by the team at Input Club in collaboration
  with Matteo Spinelli, the WhiteFox [Vera] is the latest release in our series of
  mechanical keyboards. All Input Club products run on the Keyboard Layout Language
  (KLL) we created. KLL is a new type of “BIOS for keyboards” that allows maximum
  functionality across Windows, Mac OS, and Linux. Inherent to this design are
  features like N-Key Rollover, individual key programming, and custom layouts.
  This feature set allows you to type accurately at any speed as well as create
  custom macro options for every key on a hardware level using our configurator."
)

Reward.create!(
  project_id: v.id,
  title: "Keyboard Kit (No Switches)",
  description: "One Oakly Mechanical Keyboard Kit, with no switches.
  Keycaps are included. NOTE: Do not purchase this if you do not own a soldering iron!",
  cost: 159,
  delivery_date: DateTime.new(2017, 12)
)

w = Reward.create!(
  project_id: v.id,
  title: "Oakly Keyboard (Halo True)",
  description: "One Oakly Mechanical Keyboard, fully assembled with
  Halo True tactile mechanical switches.",
  cost: 169,
  delivery_date: DateTime.new(2017, 12)
)

Reward.create!(
  project_id: v.id,
  title: "2x WhiteFox Kits",
  description: "Two WhiteFox Mechanical Keyboards, both unassembled kits.
  This option does not contain mechanical switches, but it does come with keycaps.",
  cost: 320,
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
  boats of all sizes, and fish heads. The Director's Cut Edition expands on
  the beginning and ending of the story with 24 new pages, footnotes for those
  pages, a new cover, and book design. The most important thing that I hope
  to accomplish with this Quickstarter is to have more people read my book!
  In service of this goal, all funding levels result in backers receiving a
  copy of the Lions of Valletta: Director's Cut Edition. At $25 backers will
  receive a signed copy of the Director's Cut Edition of The Lions of Valletta.
  At $50 that signed book will also contain a color sketch of the main characters.
  Anyone who supports the project at $50 or higher will automatically receive
  all of the unlocked stretch goal perks for no additional charge. At
  $250 backers will receive a signed and sketched copy of the Director's
  Cut Edition of The Lions of Valletta, all of the stretch goal perks, AND a
  handbound copy of the book with an original watercolor portrait of the
  cat/cats of their choice (limited to three cats in total, please!). I was
  delighted at how quickly the handbound edition sold out the last campaign
  and have been scheming ever since on how to make an even posher edition!
  (Let's be honest, I will take any excuse to go fancy paper shopping.) This
  handbound edition is exclusive to the backers of this Quickstarter and will
  feature handmade  paper covered bookboards, a hand-painted cover design,
  waxed linen thread in an elaborate stab-style binding, and about 60 hours
  of work in total. Happy, happy work. I am a book nerd: both in the making
  and the reading. Thank you for letting me share my craft and love of historical methods!"
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
  description: "A signed copy of the Quickstarter Gold/Director's Edition of
  The Lions of Valletta with an original watercolor sketch of the book's
  characters on the bookplate.",
  cost: 50,
  delivery_date: DateTime.new(2017, 11)
)

q = Reward.create!(
  project_id: n.id,
  title: "Handbound Edition",
  description: "A Quickstarter exclusive handbound copy of the Quickstarter
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
own, unique table setting. Enhancing the functionality of a much-used everyday
object such as a plate, this beautifully imagined and carefully crafted piece
has a two-sided design. Use Plato for everyday meals or arrange a unique
combination of finger food and nibbles to share in those special moments.
It takes more than 100 hours of work and the collaboration of two distanced
craft workshops to create a pillow such  as Ment. Stuffed with unprocessed
wool collected from Serbian shepherds and completed by high-quality twill
on the backside, Ment pillows speak of their infinitely human origin. It
takes more than 100 hours of work and the collaboration of two distanced
craft workshops to create a pillow such  as Ment. Stuffed with unprocessed
wool collected from Serbian shepherds and completed by high-quality twill
on the backside, Ment pillows speak of their infinitely human origin. All
Resa kilims are hand-woven from 100% locally-sourced wool and come in vivid,
stable colors that will liven up any interior they land in. Weavers from
the south of Serbia use traditional techniques, looms and tools that are
grounded in deep cultural experience. It requires more than 150 working
hours to complete one of these exquisite kilims."
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
  This Quickstarter is to support my new film, The White WOLF, - a low-budget,
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
  circumstances. This is my sixth major film, and with every film I have done,
  the Ghosts, Black Sun, the Quickening, I have done the equivalent of an
  ‘offline Quickstarter’ to raise money to get them made. It often takes between
  2 to 3 years to create these works. Sometimes this time delay is creative, but
  sometimes it has simply been about finding money to shoot. I am hoping that
  through trying the Quickstarter model, I’ll find a new way to fundraise for
  these substantial films. And through this process, I’m hoping to make collaboration
  and investment in projects like this one transparent and inspiring so that other
  video artists or film makers might do the same. I created a short ASK film to tell
  you more about this project,
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
  unique part of the world. In the simplest of terms, it's about protecting wild places.
  The film follows our adventure, our experiences, the culture and the people we
  meet along the way but in the end, it's about something much, much bigger - conservation.
  The country is currently at risk due to mega hydro-electric dams, mining,
  unsustainable development and other issues that threaten the incredible biodiversity
  and fragile state of this land. Our hope is to create awareness to these issues,
  among others, and raise funds through the proceeds of the film to contribute to
  environmental organizations in Chile who are working to protect this beautiful
  region for future generations. On December 22nd, 2016, we set off on a 4-month
  journey to Chile in order to document our experience trekking and pack-rafting
  along the Andes Mountains without any additional support. We aimed to follow a new,
  up-and-coming trail, \"The Greater Patagonian Trail\", which is the longest
  continual trail network in South America. The trip was full of ups and downs
  as we got caught in the worst fires Chile has seen in modern history, became
  stuck in an overgrown forest and nearly ran out of food, had to rappel down steep,
  eroded rock cliffs and much, much more. Being in our early twenties and lacking experience,
  this trip tested us every day both physically and mentally, not only through the hiking and
  pack-rafting, but the challenges of documenting our journey as well. Fortunately,
  we completed our trip safely and ended up retrieving enough footage to create
  the feature documentary that we envisioned - inspiring adventure and encouraging
  activism and conservation of wild places, specifically Chile. We have been back
  for two months now and have begun putting the footage together, writing the script,
  getting everything ready for editing and, of course, adjusting back into society
  after being in the wild for four months straight!"
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
  unique part of the world. In order to achieve my goal of creating this documentary
  film my crew will need to travel at various seasons of the year to capture the best
  imagery.  We intend to go to several different states in the western US and will be
  filming at many different locations. Besides travel expenses there will
  be costs associated with necessary additional equipment and permits. After
  filming we will have expenses of editing and music licensing. I have
  traveled extensively throughout the western US and a few of my favorite
  photographs will be offered as your reward for supporting this project.
  If any of you out of the US would like to have one of the large photos
  please send a request in comments section and I'll update the shipping information."
)

Reward.create!(
  project_id: y.id,
  title: "Early Screening",
  description: "An exclusive release screening in New York City.",
  cost: 10,
  delivery_date: DateTime.new(2017, 10)
)

Reward.create!(
  project_id: y.id,
  title: "Movie Night at Marianne Boesky Gallery",
  description: "A Movie Night at Marianne Boesky Gallery. Contributors will be
  able to preview the film with me before it opens to the public. Popcorn will be served.",
  cost: 25,
  delivery_date: DateTime.new(2018, 5)
)

Reward.create!(
  project_id: y.id,
  title: "Limited Edition Film Poster",
  description: "An unframed archival inkjet print, dims: 16\" x 20\", signed. Edition of 100",
  cost: 75,
  delivery_date: DateTime.new(2017, 11)
)

Pledge.create!(
  amount: 5000,
  pledgeable_type: "Project",
  pledgeable_id: y.id,
  backer_id: users[6].id
)

z = Project.create!(
  title: "COVI: Speech-Enabled Light & Open Source Smart Home Hub",
  description: "COVI is a speech-enabled light that automates your home - the perfect balance of open source smart home tech and interior design!",
  end_date: DateTime.new(2017, 8, 28),
  funding_goal: 85000,
  creator_id: users[8].id,
  category_id: i.id,
  image: File.open("app/assets/images/covi_light.jpg"),
  details: "COVI is a smart speech interface. You can ask questions and make
  requests in an innately human way - no screens or menus necessary.
  As a speech interface enabled device, COVI provides support and control of
  your smart home in a seamless way - blending into the background until
  you need it. COVI works with Amazon Alexa, so you can start talking to it
  and asking questions from the moment it arrives. The integrated system is
  cloud-based, which means it’s always getting smarter and more in tune with you.
  COVI is a piece of furniture first and foremost - it blends stylishly into
  your home while supporting your daily activities. COVI’s design pays homage
  to a traditional kerosene lamp. The knob, previously reserved for regulating
  the flow of oil, has been modernized into a dimming switch that controls
  high-quality warm and cool white LEDs. Light has a massive impact on human
  wellbeing and our ability to focus or relax. This is a result of the particular
  qualities of natural light that change throughout the day. The body is naturally
  responsive to cool-toned light and releases hormones that signal the brain to
  wake up and be alert. Alternatively, warm-toned light puts the brain at ease,
  making it easier to relax and fall asleep. COVI understands and adapts to your
  natural cycles. COVI embodies Senic’s belief that technology should promote
  the wellbeing of users. COVI has a preset that mimics the quality of natural light
  throughout the day. COVI provides the right blend of cool white light for your
  morning wake-up routine and warm white as you relax before bed. Text-based
  notifications can be a huge distraction - and the dopamine rush of getting
  ‘ping’ from your phone has been proven addictive. With COVI, you can make
  sure you’re up to date on the most important notifications, passively.
  COVI lets you know when you need to pay attention via ambient light-based
  notifications so you can stay focused on the things that matter. COVI is built
  on an open source platform. The Senic team, along with outside developers,
  contributes to this platform to create the integrations for COVI. Thanks to
  this platform, installers and integrators that are interested in home
  automation can easily incorporate COVI into their unique ecosystem of devices."
)

Reward.create!(
  project_id: z.id,
  title: "Friends of Senic",
  description: "Show your love to the Senic Team and be featured in our 'Making of COVI documentary'",
  cost: 5,
  delivery_date: DateTime.new(2017, 8)
)

Reward.create!(
  project_id: z.id,
  title: "Senic T-Shirt or Tote Bag",
  description: "Show your love to the Senic and COVI with some Senic Swag!",
  cost: 25,
  delivery_date: DateTime.new(2017, 8)
)

Reward.create!(
  project_id: z.id,
  title: "Hub",
  description: "One Senic Hub that can automate your home and works with Nuimo.
  **The Hub does NOT include speech interface capability and does NOT function as a lamp.
  Save 50% off the retail price!",
  cost: 49,
  delivery_date: DateTime.new(2017, 8)
)

Reward.create!(
  project_id: z.id,
  title: "Early Bird COVI",
  description: "One COVI. Save 53% off the retail price!",
  cost: 139,
  delivery_date: DateTime.new(2018, 3)
)

Pledge.create!(
  amount: 5000,
  pledgeable_type: "Project",
  pledgeable_id: z.id,
  backer_id: users[6].id
)

Pledge.create!(
  amount: 5000,
  pledgeable_type: "Project",
  pledgeable_id: z.id,
  backer_id: users[1].id
)

Pledge.create!(
  amount: 20000,
  pledgeable_type: "Project",
  pledgeable_id: z.id,
  backer_id: users[2].id
)

Pledge.create!(
  amount: 40000,
  pledgeable_type: "Project",
  pledgeable_id: z.id,
  backer_id: users[3].id
)

aa = Project.create!(
  title: "eto: a beautiful innovation in wine preservation.",
  description: "Elegant wine decanter with unique, patented system that keeps your wine tasting perfectly fresh, ensuring you never waste a drop again.",
  end_date: DateTime.new(2017, 7, 28),
  funding_goal: 71269,
  creator_id: users[9].id,
  category_id: c.id,
  image: File.open("app/assets/images/eto.png"),
  details: "eto is a beautifully designed wine decanter that gives you the
  freedom to enjoy wine at your own pace, and never waste a drop again.
  Its innovative, patented preservation system uses an airtight seal to
  keep wine perfectly fresh for at least 12 days, as proven by independent
  laboratory tests and a host of expert blind taste tests. eto is exceptionally
  easy to use. Its unique design ensures every step is quick, clean and
  complements the traditional ritual of enjoying wine. Due to its patented
  preservation system that creates an airtight seal over the wine, eto halts
  the oxidation process, which in turn preserves the wine’s freshness and taste.
  As we become more health-consciousness, more and more of us are choosing to
  enjoy just a glass or two rather than several – or even save our wine drinking
  for the weekend. eto gives us this freedom. With eto you can open and
  savour that treasured bottle over several days or even weeks. The long funnel
  gently oxygenates the wine to release its flavours and the sharp lip
  ensures drip-free pouring. eto’s ability to prevent wine oxidation has
  been proven by independent tests carried out at Bangor University. The
  graph shows just how effective eto is compared to other wine preservation products.
  eto underwent rigorous testing and re-testing over a 12 month period with a
  variety of red and white wines. The results were indisputable - eto far
  out-performed competitor products in every tightly-monitored test. While
  science proved eto prevented oxidation, blind taste tests with wine
  experts showed that eto protected the quality of the wine too. 'Master of Wine'
  Richard Hemming – and writer at JancisRobinson.com – took part in two
  separate blind taste tests, comparing freshly opened wine with its eto
  7 day preserved equivalent. “On the seventh day ... for me, the results
  were unanimous: there was no perceptible difference between a freshly
  opened bottle and the eto-stored sample” After taking part in a similar blind
  taste test, Wine Director at Honest Grapes, Tom Harrow, commented “A wine
  which had been decanted (into eto) seven days beforehand tasted every bit
  as fresh as a wine which had come from a recently opened bottle. But it
  also had the added benefits of decanting, in that the wine was breathing ... it was opening up ...
  it tasted absolutely delicious.” I am Tom Cotton, an award-winning industrial
  designer with nearly 20 years experience of bringing products from concept
  to market. I am passionate about protecting the environment, and in 2011
  became interested in designing a product that helped to reduce wine wastage."
)

ab = Reward.create!(
  project_id: aa.id,
  title: "SUPPORTER - STAY IN THE LOOP",
  description: "Get the latest news and updates on eto and be the first to hear about exclusive offers.",
  cost: 5,
  delivery_date: DateTime.new(2018, 2)
)

Reward.create!(
  project_id: aa.id,
  title: "SOLO - Stainless",
  description: "Get an exclusive Quickstarter price for 1 x stainless steel eto decanters. Est. retail price of $79",
  cost: 59,
  delivery_date: DateTime.new(2018, 2)
)

ac = Reward.create!(
  project_id: aa.id,
  title: "SOLO - Copper",
  description: "Get an exclusive Quickstarter price for 1 x copper coloured eto decanter. Est. retail price of $89",
  cost: 69,
  delivery_date: DateTime.new(2018, 2)
)

Reward.create!(
  project_id: aa.id,
  title: "DUO - Stainless",
  description: "Get an exclusive Quickstarter price for 2 x stainless steel eto decanters. Est. retail price of $158",
  cost: 109,
  delivery_date: DateTime.new(2018, 2)
)

Pledge.create!(
  amount: 20000,
  pledgeable_type: "Project",
  pledgeable_id: aa.id,
  backer_id: users[1].id
)

Pledge.create!(
  amount: 20000,
  pledgeable_type: "Project",
  pledgeable_id: aa.id,
  backer_id: users[0].id
)

Pledge.create!(
  amount: 1039,
  pledgeable_type: "Reward",
  pledgeable_id: ac.id,
  backer_id: users[2].id
)

Pledge.create!(
  amount: 30000,
  pledgeable_type: "Reward",
  pledgeable_id: ab.id,
  backer_id: users[3].id
)

ad = Project.create!(
  title: "Quickstarter Gold: Tiny Telephone Oakland: Rai$e The Roof",
  description: "We need to rebuild our roof!",
  end_date: DateTime.new(2017, 7, 24),
  funding_goal: 33000,
  creator_id: users[10].id,
  category_id: g.id,
  image: File.open("app/assets/images/tiny_telephone.jpg"),
  details: "Okay, we crossed our funding goal, THANK YOU!!! Here's our first stretch goal:
  Quickstarter Stretch Goal #1: If we cross $40k, I'll buy a vintage Roland
  TR-808 drum machine for Tiny Telephone. The 808 is incredibly versatile and
  influential. I'll come up with something good for the next stretch goal.
  If you have any ideas, please send them!! A quick note about purchasing days:
  You can buy as many as you like, just pledge any factor of $200 and I'll know
  how many days you have. The days NEVER expire, they can be used in any of the
  three rooms, and they can be gifted to anyone. They are really easy to use:
  we don't prioritize non-KS folks, it's strictly first come, first served.
  Hello, everyone! My name is John Vanderslice, and I'm the owner and proprietor
  of Tiny Telephone Recording in San Francisco. Since opening 20 years ago,
  we've become one of the busiest studios on the West Coast, and one of the
  last to be running analog multi-track tape machines full-time. I've always
  kept our rates low to attract independent bands of all levels and make
  creative studio recording a possibility for all musicians. Over the years,
  we’ve recorded some bands you may have heard of (Deerhoof, Mountain Goats,
  Death Cab For Cutie, Sleater-Kinney) but the thing I am most proud of is
  the democratic, working-class ethos of Tiny Telephone, and the independent
  creative community to which this studio is deeply connected. We work very hard
  every day to help bands make the masterpieces they've always dreamed of creating
  on a realistic budget. Which is why I built ANOTHER studio…. Two years ago,
  with the unbelievable support of a community of 429 backers from 21
  countries, we built Tiny Telephone Oakland. It's been a year and a half
  since the Oakland studio opened and we've had a thrilling and nerve-wracking
  time. We've been sold out every day since January 21st of last year, and we've
  had a wonderful mix of local and national artists: Samantha Crain, Grandaddy,
  Tuneyards, Boz Scaggs, Dodos, Gay Men's Chorus of the East Bay, Nikki Bluhm and
  over 60 more. We fulfilled our promise to expand employment at the studio: our
  house staff is a thriving community of engineers diverse in gender identity,
  musical background, and expertise. The studio is working and sounding great,
  and we couldn’t have done it without your support. Now, we want to make Tiny
  Telephone Oakland even better. We have but one remaining problem... our roof
  leaks, both in the sense that when it rains outside it kind of rains inside,
  and we are not completely isolated sonically from the street. We were aware
  of this issue when we built the studio, but the size and scope of building a
  3000 square foot studio meant we had to leave it off our list of improvements.
  The only answer is to build a second roof over our existing one. We're going
  to do all the work outside so we retain the beautiful old-growth redwood ceiling
  we currently have. I love the sound of our live room and don't want to tamper with it."
)

ae = Reward.create!(
  project_id: ad.id,
  title: "Hello, it's me",
  description: "I will lovingly whisper your name in the live room.",
  cost: 1,
  delivery_date: DateTime.new(2017, 7)
)

af = Reward.create!(
  project_id: ad.id,
  title: "Distressed Wood",
  description: "A sliver of old Finnish barn wood that lines the control room.",
  cost: 10,
  delivery_date: DateTime.new(2017, 8)
)

ag = Reward.create!(
  project_id: ad.id,
  title: "Signed Copy of Dagger Beach",
  description: "I will personalize a 200g QRP pressing of my last record,
  Dagger Beach. I'll throw in a few goodies as well (i.e. signed 7\", handwritten lyrics, etc).",
  cost: 35,
  delivery_date: DateTime.new(2017, 9)
)

Reward.create!(
  project_id: ad.id,
  title: "A Very Cool T-Shirt",
  description: "An amazing Joe Williams designed \"I helped build Tiny Telephone
  Oakland\" t-shirt. XS, S, M, L, XL, or XXL LIMITED",
  cost: 50,
  delivery_date: DateTime.new(2017, 10)
)

Pledge.create!(
  amount: 5000,
  pledgeable_type: "Project",
  pledgeable_id: ad.id,
  backer_id: users[1].id
)

Pledge.create!(
  amount: 10000,
  pledgeable_type: "Project",
  pledgeable_id: aa.id,
  backer_id: users[0].id
)

Pledge.create!(
  amount: 2867,
  pledgeable_type: "Reward",
  pledgeable_id: ae.id,
  backer_id: users[2].id
)

Pledge.create!(
  amount: 5000,
  pledgeable_type: "Reward",
  pledgeable_id: af.id,
  backer_id: users[3].id
)

Pledge.create!(
  amount: 20000,
  pledgeable_type: "Reward",
  pledgeable_id: ag.id,
  backer_id: users[7].id
)

ah = Project.create!(
  title: "Rise Grand Rapids // Brick & Mortar Shop",
  description: "From home baking to a church kitchen, pop ups to wholesalers,
  Rise is on the move and we need your help to open a brick & mortar shop!",
  end_date: DateTime.new(2017, 7, 20),
  funding_goal: 30000,
  creator_id: users[11].id,
  category_id: f.id,
  image: File.open("app/assets/images/grand_rapids.png"),
  details: "Rise Grand Rapids is a gluten free, vegan, and soy free bakery
  based in Grand Rapids, MI. We believe that everyone should be able to partake
  in life's greatest celebrations without worrying about their dietary restrictions
  or preferences. Here at Rise, we know what it feels like to be left out
  during a birthday party or family event, but we are here to tell you:
  come as you are, have a seat at the table. Rise began in a one bedroom
  apartment on the Westside of Grand Rapids four years ago. At first, we
  baked for neighborhood potlucks and friends' weddings, but our business
  quickly grew and soon we were invited to local pop-up sales. At these
  pop-ups, we debuted our allergy-conscious baked goods which were sold out
  in a matter of minutes. The demand for our product grew, and in April of
  2016 we starting producing our baked goods in our church's commercial kitchen.
  Baking in a commercial kitchen allowed for our baked goods to be sold at
  restaurants and coffee shops in downtown Grand Rapids. Since then, we have
  accumulated nine wholesale vendors where our customers can buy our baked
  goods. We fulfill small custom orders for events such as birthday parties
  and baby showers, as well as larger custom orders for special occasions
  such as weddings or corporate events. The retail side of our business has
  been fantastic but also challenging, seeing as though we don't have our
  own retail storefront. Over the past year we have been asked numerous
  times where our storefront is located. The money that we raise on this
  Quickstarter will go towards the construction for our very own commercial
  kitchen and retail storefront. This storefront will allow customers to grab
  a pastry at their leisure whether it is on their way in to work, before a
  special occasion, or just to enjoy our new space while sipping a cup of
  coffee! We are so excited to partner with you all and cannot wait to be
  more accessible for all of our customers. We have been working with our
  realtor to find a space that works for us and our customers. We have not
  signed a lease as of yet, but we are looking at a specific storefront
  that we think you guys are going to LOVE! Although we are not able to
  announce where the space is, we know you guys will approve, so we need
  your help to build out the space. We know there are many risks involved
  with this project but trust in God's timing and provision each step of the way.
  Although we are asking for $55,000, these funds may not cover all the construction
  for the kitchen and build out of the storefront. We are working with contractors
    right now to give us quotes and help us nail down the exact costs we will incur.
    If for some reason the amount of money we raise isn't enough for the build out,
    we will consider a second Quickstarter to boost our funding or apply for
    various funding efforts such as the 5x5 Night. We appreciate each and
    every pledge that is made to help make our dream a realty. Thank you
    from the bottom of our hearts!
    Nick & Becca Van Liere"
)

ai = Reward.create!(
  project_id: ah.id,
  title: "UNDYING GRATITUDE",
  description: "Handwritten thank you card made by Becca
  Voucher for one free doughnut Exclusive Rise sticker with brand-spankin'-new logo",
  cost: 15,
  delivery_date: DateTime.new(2017, 11)
)

aj = Reward.create!(
  project_id: ah.id,
  title: "PINS & THINGS",
  description: "Handwritten thank you card made by Becca
  Voucher for one free doughnut Exclusive Rise sticker with brand-spankin'-new logo
  4 pack of handmade pins made by a local artist",
  cost: 25,
  delivery_date: DateTime.new(2017, 11)
)

Reward.create!(
  project_id: ah.id,
  title: "ALL THE SWAG",
  description: "Handwritten thank you card made by Becca
  Voucher for one free doughnut Exclusive Rise sticker with brand-spankin'-new logo
  4 pack of handmade pins made by a local artist Never-ever-before-seen Rise t-shirt with our brand new logo",
  cost: 75,
  delivery_date: DateTime.new(2017, 11)
)

Pledge.create!(
  amount: 10000,
  pledgeable_type: "Reward",
  pledgeable_id: ai.id,
  backer_id: users[7].id
)

Pledge.create!(
  amount: 1234,
  pledgeable_type: "Reward",
  pledgeable_id: aj.id,
  backer_id: users[6].id
)

Pledge.create!(
  amount: 8000,
  pledgeable_type: "Project",
  pledgeable_id: ah.id,
  backer_id: users[1].id
)

ak = Project.create!(
  title: "Quickstarter Gold: Good Night Stories for Rebel Girls 2",
  description: "A children's book and a podcast that reinvent fairy-tales,
  inspiring girls with the stories of 100 great women from all over the world.",
  end_date: DateTime.new(2017, 7, 30),
  funding_goal: 100000,
  creator_id: users[12].id,
  category_id: h.id,
  image: File.open("app/assets/images/rebel_girls.jpg"),
  details: "First Stretch Goal UNLOCKED! All the backers who pledged $25
  and up will also receive a beautiful embroidered patch with their rewards!
  After the record-smashing success of Good Night Stories for Rebel Girls,
  we are back to announce Volume 2 + the First Season of our Podcast, a
  sound-rich deep dive into the adventures of your favorite heroes. Share Our
  Quickstarter Campaign and Get 3 FREE EBOOKS: 2 Science Comics to Spark the
  Love of Science in Girls + The Essential Guide To Raising Confident Girls.
  In order to get your free ebooks, click the big button below: Last year,
  with the unbelievable support of a community of 13,454 backers from 75 countries,
  we launched \"Good Night Stories for Rebel Girls,\" a children's book that
  reinvents fairy tales inspiring girls with the stories of 100 great women,
  from Elizabeth I to Serena Williams. Today, Good Night Stories for Rebel
  Girls is a global bestseller translated in 30 languages (even in Faroese!).
  It has reached more than 500,000 families and it's helping girls all over
  the world to dream bigger, aim higher, and fight harder. \"Good Night Stories
  For Rebel Girls 2\" features 100 new bedtime stories, each inspired to the
  life and adventures of extraordinary women from Nefertiti to Beyonce.
  The unique narrative style of \"Good Night Stories for Rebel Girls\" transforms
  each biography in a fairy-tale, filling the readers with wonder and with a
  burning curiosity to know more about each hero. \"Good Night Stories for Rebel Girls 2\"
  features stunning artwork created by 70 female artists from all over the world.
  We want to turn your favorite stories into sound-rich, immersive adventures
  that can carry you and your children to NASA, with Margaret Hamilton during the
  launch of Apollo 11. We want you to listen to the songs Grace O'Malley used to
  sing with her pirate friends while loading cannons. We called our favorite
  sound designer in the world, Elettra Bargiacchi, and run the idea by her.
  She is excited, and ready to go!"
)

al = Reward.create!(
  project_id: ak.id,
  title: "The Secret Episode",
  description: "You will receive our gratitude + the Secret Episode of the Podcast.",
  cost: 5,
  delivery_date: DateTime.new(2017, 12)
)

Reward.create!(
  project_id: ak.id,
  title: "THE COLORING BOOK",
  description: "You will receive a Coloring Book containing 12 beautiful
  portraits, Rebel Girls' Temporary Tattoos and a Poster featuring 100 portraits of extraordinary women.",
  cost: 15,
  delivery_date: DateTime.new(2017, 11)
)

am = Reward.create!(
  project_id: ak.id,
  title: "GOOD NIGHT STORIES FOR REBEL GIRLS 2",
  description: "You'll receive 1 hardcover copy of \"Good Night Stories for Rebel
  Girls 2\" + the Quickstarter Exclusive Secret Episode of the Podcast.",
  cost: 35,
  delivery_date: DateTime.new(2017, 11)
)

Reward.create!(
  project_id: ak.id,
  title: "HOMESCHOOLING KIT - REBEL GIRLS 2",
  description: "You'll receive 1 hardcover copy of \"Good Night Stories for Rebel Girls 2\"
  + a Lesson Plan + the Quickstarter Exclusive Secret Episode of the Podcast.",
  cost: 49,
  delivery_date: DateTime.new(2017, 11)
)

Pledge.create!(
  amount: 50000,
  pledgeable_type: "Project",
  pledgeable_id: ak.id,
  backer_id: users[0].id
)

Pledge.create!(
  amount: 10235,
  pledgeable_type: "Project",
  pledgeable_id: ak.id,
  backer_id: users[1].id
)

Pledge.create!(
  amount: 20087,
  pledgeable_type: "Reward",
  pledgeable_id: am.id,
  backer_id: users[2].id
)

Pledge.create!(
  amount: 15837,
  pledgeable_type: "Reward",
  pledgeable_id: al.id,
  backer_id: users[3].id
)

Pledge.create!(
  amount: 92741,
  pledgeable_type: "Reward",
  pledgeable_id: al.id,
  backer_id: users[4].id
)

an = Project.create!(
  title: "Minimalist sneakers made with the finest materials",
  description: "Rethinking luxury sneakers with a meticulous design at a fair price",
  end_date: DateTime.new(2017, 7, 29),
  funding_goal: 40000,
  creator_id: users[13].id,
  category_id: d.id,
  image: File.open("app/assets/images/sneakers.jpg"),
  details: "We're launching a pair of minimalist sneakers made in Portugal with
  Italian premium materials. Inspired by scandinavian fashion, stitches are
  hidden to the maximum and the same monochromatic color is used for leather
  & sole. Last but not least, by offering them via pre-orders we're able to
  cut logistic costs and retailer margins to offer it at a third of its retail price!
  We were inspired by Scandinavian fashion that we see as elegant & minimalist.
  Following this universe, we removed all unnecessary stitches on the surface
  and use one monochromatic color per pair. We spent months discussing with
  the factory trying to hide most stitches while keeping the same quality,
  finding the right colors of leather & sole that would match, picking the
  right sole model, the right leather, etc. It's important to note that
  internal linings are made with 'cowhide' to respect certain traditions.
  Our leather is an Italian calfskin full grain leather, ‘full grain’ being
  the most premium part of leathers and calfskin an excellent type of leather.
  We used the best leather we could think of : according to us, it’s the best
  out there. Its flexibility will create the comfort you’re looking for in such
  a pair of shoes, and its strength will make it last years, not just months.
  The sole is an Italian jewel. Based in Italy for decades, the Margom brand
  is known for being the go-to sole of European luxury fashion houses. It has
  been studied over time to fit the shape of your foot nicely and resist daily
  usage. The sole thickness may seem strong at first view, but it quickly
  adapts to your foot and walking habits. The sole is not only glued, it’s
  also sewed to make sure it won’t fall out over time. Because we truly
  believe in our products, we provide a 2-year warranty against manufacturing defects.
  Based in Paris, Lenger was born with one focus : design essential objects
  with a minimalist approach using high-end materials at a fair price. We
  personally felt the need for these type of products. But how could we make
  luxury basics less expensive? Months ago, the idea of crowdfunding products
  started to pop up, and made lots of sense. First, by having people pledge
  to support a product, we could test it and see if it would be a good fit.
  And because we would sell all an entire production at once, we wouldn’t have
  stocks, unsold inventory, expensive individual shipping rates. That would cut
  a big part of logistic costs for a traditional brand. On the retail side,
  we wouldn’t have any middle man between you and us since we speak directly
  to you. That’s a huge chunk of prices: at least -35% for online marketplaces
  or -50% for brick-and-mortar shops."
)

ao = Reward.create!(
  project_id: an.id,
  title: "1 PAIR - KICKSTARTER SPECIAL",
  description: "You get 1 pair of minimalist sneakers Lenger made in Portugal
  with Italian materials (you'll choose the size and color later). At end of
  campaign we will send a survey to find out size and color for each item.",
  cost: 120,
  delivery_date: DateTime.new(2017, 10)
)

ap = Reward.create!(
  project_id: an.id,
  title: "2 PAIRS - KICKSTARTER SPECIAL",
  description: "You get 2 pairs of minimalist sneakers Lenger made in Portugal
  with Italian materials (you'll choose the size and color later).
  At end of campaign we will send a survey to find out size and color for each item.",
  cost: 220,
  delivery_date: DateTime.new(2017, 10)
)

aq = Reward.create!(
  project_id: an.id,
  title: "3 PAIRS - KICKSTARTER SPECIAL",
  description: "You get 3 pairs of minimalist sneakers Lenger made in Portugal
  with Italian materials (you'll choose the size and color later).
  At end of campaign we will send a survey to find out size and color for each item.",
  cost: 320,
  delivery_date: DateTime.new(2017, 10)
)

Pledge.create!(
  amount: 10000,
  pledgeable_type: "Reward",
  pledgeable_id: ao.id,
  backer_id: users[0].id
)

Pledge.create!(
  amount: 2432,
  pledgeable_type: "Reward",
  pledgeable_id: ap.id,
  backer_id: users[1].id
)

Pledge.create!(
  amount: 20000,
  pledgeable_type: "Reward",
  pledgeable_id: aq.id,
  backer_id: users[2].id
)

Pledge.create!(
  amount: 3000,
  pledgeable_type: "Project",
  pledgeable_id: an.id,
  backer_id: users[3].id
)
