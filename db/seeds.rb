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
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858033/Gamera_hohult.jpg",
             user_id: User.find_by_username("leol1").id})
Pin.create!({title: 'Tanks And Airplane',
             user_id: User.find_by_username("leol1").id,
             description: "none",
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858054/TnP_01_d0f9qg.jpg"})
Pin.create!({title: 'Plants',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858033/Plants_01_ukeaoi.jpg",
             user_id: User.find_by_username("leol2").id})
Pin.create!({title: 'Airplanes',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858033/TnP_02_eh9wap.jpg",
             user_id: User.find_by_username("leol3").id})
Pin.create!({title: 'A Train Sketch',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858034/Train_01_k9orkg.jpg",
             user_id: User.find_by_username("leol4").id})
Pin.create!({title: 'Magnodente',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858033/Magnodente_vz47ci.jpg",
             user_id: User.find_by_username("leol5").id})
Pin.create!({title: 'Imagery Car',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500921017/ddioayzedr7ifigwky8w.jpg",
             description: "modeling done by Zack Cheng",
             user_id: User.find_by_username("leol2").id})
Pin.create!({title: 'Girl Standing Against Wall',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500984079/ewnwmjrvlobmw3lkqza6.jpg",
            description: "digital paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol4").id})
Pin.create!({title: 'New Year Goal',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501006952/woeqfbjgr8x4vb6hbppr.gif",
            description: "digital paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol4").id})
Pin.create!({title: 'Visual Development Project',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501007060/gl2qlxsf1kqdmqxkgufy.jpg",
            description: "digital paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol1").id})
Pin.create!({title: 'Crane',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501022171/qanjfdrxm4uzvuku7i1o.gif",
            description: "GIF animation, digital paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol2").id})


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
