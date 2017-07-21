# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
# This is used for demo account
User.create!(username: "guest", password: "iamdemo")
# ------ DONT DELETE -------------

leol1 = User.create!({username: "leol1", password: "password"})
leol2 = User.create!({username: "leol2", password: "password"})
leol3 = User.create!({username: "leol3", password: "password"})
leol4 = User.create!({username: "leol4", password: "password"})
leol5 = User.create!({username: "leol5", password: "password"})

Pin.destroy_all
Pin.create!({title: 'A Bottle of Wine', image_url: "https://3.bp.blogspot.com/-oSviehsK-9A/WPVF6p6j90I/AAAAAAAAAPM/dOQxbuAlezk-gNl5E4A9PJyTZBXBhgg-gCLcB/s1600/Gamera.jpg", user_id: 1  })
Pin.create!({title: 'Another Bottle of Wine', image_url: "https://3.bp.blogspot.com/-oSviehsK-9A/WPVF6p6j90I/AAAAAAAAAPM/dOQxbuAlezk-gNl5E4A9PJyTZBXBhgg-gCLcB/s1600/Gamera.jpg" , user_id: 1})
Pin.create!({title: 'The Hunger Games', image_url: "https://3.bp.blogspot.com/-oSviehsK-9A/WPVF6p6j90I/AAAAAAAAAPM/dOQxbuAlezk-gNl5E4A9PJyTZBXBhgg-gCLcB/s1600/Gamera.jpg", user_id: 2})
Pin.create!({title: 'Baseball Glove', image_url: "https://3.bp.blogspot.com/-oSviehsK-9A/WPVF6p6j90I/AAAAAAAAAPM/dOQxbuAlezk-gNl5E4A9PJyTZBXBhgg-gCLcB/s1600/Gamera.jpg", user_id: 2})
Pin.create!({title: 'Basketball Tickets', image_url: "https://3.bp.blogspot.com/-oSviehsK-9A/WPVF6p6j90I/AAAAAAAAAPM/dOQxbuAlezk-gNl5E4A9PJyTZBXBhgg-gCLcB/s1600/Gamera.jpg", user_id: 3})
Pin.create!({title: 'Hawaiian Getaway', image_url: "https://3.bp.blogspot.com/-oSviehsK-9A/WPVF6p6j90I/AAAAAAAAAPM/dOQxbuAlezk-gNl5E4A9PJyTZBXBhgg-gCLcB/s1600/Gamera.jpg", user_id: 4 })

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
