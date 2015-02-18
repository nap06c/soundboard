if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.soundList.helpers({
    randomSounds: function() {
      return Sounds.find();
    }
  });

  Template.soundList.events({
    'click button': function (event) {
      console.log(event.target);
      var button = event.target
      var audio = new Audio($(button).attr('data-sound-src'));
      audio.play();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
