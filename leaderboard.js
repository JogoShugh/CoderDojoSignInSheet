Players = new Meteor.Collection("players");

function playerCreate(computerName, computerSecret) {
  return {
    "computerName": computerName,
    "computerSecret": computerSecret,
    "firstName": "",
    "lastName": "",
    "gitHubUsername": "",
    "grade": "",
    "favoriteSubjects": ["?", "?", "?", "?", "?"],
    "favoriteColor": "",
    "avatarURL": "http://icons.iconarchive.com/icons/hopstarter/face-avatars/48/Male-Face-N5-icon.png"
  }
}

function playerUpdate(obj) {
  var player = Players.findOne({computerName:obj.computerName});
  if (player) {
    if (obj.computerSecret === player.computerSecret) {
      $('#' + player._id + 'favoriteSubjects .favoriteSubject').remove();
      Players.update(player._id, { $set: obj });  
    }
  }
}

function playerUpdateById(id, obj) {
  var player = Players.findOne({_id:id});
  if (player) {
    Players.update(player._id, { $set: obj });
  }
}

function seatUnlocked(computerName) {
  var unlockedComputerName = Session.get('seatUnlocked');
  return computerName === unlockedComputerName;
}

function getArrayValuesFor(parentSelector, klass) {
  var vals = [];
  var parent = $($(parentSelector)[0]);
  parent.find(klass).each(function(index, item) {
    var val = $(item).val();
    vals.push(val);
  });
  return vals;
}

if (Meteor.isClient) {
  Accounts.ui.config({
    requestPermissions: {
      github: ['user', 'repo']
    },
    passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
  });

  Template.players.players = function () {
    return Players.find({}, {sort: {computerName: 1}});
  };

  Template.player.events({
    'change input.favoriteColor, blur input.entry': function (evt) {
      var el = $(evt.target);
      var delta = {};
      delta[el.attr('data-field')] = el.val();
      playerUpdateById(this._id, delta);
    },
    'click input.seatUnlock': function(evt) {
      var id = $(evt.target).attr("data-id");
      var computerName = $("#" + id + "computerName").text();
      var computerSecret = $("#" + id + "computerSecret").val();
      Meteor.call('seatUnlock', computerName, computerSecret, function(err, res) {
        if (err) {
          console.log("Error!");
          console.log(err);
        }
        if (res.success) {
          Session.set('seatUnlocked', computerName);
        } else {
          alert(res.message);
          Session.set('seatUnlocked', '');
        }
      });
    },
    'blur input.favoriteSubject': function(evt) {
      var el = $($(evt.target)[0]);
      if (el.val() === null || el.val() === "") {
        return;
      }
      var id = el.attr('data-id');        
      var favoriteSubjects = getArrayValuesFor('#' + id + 'favoriteSubjects', '.favoriteSubject');
      var obj = {favoriteSubjects:favoriteSubjects};
      playerUpdateById(id, obj);
    }
  });

  function withIndex(array, indexDisplayOffset) {
    return _.map(array, function(item, index) {
      var indexDisplay = index + indexDisplayOffset;
      return {index: index, indexDisplay: indexDisplay, val:item};
    });
  }

  Template.player.helpers({   
   'seatUnlocked': function(computerName) {
      return seatUnlocked(computerName);
    },
   'getVAlign': function(computerName) {
      return seatUnlocked(computerName) ? "top" : "middle";
    },
    'withIndex': function(array, indexDisplayOffset) {
      return withIndex(array, indexDisplayOffset);
    },
    'excludeWhenMatch': function(array, matchValue) {
      var newArray = withIndex(array, 1);
      var rejected =_.reject(newArray, function(item) { return item.val === matchValue });
      return rejected;
    }
  });
}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
  Meteor.startup(function () {
    Meteor.methods({
      'seatUnlock': function(computerName, computerSecret) {
        var player = Players.findOne({computerName:computerName, computerSecret: computerSecret});
        if (player) {
          return { success: true, message: '' };
        } else {
          return { success: false, message: 'Computer Name and Computer Secret did not match!'};
        }
      }
    });
    var basic = Players.findOne({computerName:"BASIC"});
    if (basic) {
      return;
    }
    var names = ["F#",
                 "C++",
                 "C",
                 "D",
                 "C#",
                 "Python",                 
                 "Java",
                 "JavaScript",
                 "Haskell",
                 "Clojure",
                 "PERL",
                 "PHP",
                 "Scala",
                 "CoffeeScript",
                 "BASIC",
                 "LISP",
                 "Ruby",
                 "Scheme",
                 "Squeak"
                 ];
    names = names.sort();                 
    for (var i = 0; i < names.length; i++) {
      Players.insert(playerCreate(names[i], names[i]));
    }
  });
}
