Players = new Meteor.Collection("players");

avatarAsleep = "http://i.imgur.com/acGhf9A.png";

smileyBase = 'http://icons.iconarchive.com/icons/hopstarter/keriyo-emoticons/96/';

smileys = [
  "Smiley-icon.png",
  "Smiley-bored-icon.png",
  "Smiley-bored-2-icon.png",
  "Smiley-complain-icon.png",
  "Smiley-complain-2-icon.png",
  "Smiley-cool-icon.png",
  "Smiley-disappointed-icon.png",
  "Smiley-dollar-icon.png",
  "Smiley-friendly-icon.png",
  "Smiley-glad-icon.png",
  "Smiley-grumpy-icon.png",
  "Smiley-grumpy-2-icon.png",
  "Smiley-guilty-icon.png",
  "Smiley-laugh-icon.png",
  "Smiley-love-icon.png",
  "Smiley-pleased-icon.png",
  "Smiley-reflective-icon.png",
  "Smiley-rofl-icon.png",
  "Smiley-sad-icon.png",
  "Smiley-scared-icon.png",
  "Smiley-scared-2-icon.png",
  "Smiley-sleep-icon.png",
  "Smiley-sorry-icon.png    ",
  "Smiley-stick-tongue-icon.png",
  "Smiley-surprised-icon.png",
  "Smiley-surprised-2-icon.png",
  "Smiley-teards-icon.png",
  "Smiley-unfortunate-icon.png",
  "Smiley-untroubled-icon.png",
  "Smiley-upset-icon.png",
  "Smiley-upset-2-icon.png    ",
  "Smiley-upset-3-icon.png",
  "Smiley-upset-4-icon.png",
  "Smiley-zzz-icon.png"
];

grades = [];
for (var i = 1; i < 13; i++) {
  grades.push(i);
};

colors = {
  PinksLights: [
    "Pink",
    "LightPink"
  ],
  PinkDarks: [
    "HotPink",
    "DeepPink",
    "PaleVioletRed",
    "MediumVioletRed",
  ],
  RedLights: [
    "LightSalmon",
    "Salmon",
    "DarkSalmon",
    "LightCoral"
  ],
  RedDarks: [
    "IndianRed",
    "Crimson",
    "FireBrick",
    "DarkRed",
    "Red"
  ],
  OrangeDarks: [  
    "Orange",
    "Tomato",
    "Coral",
    "DarkOrange",
    "Orange"
  ],
  YellowDarks: [
    "Yellow",
    "LightYellow",
    "LemonChiffon",
    "LightGoldenrodYellow",
    "PapayaWhip",
    "Moccasin",
    "PeachPuff",
    "PaleGoldenrod",
    "Khaki",
    "DarkKhaki",
    "Gold"
  ],
  BrownDarks: [
    "CornSilk",
    "BlanchedAlmond",
    "Bisque",
    "NavajoWhite",
    "Wheat",
    "BurlyWood",
    "Tan",
    "RosyBrown",
    "SandyBrown",
    "Goldenrod"
  ],
  BrownLights: [
    "DarkGoldenrod",
    "Peru",
    "Chocolate",
    "SaddleBrown",
    "Sienna",
    "Brown",
    "Maroon"
  ],
  GreenDarks: [
    "DarkOliveGreen",
    "Olive",
    "OliveDrab",
    "MediumSeaGreen",
    "SeaGreen",
    "ForestGreen",
    "Green",
    "DarkGreen"
  ],
  GreenLights: [
    "YellowGreen",
    "LimeGreen",
    "Lime",
    "LawnGreen",
    "Chartreuse",
    "GreenYellow",
    "SpringGreen",
    "MediumSpringGreen",
    "LightGreen",
    "PaleGreen",
    "DarkSeaGreen"
  ],
  CyanLights: [
    "MediumAquamarine",   
    "Aqua",
    "Cyan",
    "LightCyan",
    "PaleTurquoise",
    "Aquamarine",
    "Turquoise",
    "MediumTurquoise"
  ],
  CyanDarks: [
    "DarkTurquoise",
    "LightSeaGreen",
    "CadetBlue",
    "DarkCyan",
    "Teal"
  ], 
  BlueLights: [
    "LightSteelBlue",
    "PowderBlue",
    "LightBlue",
    "SkyBlue",
    "LightSkyBlue"
  ],
  BlueDarks: [
    "DeepSkyBlue",
    "DodgerBlue",
    "CornflowerBlue",
    "SteelBlue",
    "RoyalBlue",
    "Blue",
    "MediumBlue",
    "DarkBlue",
    "Navy",
    "MidnightBlue"
  ],
  PurpleLights: [
    "Lavender",
    "Thistle",
    "Plum",
    "Violet",
    "Orchid"
  ],
  PurpleDarks: [  
    "Fuchsia",
    "Magenta",
    "MediumOrchid",
    "MediumPurple",
    "BlueViolet",
    "DarkViolet",
    "DarkOrchid",
    "DarkMagenta",
    "Purple",
    "Indigo",
    "DarkSlateBlue",
    "SlateBlue",
    "MediumSlateBlue"
  ],
  WhiteLights: [
    "White",
    "Snow",
    "Honeydew",
    "MintCream",
    "Azure",
    "AliceBlue",
    "GhostWhite",
    "WhiteSmoke",
    "Seashell",
    "Beige",
    "OldLace",
    "FloralWhite",
    "Ivory",
    "AntiqueWhite",
    "Linen",
    "LavenderBlush",
    "MistyRose" 
  ],
  GrayBlackLights: [
    "Gainsboro",
    "LightGray",
    "Silver",
    "DarkGray",
    "Gray"
  ],
  GrayBlackDarks: [
    "DimGray",
    "LightSlateGray",
    "SlateGray",
    "DarkSlateGray",
    "Black"
  ]
};

colorsFlat = _.chain(colors).map(function(group) { return group; } ).flatten().value();

function randomColor() {
  return _.sample(colorsFlat);
}

function randomColorPairing() {
  var colorGroup = _.sample(_.keys(colors));
  var textColor = "White";
  if (colorGroup.indexOf("Lights") > -1) textColor = "Black";
  var backgroundColor = _.sample(colors[colorGroup]);
  return {
    backgroundColor: backgroundColor,
    textColor: textColor
  };
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
    return Players.find({}, {sort: {computerName: 1}, fields: { 'computerSecret' : 0}});
  };

  Template.player.events({
    'change input.color, blur input.entry': function (evt) {
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
          alert("Error! See the console for more information. (F12 brings up the console in most browsers)");
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
    },
    'click input.homeDevices' : function(evt, t) {
      var el = $($(evt.target)[0]);      
      var field = el.attr('data-field');      
      var isChecked = evt.target.checked;
      var delta = {};
      delta[field] = isChecked;
      playerUpdateById(this._id, delta);
    },
    'change select.avatars': function(evt) {
      var val = evt.val;      
      playerUpdateById(this._id, {avatarURL: smileyBase + val});
    },
    'change select.grades': function(evt) {
      var val = parseInt(evt.val);
      playerUpdateById(this._id, {grade: val});
    },
    'click button.codeRun': function(evt) {
      var editor = ace.edit("editor");
      var code = editor.getSession().getValue();
      var funScript = "var func = function(players, search, computerNames, firstNames, lastNames, grades, gitHubUsernames, favoriteSubjects, favoriteSubjectsFlat, favoriteColors, backgroundColors, textColors, avatarURLs, apps) {" + code + "}";
      try {
        eval(funScript);
        var allPlayers = Players.find().fetch();
        // Lets break it out into arrays for each property
        var first = allPlayers[0];
        var keys = _.keys(first);
        var data = {};
        _.each(keys, function(key) {
          var vals = _.pluck(allPlayers, key);
          vals = _.reject(vals, function(item) {
            return item === "";
          });
          if (key === 'favoriteSubjects') {
            var newVals = [];
            _.each(vals, function(subjs) {
              var valids = _.reject(subjs, function(subj) {
                return subj === '?';
              });
              newVals.unshift(valids);
            });
            vals = newVals;
            // flatten
            var flatSubjects = _.flatten(vals);
            data['favoriteSubjectsFlat'] = flatSubjects;
          }
          data[key] = vals;
        });
        var search = function() {
          var args = Array.prototype.slice.apply(arguments);
          return Players.find.apply(Players, args);
        }
        func(Players.find().fetch(), search, 
          data.computerName,
          data.firstName,
          data.lastName,
          data.gitHubUsername,
          data.grade,
          data.favoriteSubjects,
          data.favoriteSubjectsFlat,
          data.favoriteColor,
          data.backgroundColor,
          data.textColor,
          data.avatarURL,
          data.apps
        );
      } catch (ex) {
        alert("Error trying to run your code!\n\n" + ex);
      }
    },
    'blur input.avatarCustom': function(evt) {
      var el = $($(evt.target)[0]);
      if (el.val() === null || el.val() === "") {
        return;
      }
      var url = el.val();
      playerUpdateById(this._id, {avatarURL: url});
    },
    'click button.avatarCustom': function(evt) {

    }
  });

  function withIndex(array, indexDisplayOffset) {
    return _.map(array, function(item, index) {
      var indexDisplay = index + indexDisplayOffset;
      return {index: index, indexDisplay: indexDisplay, val:item};
    });
  }

  function formatAvatar(url) {
    return "<img class='avatar' src='http://icons.iconarchive.com/icons/hopstarter/keriyo-emoticons/96/" + url.text + "' />"
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
    },
    'checked': function(boolValue) {
      return boolValue ? 'checked' : '';
    },
    'altWhenMatch': function(value, matchValue, alt) {
      return value === matchValue ? alt : value;
    }
  });

  Template.avatarsSelect.rendered = function() {
    $(".avatars").select2({
      dropdownCssClass: 'bigrop',
      minimumResultsForSearch: -1,
      formatResult: formatAvatar,
      formatSelection: formatAvatar,
      escapeMarkup: function(m) { return m; }
    });
  };

  Template.avatarsSelect.helpers({
    'avatars': function() {
      return smileys;
    },
    'isSelected': function(avatarURL, item) {
      return avatarURL !== "" && avatarURL.indexOf(item) > -1  ? 'selected' : '';   
    }
  });

  Template.gradeSelect.rendered = function() {
    $(".grades").select2({
      formatResult: function(val) { return "<strong>" + val.text + "</strong>"; },
      formatSelection: function(val) { return "<strong><em>" + val.text + "</em></strong>"; },
      escapeMarkup: function(m) { return m; }
    });
  };

  Template.gradeSelect.helpers({
    'grades': function() {
      return grades;
    },
    'isSelected': function(grade, item) {
      return grade === item ? 'selected' : ''; 
    }    
  });

  Template.aceEditor.rendered = function() {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/javascript");
    editor.setHighlightActiveLine(true);
  };
}

// On server startup, create some players if the database is empty.
if (Meteor.isServer) {
  var colorToHex = Meteor.require("css-color-names");
  var toHex = function(colorName) {
    return colorToHex[colorName.toLowerCase()];
  }
  Meteor.startup(function () {
    ServiceConfiguration.configurations.remove();
    ServiceConfiguration.configurations.insert({
      service: "github",
      clientId: "779f74f814ff4550a285",
      secret: "17b871b227e6452610f153e88e6006a59e4869f1"
    });
    Meteor.methods({
      'seatUnlock': function(computerName, computerSecret) {
        var player = Players.findOne({computerName:computerName, computerSecret: parseInt(computerSecret)});
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

    var computerSecrets = {
      'Clojure' : 91234,
      'Python'  : 12345,
      'Java'    : 67891,
      'Ruby'    : 23456,
      'F#'      : 89123,
      'C'       : 45678,
      'Dart'    : 43798,
      'Scala'   : 13579,
      'BASIC'   : 56789,
      'Pascal'  : 56239,
      'Haskell' : 74183,
      'PERL'    : 24681,
      'JavaScript'   : 92536,
      'CoffeeScript' : 34567,
      'ObjectiveC'   : 78912,
      'Elixir': 98765
    };

    var names = _.keys(computerSecrets);

    console.log(names);

    names = names.sort();    

    var iter = 0;

    function playerCreate(computerName) {
      var favoriteColor = iter % 2 == 0 ? 'LightGray' : 'White';
      var backgroundColor = iter % 2 == 0 ? 'White' : 'LightGray';
      iter++;
      return {
        computerName: computerName,
        computerSecret: computerSecrets[computerName],
        firstName: "",
        lastName: "",
        gitHubUsername: "",
        grade: "",
        favoriteSubjects: ["?", "?", "?", "?", "?"],
        favoriteColor: favoriteColor,
        favoriteColorHex: toHex(favoriteColor),
        backgroundColor: backgroundColor,
        backgroundColorHex : toHex(backgroundColor),
        textColor: 'Black',
        textColorHex: toHex('Black'),
        avatarURL: avatarAsleep,
        hasComputer: false,
        hasInternet: false,
        hasAndroidPhone: false,
        hasIPhone: false,
        hasOtherSmartPhone: false,
        hasTablet: false,
        hasTV: false,
        hasVideoGameConsole: false,
        apps: ["/* Put your app code here! */"]
      }
    }

    for (var i = 0; i < names.length; i++) {
      Players.insert(playerCreate(names[i]));
    }
  });
}