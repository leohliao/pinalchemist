# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
# This is used for demo account
# ------ DONT DELETE -------------
User.create!(username: "guest", password: "iamdemo")

User.create!({username: "leol1", password: "password"})
User.create!({username: "leol2", password: "password"})
User.create!({username: "leol3", password: "password"})
User.create!({username: "leol4", password: "password"})
User.create!({username: "leol5", password: "password"})

Pin.destroy_all
Pin.create!({title: 'Gamera Remake',
             image_url: "https://www.yahoo.com",
             user_id: User.find_by_username("leol1").id,
             description: "Gamera",
             image: File.open("app/assets/images/Gamera.jpg")})
Pin.create!({title: 'Tanks And Airplane',
             image_url: "https://leoliao.net",
             user_id: User.find_by_username("leol1").id,
             description: "none",
             image: File.open("app/assets/images/TnP_01.jpg")})
Pin.create!({title: 'Plants',
             image_url: "https://www.cgsociety.com",
             user_id: User.find_by_username("leol2").id,
             image: File.open("app/assets/images/Plants_01.jpg")})
Pin.create!({title: 'Airplanes',
             image_url: "https://www.google.com",
             user_id: User.find_by_username("leol3").id,
             image: File.open("app/assets/images/TnP_02.jpg")})
Pin.create!({title: 'A Train Sketch',
             image_url: "https://www.blogspot.com",
             user_id: User.find_by_username("leol4").id,
             image: File.open("app/assets/images/Train_01.jpg")})
Pin.create!({title: 'Magnodente',
             image_url: "https://www.artstation.com",
             user_id: User.find_by_username("leol5").id,
             image: File.open("app/assets/images/Magnodente.jpg")})

# sse = Party.create!({name: "Secret Santa Extravaganza", location: "Portland"})
# ccp = Party.create!({name: "Charles' Christmas Party", location: "San Francisco"})
#
# Invitation.create!({guest_id: john.id, party_id: sse.id})
# Invitation.create!({guest_id: jane.id, party_id: sse.id})
# Invitation.create!({guest_id: josh.id, party_id: sse.id})
# Invitation.create!({guest_id: helen.id, party_id: sse.id})
# Invitation.create!({guest_id: job.id, party_id: sse.id})
# Invitation.create!({guest_id: josh.id, party_id: ccp.id})
# Invitation.create!({guest_id: helen.id, party_id: ccp.id})
