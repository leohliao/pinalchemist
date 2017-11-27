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
user1 = User.create!({username: "guest",
  password: "iamdemo",
  description: "I am guest, and I think this website looks cool!",
  image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504175717/20ea0e8740c052012543b9c7b250fcfa_typz7g.jpg"})
# --------------------------------
user2 = User.create!({username: "leol",
  password: "password",
  description: "I am a storyboard artist",
  image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501093275/user_profile_img_ogenba.jpg"})
user3 = User.create!({username: "ziwei arts",
  password: "password",
  description: "Illustration artist",
  image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504164620/4_Luffy_101909_1256006964_aw7ehf.jpg"})
user4 = User.create!({username: "mike cg",
  password: "password",
  description: "3D Artist at Leo Studio",
  image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504164655/528897_1397877658276_480_300_hsyjag.jpg"})
user5 = User.create!({username: "joseph works",
  password: "password",
  description: "Designer at ILoveDesign.com",
  image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504164721/3_Lelouch_101909_1256006940_tcglgz.jpg"})
user6 = User.create!({username: "sesame jim",
  password: "password",
  description: "Freelance Artist",
  image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504164774/5_Vegeta_101909_1256006982_psyiy9.jpg"})

Pin.destroy_all
pin1 = Pin.create!({title: 'Gamera Remake',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858033/Gamera_hohult.jpg",
             user_id: User.find_by_username("leol").id})
pin2 = Pin.create!({title: 'Tanks And Airplane',
             user_id: User.find_by_username("leol").id,
             description: "none",
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858054/TnP_01_d0f9qg.jpg"})
pin3 = Pin.create!({title: 'Plants',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1500858033/Plants_01_ukeaoi.jpg",
             user_id: User.find_by_username("ziwei arts").id})
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
             user_id: User.find_by_username("ziwei arts").id})
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
            user_id: User.find_by_username("leol").id})
pin11 = Pin.create!({title: 'Crane',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501022171/qanjfdrxm4uzvuku7i1o.gif",
            description: "GIF animation, digital paint by Ziwei Duanmu",
            user_id: User.find_by_username("ziwei arts").id})
pin12 = Pin.create!({title: 'Snow House',
            description: "by Ziwei",
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195308/95318_orig_r18xtu.jpg",
             user_id: User.find_by_username("leol").id})
pin13 = Pin.create!({title: 'Arale Rendered',
             user_id: User.find_by_username("leol").id,
             description: "Maya V-Ray",
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195378/Arale_1_1_fduzdy.jpg"})
pin14 = Pin.create!({title: 'Arale Rendered2',
            description: "Maya V-Ray",
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195384/Arale_3_tbtzn3.jpg",
             user_id: User.find_by_username("ziwei arts").id})
pin15 = Pin.create!({title: 'Gundam Wing',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195422/Gundam00_uobymt.jpg",
             user_id: User.find_by_username("mike cg").id})
pin16 = Pin.create!({title: 'Hair in Maya',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195451/Week5_wgdcew.jpg",
             user_id: User.find_by_username("joseph works").id})
pin17 = Pin.create!({title: 'Life Drawing',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195486/IMG_4144_zoz0et.jpg",
             user_id: User.find_by_username("sesame jim").id})
pin18 = Pin.create!({title: 'Tengu',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195493/Tengu_1_fh2vzt.jpg",
             description: "Zbrush by Leo Liao",
             user_id: User.find_by_username("ziwei arts").id})
pin19 = Pin.create!({title: 'Nathan Fowkes Concept',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196268/Nathan_Fowkes_24a_tor1r0.jpg",
            description: "digital paint by NF",
            user_id: User.find_by_username("joseph works").id})
pin20 = Pin.create!({title: 'Puss',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196273/The-Art-of-Nathan-Fowkes-25_u3wumd.jpg",
            description: "dreamworks",
            user_id: User.find_by_username("joseph works").id})
pin21 = Pin.create!({title: 'Visual Development Project',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196283/tumblr_mhfi6tymb51rg2f4po4_1280_y6oedo.jpg",
            description: "digital paint by Nathan",
            user_id: User.find_by_username("mike cg").id})
pin22 = Pin.create!({title: 'Painting',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196294/12249575_10208371488548757_8527565230743978182_n_buhnjh.jpg",
            description: "Mike Hernandez",
            user_id: User.find_by_username("ziwei arts").id})
pin23 = Pin.create!({title: 'Painting',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196354/Untitled-4_mz3j6t.jpg",
             user_id: User.find_by_username("leol").id})
pin24 = Pin.create!({title: 'Painting',
             user_id: User.find_by_username("mike cg").id,
             description: "digital paintings",
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196303/pib-township-web_znxow5.jpg"})
pin25 = Pin.create!({title: 'NF workflow',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196331/57926438e8fcdba3ec606c6f53cb8918_dar7ij.jpg",
             user_id: User.find_by_username("ziwei arts").id})
pin26 = Pin.create!({title: 'Balboa Park',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196317/balboa_qwahba.jpg",
             user_id: User.find_by_username("mike cg").id})
pin27 = Pin.create!({title: 'Concept',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196344/nathan-fowkes-rio2-01_zcowgm.jpg",
             user_id: User.find_by_username("joseph works").id})
pin28 = Pin.create!({title: 'Magnodente2',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501195473/Magnodente__10_icsfyw.jpg",
             user_id: User.find_by_username("sesame jim").id})
pin29 = Pin.create!({title: 'Alien Kitty',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196307/alien_kitty1_yomnnu.jpg",
             description: "Jonath Kuo Arts",
             user_id: User.find_by_username("ziwei arts").id})
pin30 = Pin.create!({title: 'NF Walkflow',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1501196289/28283_2247252l_xtlzoa.jpg",
            description: "digital paint by Nathan Fowkes",
            user_id: User.find_by_username("joseph works").id})
pin31 = Pin.create!({title: 'Visual Development Project for Disney',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160026/8371549_orig_q7kxlu.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol").id})
pin32 = Pin.create!({title: 'Visual Development Project for Disney',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160149/7678256_orig_qatfog.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("ziwei arts").id})
pin33 = Pin.create!({title: 'Visual Development for Disney',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160209/mmcl-2016-ballspin-v01-bg-v04-zd-011316-72dpi_orig_medvgs.jpg",
             description: "Paint by Ziwei Duanmu",
             user_id: User.find_by_username("leol").id})
pin34 = Pin.create!({title: 'Visual Development for Disney',
             user_id: User.find_by_username("mike cg").id,
             description: "digital paintings by Ziwei Duanmu",
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160297/mmcl-2016-dunk-v01-shot1-bg-v01-zd-012416-120dpi_orig_bgntjs.jpg"})
pin35 = Pin.create!({title: 'Visual Development for Disney',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160398/mmcl-2016-gamewinner-v01-shot2-bg-zd-011816-150dpi_orig_obzubo.jpg",
             description: "digital paintings by Ziwei Duanmu",
             user_id: User.find_by_username("ziwei arts").id})
pin36 = Pin.create!({title: 'Icy North - Visual Development',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160459/_8159683_orig_sugfcv.jpg",
             description: "digital paintings by Ziwei Duanmu",
             user_id: User.find_by_username("mike cg").id})
pin37 = Pin.create!({title: 'Visual Development: Snow Storm',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160516/_5861338_orig_eyiqjp.jpg",
             description: "digital paintings by Ziwei Duanmu",
             user_id: User.find_by_username("joseph works").id})
pin38 = Pin.create!({title: 'Visual Development - Sailing in the storm',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160567/_9153677_orig_ynbeeb.jpg",
             description: "digital paintings by Ziwei Duanmu",
             user_id: User.find_by_username("sesame jim").id})
pin39 = Pin.create!({title: 'Visual Development BG',
             image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160627/7235707_orig_q9edzk.jpg",
             description: "digital paintings by Ziwei Duanmu",
             user_id: User.find_by_username("ziwei arts").id})
pin40 = Pin.create!({title: 'Snow House',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160749/4552509_orig_e3uvvu.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("joseph works").id})
pin41 = Pin.create!({title: 'Visual Development Mountain',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160787/7336510_orig_ruu4cy.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol").id})
pin42 = Pin.create!({title: 'Visual Development Living Room',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504160822/1904021_orig_cm2bgd.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("ziwei arts").id})
pin43 = Pin.create!({title: 'Visual Development - Bridge',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162470/241915_orig_njab6v.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol").id})
pin44 = Pin.create!({title: 'Visual Development - home',
            user_id: User.find_by_username("mike cg").id,
            description: "digital paintings by Ziwei Duanmu",
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162505/9828331_orig_phddoc.jpg"})
pin45 = Pin.create!({title: 'Visual Development - home again',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162547/08-zd-031716-1_orig_jyuv8z.jpg",
            description: "digital paintings by Ziwei Duanmu",
            user_id: User.find_by_username("ziwei arts").id})
pin46 = Pin.create!({title: 'Visual Development - home stair',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162599/09-bg-033016_orig_zclbmj.jpg",
            description: "digital paintings by Ziwei Duanmu",
            user_id: User.find_by_username("mike cg").id})
pin47 = Pin.create!({title: 'Visual Development - home from door',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/c_scale,w_753/v1504162652/40-bg-0426-1_orig_dwejto.jpg",
            description: "digital paintings by Ziwei Duanmu",
            user_id: User.find_by_username("joseph works").id})
pin48 = Pin.create!({title: 'Visual Development - dining table',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162694/25-0420-1_orig_ve94cc.jpg",
            description: "digital paintings by Ziwei Duanmu",
            user_id: User.find_by_username("guest").id})
pin49 = Pin.create!({title: 'Visual Development - swimming pool',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162747/6507989_orig_dfygmj.jpg",
            description: "digital paintings by Ziwei Duanmu",
            user_id: User.find_by_username("ziwei arts").id})
pin50 = Pin.create!({title: 'Interesting Things',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162902/7109467_orig_ju5gmy.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("guest").id})
pin51 = Pin.create!({title: 'Visual Development School',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162939/4749901_orig_jjdglc.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("leol").id})
pin52 = Pin.create!({title: 'Visual Development Cactus and church',
            image_url: "http://res.cloudinary.com/leosoba/image/upload/v1504162971/__1285450_orig_sb87dr.jpg",
            description: "Paint by Ziwei Duanmu",
            user_id: User.find_by_username("ziwei arts").id})

Board.destroy_all
board1 = Board.create!({board_name: 'My favorites',
               description: "Collections of all my favorite",
               user_id: User.find_by_username("leol").id})
board2 = Board.create!({board_name: 'Art Center',
               description: "Amazing artworks collection from artCenter",
               user_id: User.find_by_username("guest").id})
board3 = Board.create!({board_name: 'Incredible Illustration',
               description: "Meow Meow",
               user_id: User.find_by_username("leol").id})
board4 = Board.create!({board_name: 'Illustration',
               description: "Some cool arts I found",
               user_id: User.find_by_username("guest").id})
board5 = Board.create!({board_name: 'Inspiration',
               description: "Images that inspires the heck outta me",
               user_id: User.find_by_username("leol").id})
board6 = Board.create!({board_name: 'Freelancer',
               description: "All the cool stuff drawn by cool peole",
               user_id: User.find_by_username("guest").id})
board7 = Board.create!({board_name: 'Cats',
              description: "Meow Meow",
              user_id: User.find_by_username("leol").id})
board8 = Board.create!({board_name: 'Sweet Arts',
              description: "I got a dream",
              user_id: User.find_by_username("ziwei arts").id})
board9 = Board.create!({board_name: 'Arts of mine',
              description: "I can do tis",
              user_id: User.find_by_username("leol").id})
board10 = Board.create!({board_name: 'Cool Arts',
              description: "Cool",
              user_id: User.find_by_username("ziwei arts").id})
board11 = Board.create!({board_name: 'Masters illustration',
               description: "master collections",
               user_id: User.find_by_username("leol").id})
board12 = Board.create!({board_name: 'Masters',
               description: "Amazing artworks collection from artCenter",
               user_id: User.find_by_username("guest").id})
board13 = Board.create!({board_name: 'Cute Animals',
               description: "Meow Meow",
               user_id: User.find_by_username("leol").id})
board14 = Board.create!({board_name: 'More Animals',
               description: "Some cool arts I found",
               user_id: User.find_by_username("guest").id})
board15 = Board.create!({board_name: 'Amazing Artists',
               description: "Images that inspires the heck outta me",
               user_id: User.find_by_username("leol").id})
board16 = Board.create!({board_name: 'Viz from Disney',
               description: "All the cool stuff drawn by cool peole",
               user_id: User.find_by_username("guest").id})
board17 = Board.create!({board_name: 'Concept for Animation',
              description: "Meow Meow",
              user_id: User.find_by_username("leol").id})
board18 = Board.create!({board_name: 'More Boards',
              description: "Some cool arts I found",
              user_id: User.find_by_username("guest").id})
board19 = Board.create!({board_name: 'Another Sets of Images',
              description: "Images that inspires the heck outta me",
              user_id: User.find_by_username("leol").id})
board20 = Board.create!({board_name: 'More amazing arts',
              description: "All the cool stuff drawn by cool peole",
              user_id: User.find_by_username("guest").id})

Pinning.destroy_all
pinning1 = Pinning.create!(board_id: board1.id, pin_id: pin1.id)
pinning2 = Pinning.create!(board_id: board1.id, pin_id: pin2.id)
pinning3 = Pinning.create!(board_id: board1.id, pin_id: pin3.id)
pinning4 = Pinning.create!(board_id: board1.id, pin_id: pin4.id)
pinning5 = Pinning.create!(board_id: board1.id, pin_id: pin5.id)
pinning6 = Pinning.create!(board_id: board1.id, pin_id: pin6.id)
pinning7 = Pinning.create!(board_id: board1.id, pin_id: pin7.id)
pinning8 = Pinning.create!(board_id: board2.id, pin_id: pin8.id)
pinning9 = Pinning.create!(board_id: board2.id, pin_id: pin9.id)
pinning10 = Pinning.create!(board_id: board2.id, pin_id: pin10.id)
pinning11 = Pinning.create!(board_id: board2.id, pin_id: pin11.id)
pinning12 = Pinning.create!(board_id: board2.id, pin_id: pin12.id)
pinning13 = Pinning.create!(board_id: board2.id, pin_id: pin13.id)
pinning14 = Pinning.create!(board_id: board2.id, pin_id: pin14.id)
pinning15 = Pinning.create!(board_id: board3.id, pin_id: pin15.id)
pinning16 = Pinning.create!(board_id: board3.id, pin_id: pin16.id)
pinning17 = Pinning.create!(board_id: board3.id, pin_id: pin17.id)
pinning18 = Pinning.create!(board_id: board3.id, pin_id: pin18.id)
pinning19 = Pinning.create!(board_id: board3.id, pin_id: pin19.id)
pinning20 = Pinning.create!(board_id: board3.id, pin_id: pin20.id)
pinning21 = Pinning.create!(board_id: board3.id, pin_id: pin21.id)
pinning22 = Pinning.create!(board_id: board4.id, pin_id: pin22.id)
pinning23 = Pinning.create!(board_id: board4.id, pin_id: pin23.id)
pinning24 = Pinning.create!(board_id: board4.id, pin_id: pin24.id)
pinning25 = Pinning.create!(board_id: board4.id, pin_id: pin25.id)
pinning26 = Pinning.create!(board_id: board4.id, pin_id: pin26.id)
pinning27 = Pinning.create!(board_id: board4.id, pin_id: pin27.id)
pinning28 = Pinning.create!(board_id: board4.id, pin_id: pin28.id)
pinning29 = Pinning.create!(board_id: board5.id, pin_id: pin29.id)
pinning30 = Pinning.create!(board_id: board5.id, pin_id: pin30.id)
pinning31 = Pinning.create!(board_id: board5.id, pin_id: pin31.id)
pinning32 = Pinning.create!(board_id: board5.id, pin_id: pin32.id)
pinning33 = Pinning.create!(board_id: board5.id, pin_id: pin33.id)
pinning34 = Pinning.create!(board_id: board5.id, pin_id: pin34.id)
pinning35 = Pinning.create!(board_id: board6.id, pin_id: pin35.id)
pinning36 = Pinning.create!(board_id: board6.id, pin_id: pin36.id)
pinning37 = Pinning.create!(board_id: board6.id, pin_id: pin37.id)
pinning38 = Pinning.create!(board_id: board6.id, pin_id: pin38.id)
pinning39 = Pinning.create!(board_id: board6.id, pin_id: pin39.id)
pinning40 = Pinning.create!(board_id: board7.id, pin_id: pin40.id)
pinning41 = Pinning.create!(board_id: board7.id, pin_id: pin41.id)
pinning42 = Pinning.create!(board_id: board7.id, pin_id: pin42.id)
pinning43 = Pinning.create!(board_id: board7.id, pin_id: pin43.id)
pinning44 = Pinning.create!(board_id: board7.id, pin_id: pin44.id)
pinning45 = Pinning.create!(board_id: board8.id, pin_id: pin45.id)
pinning46 = Pinning.create!(board_id: board8.id, pin_id: pin46.id)
pinning47 = Pinning.create!(board_id: board8.id, pin_id: pin47.id)
pinning48 = Pinning.create!(board_id: board8.id, pin_id: pin48.id)
pinning49 = Pinning.create!(board_id: board8.id, pin_id: pin49.id)
pinning50 = Pinning.create!(board_id: board8.id, pin_id: pin50.id)
pinning51 = Pinning.create!(board_id: board9.id, pin_id: pin51.id)
pinning52 = Pinning.create!(board_id: board9.id, pin_id: pin52.id)
pinning53 = Pinning.create!(board_id: board9.id, pin_id: pin1.id)
pinning54 = Pinning.create!(board_id: board9.id, pin_id: pin2.id)
pinning55 = Pinning.create!(board_id: board10.id, pin_id: pin3.id)
pinning56 = Pinning.create!(board_id: board10.id, pin_id: pin4.id)
pinning57 = Pinning.create!(board_id: board10.id, pin_id: pin5.id)
pinning58 = Pinning.create!(board_id: board10.id, pin_id: pin6.id)
pinning59 = Pinning.create!(board_id: board10.id, pin_id: pin7.id)
pinning60 = Pinning.create!(board_id: board11.id, pin_id: pin8.id)
pinning61 = Pinning.create!(board_id: board11.id, pin_id: pin9.id)
pinning62 = Pinning.create!(board_id: board11.id, pin_id: pin10.id)
pinning63 = Pinning.create!(board_id: board12.id, pin_id: pin11.id)
pinning64 = Pinning.create!(board_id: board12.id, pin_id: pin12.id)
pinning65 = Pinning.create!(board_id: board12.id, pin_id: pin13.id)
pinning66 = Pinning.create!(board_id: board13.id, pin_id: pin14.id)
pinning67 = Pinning.create!(board_id: board13.id, pin_id: pin15.id)
pinning68 = Pinning.create!(board_id: board13.id, pin_id: pin16.id)
pinning69 = Pinning.create!(board_id: board13.id, pin_id: pin17.id)
pinning70 = Pinning.create!(board_id: board14.id, pin_id: pin18.id)
pinning71 = Pinning.create!(board_id: board14.id, pin_id: pin19.id)
pinning72 = Pinning.create!(board_id: board15.id, pin_id: pin20.id)
pinning73 = Pinning.create!(board_id: board15.id, pin_id: pin21.id)
pinning74 = Pinning.create!(board_id: board15.id, pin_id: pin22.id)
pinning75 = Pinning.create!(board_id: board16.id, pin_id: pin23.id)
pinning76 = Pinning.create!(board_id: board16.id, pin_id: pin24.id)
pinning77 = Pinning.create!(board_id: board17.id, pin_id: pin25.id)
pinning78 = Pinning.create!(board_id: board17.id, pin_id: pin26.id)
pinning79 = Pinning.create!(board_id: board18.id, pin_id: pin27.id)
pinning80 = Pinning.create!(board_id: board19.id, pin_id: pin28.id)
pinning81 = Pinning.create!(board_id: board20.id, pin_id: pin29.id)
pinning82 = Pinning.create!(board_id: board20.id, pin_id: pin30.id)
pinning83 = Pinning.create!(board_id: board20.id, pin_id: pin31.id)
pinning84 = Pinning.create!(board_id: board1.id, pin_id: pin32.id)
pinning85 = Pinning.create!(board_id: board1.id, pin_id: pin33.id)
pinning86 = Pinning.create!(board_id: board1.id, pin_id: pin34.id)
pinning87 = Pinning.create!(board_id: board1.id, pin_id: pin35.id)
pinning88 = Pinning.create!(board_id: board1.id, pin_id: pin36.id)
pinning89 = Pinning.create!(board_id: board1.id, pin_id: pin37.id)
pinning90 = Pinning.create!(board_id: board1.id, pin_id: pin38.id)
pinning91 = Pinning.create!(board_id: board2.id, pin_id: pin39.id)
pinning92 = Pinning.create!(board_id: board2.id, pin_id: pin40.id)
pinning93 = Pinning.create!(board_id: board2.id, pin_id: pin41.id)
pinning94 = Pinning.create!(board_id: board2.id, pin_id: pin42.id)
pinning95 = Pinning.create!(board_id: board2.id, pin_id: pin43.id)
pinning96 = Pinning.create!(board_id: board2.id, pin_id: pin44.id)
pinning97 = Pinning.create!(board_id: board2.id, pin_id: pin45.id)
pinning98 = Pinning.create!(board_id: board3.id, pin_id: pin46.id)
pinning99 = Pinning.create!(board_id: board3.id, pin_id: pin47.id)
pinning100 = Pinning.create!(board_id: board3.id, pin_id: pin48.id)
pinning101 = Pinning.create!(board_id: board2.id, pin_id: pin49.id)
pinning102 = Pinning.create!(board_id: board2.id, pin_id: pin50.id)
pinning103 = Pinning.create!(board_id: board2.id, pin_id: pin51.id)
pinning104 = Pinning.create!(board_id: board2.id, pin_id: pin52.id)
pinning105 = Pinning.create!(board_id: board2.id, pin_id: pin1.id)
pinning106 = Pinning.create!(board_id: board2.id, pin_id: pin2.id)
pinning107 = Pinning.create!(board_id: board2.id, pin_id: pin3.id)
pinning108 = Pinning.create!(board_id: board3.id, pin_id: pin4.id)
pinning109 = Pinning.create!(board_id: board3.id, pin_id: pin5.id)
pinning110 = Pinning.create!(board_id: board3.id, pin_id: pin6.id)

Following.destroy_all
following1 = Following.create!(following_id: user1.id, follower_id: user2.id)
following2 = Following.create!(following_id: user6.id, follower_id: user3.id)
following3 = Following.create!(following_id: user6.id, follower_id: user4.id)
following4 = Following.create!(following_id: user1.id, follower_id: user5.id)
following5 = Following.create!(following_id: user6.id, follower_id: user2.id)
following6 = Following.create!(following_id: user2.id, follower_id: user1.id)
following7 = Following.create!(following_id: user2.id, follower_id: user3.id)
following8 = Following.create!(following_id: user2.id, follower_id: user4.id)
following9 = Following.create!(following_id: user5.id, follower_id: user4.id)
following10 = Following.create!(following_id: user6.id, follower_id: user5.id)
following11 = Following.create!(following_id: user3.id, follower_id: user1.id)
following12 = Following.create!(following_id: user3.id, follower_id: user2.id)
following13 = Following.create!(following_id: user3.id, follower_id: user4.id)
following14 = Following.create!(following_id: user3.id, follower_id: user5.id)
following15 = Following.create!(following_id: user4.id, follower_id: user1.id)
following16 = Following.create!(following_id: user5.id, follower_id: user2.id)
following17 = Following.create!(following_id: user5.id, follower_id: user1.id)
following18 = Following.create!(following_id: user4.id, follower_id: user3.id)
following19 = Following.create!(following_id: user4.id, follower_id: user5.id)
following20 = Following.create!(following_id: user4.id, follower_id: user6.id)
