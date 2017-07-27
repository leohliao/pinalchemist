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
pin1 = Pin.create!({title: 'Gamera Remake',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858033/Gamera_hohult.jpg",
             user_id: User.find_by_username("leol1").id})
pin2 = Pin.create!({title: 'Tanks And Airplane',
             user_id: User.find_by_username("leol1").id,
             description: "none",
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858054/TnP_01_d0f9qg.jpg"})
pin3 = Pin.create!({title: 'Plants',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858033/Plants_01_ukeaoi.jpg",
             user_id: User.find_by_username("leol2").id})
pin4 = Pin.create!({title: 'Airplanes',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858033/TnP_02_eh9wap.jpg",
             user_id: User.find_by_username("leol3").id})
pin5 = Pin.create!({title: 'A Train Sketch',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858034/Train_01_k9orkg.jpg",
             user_id: User.find_by_username("leol4").id})
pin6 = Pin.create!({title: 'Magnodente',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858033/Magnodente_vz47ci.jpg",
             user_id: User.find_by_username("leol5").id})
pin7 = Pin.create!({title: 'Imagery Car',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500921017/ddioayzedr7ifigwky8w.jpg",
             description: "modeling done by Zack Cheng",
             user_id: User.find_by_username("leol2").id})
pin8 = Pin.create!({title: 'Girl Standing Against Wall',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500984079/ewnwmjrvlobmw3lkqza6.jpg",
            description: "digital paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol4").id})
pin9 = Pin.create!({title: 'New Year Goal',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501006952/woeqfbjgr8x4vb6hbppr.gif",
            description: "digital paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol4").id})
pin10 = Pin.create!({title: 'Visual Development Project',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501007060/gl2qlxsf1kqdmqxkgufy.jpg",
            description: "digital paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol1").id})
pin11 = Pin.create!({title: 'Crane',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501022171/qanjfdrxm4uzvuku7i1o.gif",
            description: "GIF animation, digital paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol2").id})


Board.destroy_all
board1 = Board.create!({board_name: 'My favorite',
               description: "Collections of all my favorite",
               user_id: User.find_by_username("leol1").id})
Board.create!({board_name: 'Artistst That Inspires Me',
               description: "Amazing artworks collection from artCenter",
               user_id: User.find_by_username("leol1").id})
Board.create!({board_name: 'Friends artwork',
               description: "All my friends are amazing artists, I will be like them someday",
               user_id: User.find_by_username("leol1").id})
Board.create!({board_name: 'Incredible Illustration for Cats',
               description: "Meow Meow",
               user_id: User.find_by_username("leol1").id})
Board.create!({board_name: 'What else is there?',
               description: "Some cool arts I found",
               user_id: User.find_by_username("leol1").id})
Board.create!({board_name: 'Ideas',
               description: "Images that inspires the heck outta me",
               user_id: User.find_by_username("leol2").id})
Board.create!({board_name: 'Freelance',
               description: "All the cool stuff drawn by cool peole",
               user_id: User.find_by_username("leol2").id})

board1.pin_ids = [pin1.id];
board1.save!



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
