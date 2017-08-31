# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Pin.destroy_all
Board.destroy_all
Pinning.destroy_all
Following.destroy_all
# This is used for demo account
# ------ DONT DELETE -------------
user1 = User.create!(username: "guest", password: "iamdemo")
# --------------------------------
user2 = User.create!({username: "leol1", password: "password", image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501093275/user_profile_img_ogenba.jpg"})
user3 = User.create!({username: "leol2", password: "password", image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504164620/4_Luffy_101909_1256006964_aw7ehf.jpg"})
user4 = User.create!({username: "leol3", password: "password", image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504164655/528897_1397877658276_480_300_hsyjag.jpg"})
user5 = User.create!({username: "leol4", password: "password", image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504164721/3_Lelouch_101909_1256006940_tcglgz.jpg"})
user6 = User.create!({username: "leol5", password: "password", image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504164774/5_Vegeta_101909_1256006982_psyiy9.jpg"})


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
             user_id: User.find_by_username("guest").id})
pin5 = Pin.create!({title: 'A Train Sketch',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858034/Train_01_k9orkg.jpg",
             user_id: User.find_by_username("guest").id})
pin6 = Pin.create!({title: 'Magnodente',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858033/Magnodente_vz47ci.jpg",
             user_id: User.find_by_username("guest").id})
pin7 = Pin.create!({title: 'Imagery Car',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500921017/ddioayzedr7ifigwky8w.jpg",
             description: "modeling done by Zack Cheng",
             user_id: User.find_by_username("leol2").id})
pin8 = Pin.create!({title: 'Girl Standing Against Wall',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500984079/ewnwmjrvlobmw3lkqza6.jpg",
            description: "digital paint by Ziwei Duanmu",
            user_id: User.find_by_username("guest").id})
pin9 = Pin.create!({title: 'New Year Goal',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501006952/woeqfbjgr8x4vb6hbppr.gif",
            description: "digital paint by Ziwei Duanmu",
            user_id: User.find_by_username("guest").id})
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
pin31 = Pin.create!({title: 'Visual Development Project for Disney',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160026/8371549_orig_q7kxlu.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol1").id})
pin32 = Pin.create!({title: 'Visual Development Project for Disney',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160149/7678256_orig_qatfog.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol2").id})
pin33 = Pin.create!({title: 'Visual Development for Disney',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160209/mmcl-2016-ballspin-v01-bg-v04-zd-011316-72dpi_orig_medvgs.jpg",
             description: "Paint by Ziwei Duanmu",
             user_id: User.find_by_username("leol1").id})
pin34 = Pin.create!({title: 'Visual Development for Disney',
             user_id: User.find_by_username("leol3").id,
             description: "digital paintings by Ziwei Duanmu",
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160297/mmcl-2016-dunk-v01-shot1-bg-v01-zd-012416-120dpi_orig_bgntjs.jpg"})
pin35 = Pin.create!({title: 'Visual Development for Disney',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160398/mmcl-2016-gamewinner-v01-shot2-bg-zd-011816-150dpi_orig_obzubo.jpg",
             description: "digital paintings by Ziwei Duanmu",
             user_id: User.find_by_username("leol2").id})
pin36 = Pin.create!({title: 'Icy North - Visual Development',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160459/_8159683_orig_sugfcv.jpg",
             description: "digital paintings by Ziwei Duanmu",
             user_id: User.find_by_username("leol3").id})
pin37 = Pin.create!({title: 'Visual Development: Snow Storm',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160516/_5861338_orig_eyiqjp.jpg",
             description: "digital paintings by Ziwei Duanmu",
             user_id: User.find_by_username("leol4").id})
pin38 = Pin.create!({title: 'Visual Development - Sailing in the storm',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160567/_9153677_orig_ynbeeb.jpg",
             description: "digital paintings by Ziwei Duanmu",
             user_id: User.find_by_username("leol5").id})
pin39 = Pin.create!({title: 'Visual Development BG',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160627/7235707_orig_q9edzk.jpg",
             description: "digital paintings by Ziwei Duanmu",
             user_id: User.find_by_username("leol2").id})
pin40 = Pin.create!({title: 'Snow House',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160749/4552509_orig_e3uvvu.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol4").id})
pin41 = Pin.create!({title: 'Visual Development Mountain',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160787/7336510_orig_ruu4cy.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol1").id})
pin42 = Pin.create!({title: 'Visual Development Living Room',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160822/1904021_orig_cm2bgd.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol2").id})
pin43 = Pin.create!({title: 'Visual Development - Bridge',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162470/241915_orig_njab6v.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol1").id})
pin44 = Pin.create!({title: 'Visual Development - home',
            user_id: User.find_by_username("leol3").id,
            description: "digital paintings by Ziwei Duanmu",
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162505/9828331_orig_phddoc.jpg"})
pin45 = Pin.create!({title: 'Visual Development - home again',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162547/08-zd-031716-1_orig_jyuv8z.jpg",
            description: "digital paintings by Ziwei Duanmu",
            user_id: User.find_by_username("leol2").id})
pin46 = Pin.create!({title: 'Visual Development - home stair',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162599/09-bg-033016_orig_zclbmj.jpg",
            description: "digital paintings by Ziwei Duanmu",
            user_id: User.find_by_username("leol3").id})
pin47 = Pin.create!({title: 'Visual Development - home from door',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/c_scale,w_753/v1504162652/40-bg-0426-1_orig_dwejto.jpg",
            description: "digital paintings by Ziwei Duanmu",
            user_id: User.find_by_username("leol4").id})
pin48 = Pin.create!({title: 'Visual Development - dining table',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162694/25-0420-1_orig_ve94cc.jpg",
            description: "digital paintings by Ziwei Duanmu",
            user_id: User.find_by_username("guest").id})
pin49 = Pin.create!({title: 'Visual Development - swimming pool',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162747/6507989_orig_dfygmj.jpg",
            description: "digital paintings by Ziwei Duanmu",
            user_id: User.find_by_username("leol2").id})
pin50 = Pin.create!({title: 'Interesting Things',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162902/7109467_orig_ju5gmy.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("guest").id})
pin51 = Pin.create!({title: 'Visual Development School',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162939/4749901_orig_jjdglc.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol1").id})
pin52 = Pin.create!({title: 'Visual Development Cactus and church',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162971/__1285450_orig_sb87dr.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol2").id})


board1 = Board.create!({board_name: 'My favorite',
               description: "Collections of all my favorite",
               user_id: User.find_by_username("leol1").id})
board2 = Board.create!({board_name: 'Artistst That Inspires Me',
               description: "Amazing artworks collection from artCenter",
               user_id: User.find_by_username("guest").id})
board3 = Board.create!({board_name: 'Incredible Illustration for Cats',
               description: "Meow Meow",
               user_id: User.find_by_username("leol1").id})
board4 = Board.create!({board_name: 'What else is there?',
               description: "Some cool arts I found",
               user_id: User.find_by_username("guest").id})
board5 = Board.create!({board_name: 'Ideas',
               description: "Images that inspires the heck outta me",
               user_id: User.find_by_username("leol1").id})
board6 = Board.create!({board_name: 'Freelance',
               description: "All the cool stuff drawn by cool peole",
               user_id: User.find_by_username("guest").id})
board7 = Board.create!({board_name: 'Board 7',
              description: "Meow Meow",
              user_id: User.find_by_username("leol1").id})
board8 = Board.create!({board_name: 'I got a dream',
              description: "I got a dream",
              user_id: User.find_by_username("leol2").id})
board9 = Board.create!({board_name: 'i can do tiz',
              description: "I can do tis",
              user_id: User.find_by_username("leol1").id})
board10 = Board.create!({board_name: 'cool',
              description: "Cool",
              user_id: User.find_by_username("leol2").id})
board11 = Board.create!({board_name: 'Master collections',
               description: "master collections",
               user_id: User.find_by_username("leol1").id})
board12 = Board.create!({board_name: 'is funny',
               description: "Amazing artworks collection from artCenter",
               user_id: User.find_by_username("guest").id})
board13 = Board.create!({board_name: 'animal',
               description: "Meow Meow",
               user_id: User.find_by_username("leol1").id})
board14 = Board.create!({board_name: 'smells good',
               description: "Some cool arts I found",
               user_id: User.find_by_username("guest").id})
board15 = Board.create!({board_name: 'Yayy',
               description: "Images that inspires the heck outta me",
               user_id: User.find_by_username("leol1").id})
board16 = Board.create!({board_name: 'disney',
               description: "All the cool stuff drawn by cool peole",
               user_id: User.find_by_username("guest").id})
board17 = Board.create!({board_name: 'animation concept',
              description: "Meow Meow",
              user_id: User.find_by_username("leol1").id})
board18 = Board.create!({board_name: 'no repeats',
              description: "Some cool arts I found",
              user_id: User.find_by_username("guest").id})
board19 = Board.create!({board_name: 'rake aborted',
              description: "Images that inspires the heck outta me",
              user_id: User.find_by_username("leol1").id})
board20 = Board.create!({board_name: 'motta',
              description: "All the cool stuff drawn by cool peole",
              user_id: User.find_by_username("guest").id})
board21 = Board.create!({board_name: 'my pinnings',
              description: "Journey begins here",
              user_id: User.find_by_username("guest").id})

board1.pin_ids = [pin1.id, pin2.id, pin4.id, pin6.id, pin8.id,
                  pin10.id, pin12.id, pin14.id, pin16.id, pin18.id,
                  pin20.id, pin21.id, pin37.id, pin35.id, pin32.id,
                  pin41.id, pin42.id, pin45.id, pin47.id, pin49.id,
                  pin51.id];
board1.save!

board2.pin_ids = [pin3.id, pin5.id, pin7.id, pin9.id, pin1.id, pin2.id,
                  pin4.id, pin6.id, pin8.id, pin10.id, pin12.id,
                  pin22.id, pin24.id, pin31.id, pin32.id, pin33.id,
                  pin43.id, pin41.id, pin45.id, pin46.id, pin50.id,
                  pin14.id, pin16.id, pin18.id, pin20.id, pin21.id];
board2.save!

board3.pin_ids = [pin11.id, pin5.id, pin7.id, pin9.id, pin1.id, pin2.id,
                  pin4.id, pin6.id, pin8.id, pin10.id, pin12.id,
                  pin22.id, pin24.id, pin31.id, pin32.id, pin33.id,
                  pin43.id, pin41.id, pin45.id, pin46.id, pin52.id,
                  pin13.id, pin17.id, pin50.id];
board3.save!

board4.pin_ids = [pin2.id, pin3.id, pin6.id, pin7.id, pin8.id,
                  pin10.id, pin11.id, pin13.id, pin19.id, pin18.id,
                  pin20.id, pin23.id, pin37.id, pin35.id, pin32.id,
                  pin41.id, pin44.id, pin45.id, pin50.id, pin49.id,
                  pin51.id, pin13.id, pin29.id, pin27.id, pin16.id,
                  pin18.id, pin30.id];
board4.save!

board5.pin_ids = [pin3.id, pin5.id, pin7.id, pin9.id, pin1.id, pin2.id,
                  pin31.id, pin45.id, pin27.id, pin19.id, pin11.id,
                  pin22.id, pin4.id, pin25.id, pin37.id, pin29.id,
                  pin11.id, pin52.id, pin43.id, pin15.id, pin17.id,
                  pin30.id, pin18.id, pin42.id, pin13.id, pin50.id];
board5.save!

board6.pin_ids = [pin3.id, pin5.id, pin7.id, pin9.id, pin1.id, pin2.id,
                  pin31.id, pin45.id, pin27.id, pin19.id, pin11.id,
                  pin22.id, pin4.id, pin25.id, pin37.id, pin29.id,
                  pin11.id, pin52.id, pin43.id, pin15.id, pin17.id,
                  pin30.id, pin18.id, pin42.id, pin13.id, pin50.id];
board6.save!

board7.pin_ids = [pin11.id, pin5.id, pin7.id, pin9.id, pin1.id, pin2.id,
                  pin4.id, pin6.id, pin8.id, pin10.id, pin12.id,
                  pin22.id, pin24.id, pin30.id, pin32.id, pin33.id,
                  pin43.id, pin41.id, pin45.id, pin46.id, pin52.id,
                  pin13.id, pin17.id, pin50.id];
board7.save!

board8.pin_ids = [pin1.id, pin2.id, pin4.id, pin6.id, pin8.id,
                  pin10.id, pin12.id, pin14.id, pin16.id, pin18.id,
                  pin20.id, pin21.id, pin37.id, pin35.id, pin32.id,
                  pin41.id, pin42.id, pin45.id, pin47.id, pin49.id,
                  pin51.id];
board8.save!

board9.pin_ids = [pin2.id, pin6.id, pin7.id, pin9.id, pin1.id, pin2.id,
                  pin22.id, pin24.id, pin37.id, pin32.id, pin34.id,
                  pin43.id, pin41.id, pin45.id, pin47.id, pin50.id,
                  pin44.id, pin16.id, pin16.id, pin20.id, pin21.id];
board9.save!

board10.pin_ids = [pin11.id, pin19.id, pin29.id, pin24.id, pin28.id];
board10.save!

board11.pin_ids = [pin3.id, pin5.id, pin7.id, pin9.id, pin1.id, pin2.id,
                  pin22.id, pin4.id, pin25.id, pin37.id, pin29.id,
                  pin30.id, pin18.id, pin42.id, pin13.id, pin50.id];
board11.save!

board12.pin_ids = [pin3.id, pin5.id, pin7.id, pin9.id, pin1.id, pin2.id,
                  pin31.id, pin45.id, pin27.id, pin19.id, pin11.id,
                  pin11.id, pin52.id, pin43.id, pin15.id, pin17.id,
                  pin30.id, pin18.id, pin42.id, pin13.id, pin50.id];
board12.save!

board13.pin_ids = [pin11.id, pin5.id, pin7.id, pin9.id, pin1.id, pin2.id,
                  pin4.id, pin6.id, pin8.id, pin10.id, pin12.id,
                  pin22.id, pin24.id, pin30.id, pin32.id, pin33.id,
                  pin13.id, pin17.id, pin50.id];
board13.save!

board14.pin_ids = [pin20.id, pin23.id, pin37.id, pin35.id, pin32.id,
                  pin41.id, pin44.id, pin45.id, pin50.id, pin49.id,
                  pin51.id, pin13.id, pin29.id, pin27.id, pin16.id,
                  pin18.id, pin30.id];
board14.save!

board15.pin_ids = [pin3.id, pin5.id, pin7.id, pin9.id, pin1.id, pin2.id,
                  pin11.id, pin52.id, pin43.id, pin15.id, pin17.id,
                  pin30.id, pin18.id, pin42.id, pin13.id, pin50.id];
board15.save!

board16.pin_ids = [pin3.id, pin5.id, pin7.id, pin9.id, pin1.id, pin2.id,
                  pin31.id, pin45.id, pin27.id, pin19.id, pin11.id,
                  pin11.id, pin52.id, pin43.id, pin15.id, pin17.id,
                  pin30.id, pin18.id, pin42.id, pin13.id, pin50.id];
board16.save!

board17.pin_ids = [pin11.id, pin5.id, pin7.id, pin9.id, pin1.id, pin2.id,
                  pin4.id, pin6.id, pin8.id, pin10.id, pin12.id,
                  pin22.id, pin24.id, pin30.id, pin32.id, pin33.id,
                  pin13.id, pin17.id, pin50.id];
board17.save!

board18.pin_ids = [pin1.id, pin2.id, pin4.id, pin6.id, pin8.id,
                  pin10.id, pin12.id, pin14.id, pin16.id, pin18.id,
                  pin20.id, pin21.id, pin37.id, pin35.id, pin32.id,
                  pin51.id];
board18.save!

board19.pin_ids = [pin2.id, pin6.id, pin7.id, pin9.id, pin1.id, pin2.id,
                  pin22.id, pin24.id, pin37.id, pin32.id, pin34.id,
                  pin43.id, pin41.id, pin45.id, pin47.id, pin50.id,
                  pin44.id, pin16.id, pin16.id, pin20.id, pin21.id];
board19.save!

board20.pin_ids = [pin31.id, pin42.id, pin21.id, pin20.id, pin50.id,
                  pin4.id, pin6.id, pin8.id, pin10.id, pin12.id,
                  pin22.id, pin24.id, pin30.id, pin32.id, pin33.id,
                  pin43.id, pin41.id, pin45.id, pin46.id, pin52.id,
                  pin13.id, pin17.id, pin50.id];
board20.save!


pinning1 = Pinning.create!(board_id: board21.id,
                           pin_id: pin1.id)
pinning2 = Pinning.create!(board_id: board21.id,
                           pin_id: pin24.id)
pinning3 = Pinning.create!(board_id: board21.id,
                           pin_id: pin17.id)
pinning4 = Pinning.create!(board_id: board21.id,
                           pin_id: pin39.id)
pinning5 = Pinning.create!(board_id: board21.id,
                           pin_id: pin28.id)

following1 = Following.create!(following_id: user1.id, follower_id: user2.id)
following2 = Following.create!(following_id: user1.id, follower_id: user2.id)
following3 = Following.create!(following_id: user1.id, follower_id: user2.id)
following4 = Following.create!(following_id: user1.id, follower_id: user2.id)
following5 = Following.create!(following_id: user1.id, follower_id: user2.id)
following6 = Following.create!(following_id: user1.id, follower_id: user2.id)
following7 = Following.create!(following_id: user1.id, follower_id: user3.id)
following8 = Following.create!(following_id: user1.id, follower_id: user3.id)
following9 = Following.create!(following_id: user1.id, follower_id: user3.id)
following10 = Following.create!(following_id: user1.id, follower_id: user2.id)
following11 = Following.create!(following_id: user1.id, follower_id: user4.id)
following12 = Following.create!(following_id: user1.id, follower_id: user4.id)
following13 = Following.create!(following_id: user1.id, follower_id: user5.id)
following14 = Following.create!(following_id: user1.id, follower_id: user5.id)
following15 = Following.create!(following_id: user1.id, follower_id: user5.id)
following16 = Following.create!(following_id: user1.id, follower_id: user6.id)
following17 = Following.create!(following_id: user1.id, follower_id: user6.id)
following18 = Following.create!(following_id: user2.id, follower_id: user1.id)
following19 = Following.create!(following_id: user2.id, follower_id: user1.id)
following20 = Following.create!(following_id: user2.id, follower_id: user1.id)
following21 = Following.create!(following_id: user2.id, follower_id: user2.id)
following22 = Following.create!(following_id: user2.id, follower_id: user2.id)
following23 = Following.create!(following_id: user2.id, follower_id: user2.id)
following24 = Following.create!(following_id: user2.id, follower_id: user2.id)
following25 = Following.create!(following_id: user2.id, follower_id: user3.id)
following26 = Following.create!(following_id: user2.id, follower_id: user3.id)
following27 = Following.create!(following_id: user2.id, follower_id: user3.id)
following28 = Following.create!(following_id: user2.id, follower_id: user1.id)
following29 = Following.create!(following_id: user2.id, follower_id: user3.id)
following30 = Following.create!(following_id: user2.id, follower_id: user4.id)
following31 = Following.create!(following_id: user2.id, follower_id: user1.id)
following32 = Following.create!(following_id: user2.id, follower_id: user3.id)
following33 = Following.create!(following_id: user2.id, follower_id: user1.id)
following34 = Following.create!(following_id: user2.id, follower_id: user1.id)
following35 = Following.create!(following_id: user2.id, follower_id: user1.id)
following36 = Following.create!(following_id: user2.id, follower_id: user1.id)
following37 = Following.create!(following_id: user3.id, follower_id: user1.id)
following38 = Following.create!(following_id: user3.id, follower_id: user1.id)
following39 = Following.create!(following_id: user3.id, follower_id: user1.id)
following40 = Following.create!(following_id: user3.id, follower_id: user1.id)
following41 = Following.create!(following_id: user3.id, follower_id: user1.id)
following42 = Following.create!(following_id: user3.id, follower_id: user2.id)
following43 = Following.create!(following_id: user3.id, follower_id: user2.id)
following44 = Following.create!(following_id: user3.id, follower_id: user1.id)
following45 = Following.create!(following_id: user3.id, follower_id: user2.id)
following46 = Following.create!(following_id: user3.id, follower_id: user5.id)
following47 = Following.create!(following_id: user3.id, follower_id: user6.id)
following48 = Following.create!(following_id: user3.id, follower_id: user5.id)
following49 = Following.create!(following_id: user3.id, follower_id: user5.id)
following50 = Following.create!(following_id: user3.id, follower_id: user4.id)
following51 = Following.create!(following_id: user3.id, follower_id: user2.id)
following52 = Following.create!(following_id: user3.id, follower_id: user1.id)
following53 = Following.create!(following_id: user3.id, follower_id: user4.id)
following54 = Following.create!(following_id: user4.id, follower_id: user1.id)
following55 = Following.create!(following_id: user4.id, follower_id: user2.id)
following56 = Following.create!(following_id: user4.id, follower_id: user2.id)
following57 = Following.create!(following_id: user4.id, follower_id: user5.id)
following58 = Following.create!(following_id: user4.id, follower_id: user2.id)
following59 = Following.create!(following_id: user4.id, follower_id: user3.id)
following60 = Following.create!(following_id: user4.id, follower_id: user2.id)
following61 = Following.create!(following_id: user4.id, follower_id: user3.id)
following62 = Following.create!(following_id: user4.id, follower_id: user6.id)
following63 = Following.create!(following_id: user4.id, follower_id: user3.id)
following64 = Following.create!(following_id: user4.id, follower_id: user1.id)
following65 = Following.create!(following_id: user5.id, follower_id: user4.id)
following66 = Following.create!(following_id: user5.id, follower_id: user4.id)
following67 = Following.create!(following_id: user5.id, follower_id: user2.id)
following68 = Following.create!(following_id: user5.id, follower_id: user3.id)
following69 = Following.create!(following_id: user5.id, follower_id: user2.id)
following70 = Following.create!(following_id: user5.id, follower_id: user2.id)
following71 = Following.create!(following_id: user5.id, follower_id: user3.id)
following72 = Following.create!(following_id: user5.id, follower_id: user4.id)
following73 = Following.create!(following_id: user5.id, follower_id: user3.id)
following74 = Following.create!(following_id: user6.id, follower_id: user1.id)
following75 = Following.create!(following_id: user6.id, follower_id: user4.id)
following76 = Following.create!(following_id: user6.id, follower_id: user3.id)
following77 = Following.create!(following_id: user6.id, follower_id: user2.id)
following78 = Following.create!(following_id: user6.id, follower_id: user1.id)
following79 = Following.create!(following_id: user6.id, follower_id: user1.id)
