# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "Seeding Users..."
Artist.destroy_all
Concert.destroy_all
User.destroy_all

u1 = User.create(username: "Nickphelps34", password: 9362, email: "Nickphelps34@gmail.com", bio: “”)
u2 = User.create(username: "kh582013", password: 9362, email: "kh582013@gmail.com", bio: “”)
u3 = User.create(username: "cmccoy115", password: 9362, email: "caleb_mccoy115@yahoo.com", bio: “”)

puts "Seeding Artist..."
a1 = Artist.create(name: "Subtronics", genre: "Electronic", album: "Fractals")
a2 = Artist.create(name: "Svdden Death", genre: "Electronic", album: "Voyd 2")
a3 = Artist.create(name: "Bring Me The Horizon", genre: "Rock" , album: "Thats the Spirit")
a4 = Artist.create(name: "EDEN", genre: "Indie" , album: "I Think You Think Too Much of Me" )
a5 = Artist.create(name: "blackbear", genre: "Pop" , album: "Digital Druglord")
a6 = Artist.create(name: "Spooky Black", genre: "Alternative", album: "Leaving")
a7 = Artist.create(name: "Machine Gun Kelly", genre: "Alternative" , album: "Tickets to my downfall" )
a8 = Artist.create(name: "Taylor Swift" , genre: "Country" , album: "Folklore" )
a9 = Artist.create(name: "Tyedye Ky" , genre: "Electronic", album: "Baby Blue and the Super Moon")
a10 = Artist.create(name: "Vacations", genre: "Alternative" , album: "Vibes & Days" )
a11 =  Artist.create(name: "Metallica" , genre: "Metal" , album: "The Black Album" )
a12 = Artist.create(name: "Deadmau5" , genre: "Electronic" , album: "4x4=12" )
a13 = Artist.create(name: "Skrillex", genre: "Electronic" , album: "Recess")
a14 = Artist.create(name: "Adam Tell" , genre: "Electronic" , album: "Recomposure" )
a15 = Artist.create(name: "Phish", genre: "Jam Band" , album: "Round Room")
a16 = Artist.create(name: "Sleeping With Sirens", genre: "Metalcore", album: "Complete Collapse" )
a17 = Artist.create(name: "Eptic", genre: "Electronic" , album: "The End of the World" )
a18 = Artist.create(name: "Imanu" , genre: "Electronic" , album: "Unfold" )
a19 = Artist.create(name: "EAZYBAKED" , genre: "Electronic" , album: "INTERTWINED" )
a20 = Artist.create(name: "Jeremy Zucker", genre: "Pop" , album: "Motions" )


puts "Seeding Concerts..."
Concert.create(artist_id: a5.id, user_id: u2.id, description: "", city: "Columbus", date: 02152023 )
Concert.create(artist_id: a8.id, user_id: u2.id, description: "", city: "Columbus", date: 03272023)
Concert.create(artist_id: a13.id, user_id: u1.id, description: "", city: "Grand Rapids", date: 06232023)
Concert.create(artist_id: a18.id, user_id: u1.id, description: "", city: "Grand Rapids", date: 02152023)
Concert.create(artist_id: a4.id, user_id: u3.id, description: "", city: "Nashville", date: 02022023)
Concert.create(artist_id: a14.id, user_id: u3.id, description: "", city: "Nashville", date: 02242023)

puts "Seeding done"
