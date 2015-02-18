Sounds = new Mongo.Collection("sounds");

if (Meteor.isServer) {
  Meteor.startup(function () {
    if(Sounds.find().count() === 0) {
      var seeder = [
        {
          name: "That was easy",
          file: "http://mhwalkers.freevar.com/sounds/that_was_easy.wav"
        },
        {
          name: "Not So Easy",
          file: "Soundbite.mp3"
        },
        {
          name: "Dumb and Dumberer quote",
          file: "dumb.mp3"
        }
      ];

      for(var i in seeder) {
        Sounds.insert(seeder[i]);
      }
    }
    // code to run on server at startup
  });
}