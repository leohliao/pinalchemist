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
pin12 = Pin.create!({title: 'Snow House',
            description: "by Ziwei",
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195308/95318_orig_r18xtu.jpg",
             user_id: User.find_by_username("leol1").id})
pin13 = Pin.create!({title: 'Arale Rendered',
             user_id: User.find_by_username("leol1").id,
             description: "Maya V-Ray",
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195378/Arale_1_1_fduzdy.jpg"})
pin14 = Pin.create!({title: 'Arale Rendered2',
            description: "Maya V-Ray",
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195384/Arale_3_tbtzn3.jpg",
             user_id: User.find_by_username("leol2").id})
pin15 = Pin.create!({title: 'Gundam Wing',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195422/Gundam00_uobymt.jpg",
             user_id: User.find_by_username("leol3").id})
pin16 = Pin.create!({title: 'Hair in Maya',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195451/Week5_wgdcew.jpg",
             user_id: User.find_by_username("leol4").id})
pin17 = Pin.create!({title: 'Life Drawing',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195486/IMG_4144_zoz0et.jpg",
             user_id: User.find_by_username("leol5").id})
pin18 = Pin.create!({title: 'Tengu',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195493/Tengu_1_fh2vzt.jpg",
             description: "Zbrush by Leo Liao",
             user_id: User.find_by_username("leol2").id})
pin19 = Pin.create!({title: 'Nathan Fowkes Concept',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196268/Nathan_Fowkes_24a_tor1r0.jpg",
            description: "digital paint by NF",
            user_id: User.find_by_username("leol4").id})
pin20 = Pin.create!({title: 'Puss',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196273/The-Art-of-Nathan-Fowkes-25_u3wumd.jpg",
            description: "dreamworks",
            user_id: User.find_by_username("leol4").id})
pin21 = Pin.create!({title: 'Visual Development Project',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196283/tumblr_mhfi6tymb51rg2f4po4_1280_y6oedo.jpg",
            description: "digital paint by Nathan",
            user_id: User.find_by_username("leol3").id})
pin22 = Pin.create!({title: 'Painting',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196294/12249575_10208371488548757_8527565230743978182_n_buhnjh.jpg",
            description: "Mike Hernandez",
            user_id: User.find_by_username("leol2").id})
pin23 = Pin.create!({title: 'Painting',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196354/Untitled-4_mz3j6t.jpg",
             user_id: User.find_by_username("leol1").id})
pin24 = Pin.create!({title: 'Painting',
             user_id: User.find_by_username("leol3").id,
             description: "digital paintings",
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196303/pib-township-web_znxow5.jpg"})
pin25 = Pin.create!({title: 'NF workflow',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196331/57926438e8fcdba3ec606c6f53cb8918_dar7ij.jpg",
             user_id: User.find_by_username("leol2").id})
pin26 = Pin.create!({title: 'Balboa Park',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196317/balboa_qwahba.jpg",
             user_id: User.find_by_username("leol3").id})
pin27 = Pin.create!({title: 'Concept',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196344/nathan-fowkes-rio2-01_zcowgm.jpg",
             user_id: User.find_by_username("leol4").id})
pin28 = Pin.create!({title: 'Magnodente2',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195473/Magnodente__10_icsfyw.jpg",
             user_id: User.find_by_username("leol5").id})
pin29 = Pin.create!({title: 'Alien Kitty',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196307/alien_kitty1_yomnnu.jpg",
             description: "Jonath Kuo Arts",
             user_id: User.find_by_username("leol2").id})
pin30 = Pin.create!({title: 'NF Walkflow',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196289/28283_2247252l_xtlzoa.jpg",
            description: "digital paint by Nathan Fowkes",
            user_id: User.find_by_username("leol4").id})


Board.destroy_all
board1 = Board.create!({board_name: 'My favorite',
               description: "Collections of all my favorite",
               user_id: User.find_by_username("leol1").id})
board2 = Board.create!({board_name: 'Artistst That Inspires Me',
               description: "Amazing artworks collection from artCenter",
               user_id: User.find_by_username("leol1").id})
board3 = Board.create!({board_name: 'Incredible Illustration for Cats',
               description: "Meow Meow",
               user_id: User.find_by_username("leol1").id})
board4 = Board.create!({board_name: 'What else is there?',
               description: "Some cool arts I found",
               user_id: User.find_by_username("leol1").id})
board5 = Board.create!({board_name: 'Ideas',
               description: "Images that inspires the heck outta me",
               user_id: User.find_by_username("leol2").id})
board6 = Board.create!({board_name: 'Freelance',
               description: "All the cool stuff drawn by cool peole",
               user_id: User.find_by_username("leol2").id})

board7 = Board.create!({board_name: 'Board 7',
              description: "Meow Meow",
              user_id: User.find_by_username("leol1").id})
board8 = Board.create!({board_name: 'I got a dream',
              description: "I got a dream",
              user_id: User.find_by_username("leol1").id})
board9 = Board.create!({board_name: 'i can do tiz',
              description: "I can do tis",
              user_id: User.find_by_username("leol2").id})
board10 = Board.create!({board_name: 'cool',
              description: "Cool",
              user_id: User.find_by_username("leol2").id})
board11 = Board.create!({board_name: 'Master collections',
               description: "master collections",
               user_id: User.find_by_username("leol1").id})
board12 = Board.create!({board_name: 'is funny',
               description: "Amazing artworks collection from artCenter",
               user_id: User.find_by_username("leol1").id})
board13 = Board.create!({board_name: 'animal',
               description: "Meow Meow",
               user_id: User.find_by_username("leol1").id})
board14 = Board.create!({board_name: 'smells good',
               description: "Some cool arts I found",
               user_id: User.find_by_username("leol1").id})
board15 = Board.create!({board_name: 'Yayy',
               description: "Images that inspires the heck outta me",
               user_id: User.find_by_username("leol2").id})
board16 = Board.create!({board_name: 'disney',
               description: "All the cool stuff drawn by cool peole",
               user_id: User.find_by_username("leol2").id})
board17 = Board.create!({board_name: 'animation concept',
              description: "Meow Meow",
              user_id: User.find_by_username("leol1").id})
board18 = Board.create!({board_name: 'no repeats',
              description: "Some cool arts I found",
              user_id: User.find_by_username("leol1").id})
board19 = Board.create!({board_name: 'rake aborted',
              description: "Images that inspires the heck outta me",
              user_id: User.find_by_username("leol2").id})
board20 = Board.create!({board_name: 'motta',
              description: "All the cool stuff drawn by cool peole",
              user_id: User.find_by_username("leol2").id})

board1.pin_ids = [pin1.id, pin2.id, pin4.id, pin6.id, pin8.id, pin10.id, pin12.id, pin14.id, pin16.id, pin18.id, pin20.id, pin21.id];
board1.save!

board2.pin_ids = [pin3.id, pin5.id, pin7.id, pin9.id];
board2.save!

board3.pin_ids = [pin11.id, pin13.id, pin17.id, pin19.id];
board3.save!

board4.pin_ids = [pin13.id, pin29.id, pin27.id, pin6.id, pin8.id, pin30.id];
board4.save!

board7.pin_ids = [pin23.id, pin28.id, pin24.id];
board7.save!

board14.pin_ids = [pin11.id, pin19.id, pin29.id, pin24.id, pin28.id];
board14.save!
