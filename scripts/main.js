import Roller from "./fitdroller.js";
const moduleName = "foundryvtt-cbrpnkroller";

Hooks.once("ready", () => {

});

// getSceneControlButtons
Hooks.on("renderSceneControls", (app, html) => {
  const dice_roller = $('<li class="scene-control" title="CBR+PNK Roller">\
  <svg version="1.0" width="800.000000pt" height="800.000000pt" viewBox="0 0 800.000000 800.000000" preserveAspectRatio="xMidYMid meet" id="svg14" sodipodi:docname="icon.svg" inkscape:version="1.2.2 (732a01da63, 2022-12-09)" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg"><defs id="defs18" /> <sodipodi:namedview id="namedview16" pagecolor="#505050" bordercolor="#eeeeee" borderopacity="1" inkscape:showpageshadow="0" inkscape:pageopacity="0" inkscape:pagecheckerboard="0" inkscape:deskcolor="#505050" inkscape:document-units="pt" showgrid="false" inkscape:zoom="0.939375" inkscape:cx="533.8656" inkscape:cy="533.33333" inkscape:window-width="2560" inkscape:window-height="1377" inkscape:window-x="1912" inkscape:window-y="-8" inkscape:window-maximized="1" inkscape:current-layer="svg14" /> <g transform="matrix(0.00907952,0,0,-0.00907952,0,72.636193)" fill="#000000" stroke="none" id="g12"> <path   d="M 725,7976 C 554,7932 404,7844 275,7715 152,7593 63,7444 20,7289 0,7216 0,7199 0,4005 0,811 0,794 20,721 111,392 384,127 728,32 L 825,5 h 3160 3160 l 97,27 c 355,98 618,361 716,716 l 27,97 v 3160 3160 l -27,97 c -98,355 -370,626 -716,714 l -95,24 H 3981 l -3166,-1 z m 1342,-498 53,-52 v -75 c 0,-101 9,-111 109,-111 h 75 l 53,-52 53,-52 v -75 -75 l -52,-53 -52,-53 h -72 -72 l -51,58 c -50,57 -51,57 -51,126 0,114 29,106 -403,106 -367,0 -371,0 -394,-22 l -23,-21 v -946 -945 l 22,-23 21,-23 h 364 c 437,0 413,-6 413,108 v 76 l 52,53 52,53 h 75 75 l 48,-47 48,-47 v -77 -78 l -52,-50 -53,-51 h -69 c -99,0 -116,-18 -116,-116 v -73 l -52,-50 -53,-51 h -365 -364 l -53,52 -53,52 v 75 c 0,101 -9,111 -109,111 h -75 l -53,52 -53,52 v 950 950 l 52,53 52,53 h 75 c 100,0 111,10 111,102 0,69 0,69 52,129 l 52,59 h 365 365 z m 2300,0 53,-52 v -74 c 0,-97 15,-111 115,-112 h 69 l 53,-52 53,-52 v -370 -370 l -47,-48 -47,-48 h -75 c -63,0 -78,-3 -98,-22 -20,-18 -23,-31 -23,-92 0,-62 3,-73 27,-98 24,-25 33,-28 97,-28 h 70 l 48,-47 48,-47 v -372 -372 l -52,-46 c -52,-45 -54,-46 -122,-46 -58,0 -74,-4 -93,-22 -20,-19 -23,-31 -23,-99 v -77 l -52,-46 -53,-46 h -510 -509 l -53,52 -53,52 v 1234 1234 l 51,59 51,59 h 511 511 z m 2300,0 53,-52 v -77 c 0,-70 2,-78 25,-93 16,-11 47,-16 92,-16 h 67 l 53,-52 53,-52 v -367 -367 l -46,-51 -46,-51 h -76 c -64,0 -79,-3 -99,-22 -20,-18 -23,-31 -23,-92 0,-62 3,-73 27,-98 24,-25 33,-28 97,-28 h 70 l 48,-47 48,-47 v -515 -515 l -47,-48 -47,-48 h -75 -75 l -53,52 -53,52 v 510 c 0,510 0,510 -22,533 l -21,23 h -366 -365 l -36,35 c -36,35 -37,35 -54,16 -17,-19 -17,-21 2,-49 12,-16 28,-35 37,-42 13,-11 15,-74 15,-518 v -506 l -52,-53 -52,-53 h -75 -75 l -48,47 -48,47 v 1244 1244 l 46,54 46,54 h 511 511 z m -2620,-2820 53,-52 v -215 -215 l -37,-38 c -36,-37 -36,-38 -18,-58 l 19,-21 36,36 36,35 h 219 219 l 53,-52 53,-52 v -69 c 0,-67 -1,-69 -47,-123 l -47,-54 h -225 -225 l -36,35 -36,36 -19,-21 c -18,-20 -18,-21 18,-58 l 37,-38 v -213 -212 l -52,-60 -52,-59 h -70 -70 l -53,52 -53,52 v 225 225 l 32,33 c 31,32 31,33 13,53 l -19,21 -36,-36 -36,-35 h -223 -222 l -49,53 c -49,52 -49,52 -50,122 v 69 l 52,53 52,53 h 220 220 l 36,-35 36,-36 19,21 c 18,20 18,21 -13,53 l -32,33 v 224 224 l 47,48 47,48 h 75 75 z m -2050,-1550 53,-52 v -77 c 0,-70 2,-78 25,-93 16,-11 47,-16 92,-16 h 67 l 53,-52 53,-52 v -364 -363 l -47,-55 -47,-54 h -75 c -63,0 -78,-3 -98,-22 -20,-18 -23,-31 -23,-92 v -70 l -52,-53 -52,-53 h -365 -365 l -36,35 -36,35 -22,-23 -22,-23 35,-34 35,-34 V 1081 566 l -47,-48 -47,-48 h -75 -75 l -53,52 -53,52 v 1240 1240 l 52,53 52,53 h 510 510 z m 1430,0 53,-52 v -71 c 0,-68 -1,-73 -35,-105 -40,-39 -42,-50 -17,-73 17,-16 21,-14 57,23 38,39 40,40 111,40 h 72 l 327,-332 326,-331 21,21 22,21 -32,40 -32,40 v 363 362 l 52,53 52,53 h 71 70 l 48,-55 48,-55 1,-1240 2,-1241 -49,-49 -49,-50 h -75 -75 l -48,47 -48,47 v 665 665 l 32,33 c 31,32 31,33 13,53 l -19,21 -36,-36 c -35,-34 -39,-35 -110,-35 h -75 l -327,327 -328,328 -22,-23 -22,-22 37,-38 37,-38 V 1520 576 l -52,-53 -52,-53 h -75 -75 l -53,52 -53,52 v 1234 1234 l 51,59 51,59 h 76 76 z m 2300,0 53,-52 v -365 -365 l -37,-38 -37,-38 22,-23 23,-22 475,478 475,477 h 72 71 l 53,-52 53,-52 v -71 -70 l -440,-440 -439,-439 21,-23 c 21,-23 26,-23 236,-23 h 214 l 54,-46 54,-46 v -76 c 0,-69 3,-79 27,-104 24,-25 33,-28 97,-28 h 70 l 53,-52 53,-52 V 1081 576 l -52,-53 -52,-53 h -75 -75 l -48,47 -48,47 v 517 518 l -26,20 c -25,20 -39,21 -243,21 h -215 l -53,52 -53,52 v 74 c 0,97 -15,111 -115,112 -66,0 -71,2 -107,37 l -38,37 -22,-22 -22,-22 37,-38 37,-38 V 1228 571 l -52,-50 -53,-51 h -73 -73 l -49,46 -50,47 v 1246 1245 l 52,53 52,53 h 70 70 z"   id="path2" /> <path   d="m 3490,7225 c -9,-11 -8,-20 9,-43 11,-16 27,-35 36,-42 13,-11 15,-60 15,-373 v -361 l -37,-38 -37,-38 22,-22 22,-22 38,37 38,37 h 366 367 l 20,26 c 20,26 21,38 21,384 v 357 l -23,21 c -23,22 -27,22 -388,22 h -365 l -34,35 c -37,38 -51,42 -70,20 z"   id="path4" /> <path   d="m 3495,6060 c -17,-19 -17,-21 19,-64 l 36,-44 v -358 -358 l -37,-38 -37,-38 22,-22 22,-22 38,37 38,37 h 365 366 l 21,23 c 22,23 22,27 22,383 v 360 l -28,27 -28,27 h -364 -364 l -36,35 c -36,35 -37,35 -55,15 z"   id="path6" /> <path   d="m 5792,7228 c -19,-19 -15,-32 23,-68 l 35,-34 v -360 -360 l -37,-38 -37,-38 22,-22 22,-22 38,37 38,37 h 365 c 342,0 367,1 382,18 15,17 17,58 17,389 0,346 -1,371 -18,386 -17,15 -58,17 -383,17 h -365 l -34,35 c -36,38 -49,42 -68,23 z"   id="path8" /> <path   d="m 1117,2852 c -16,-17 -15,-20 18,-52 l 35,-34 v -370 -370 l -31,-32 c -27,-28 -29,-34 -17,-53 18,-29 29,-27 68,14 l 34,35 h 366 c 343,0 368,1 383,18 15,17 17,58 17,389 0,346 -1,371 -18,386 -17,15 -58,17 -383,17 h -365 l -34,35 c -39,40 -50,42 -73,17 z"   id="path10" /> </g> </svg>\
  </li>');
  dice_roller.on( "click", async function() {
    await game.cpnkroller.FitDRollerPopup();
  })
  if( isNewerVersion( game.version, '9.220' ) ) {
    html.children().first().append( dice_roller );
  } else {
    html.append( dice_roller );
  }
});

Hooks.once("init", () => {

  game.settings.register( moduleName, "backgroundColor", {
    "name": game.i18n.localize("FitDRoller.backgroundColorName"),
    "hint": game.i18n.localize("FitDRoller.backgroundColorHint"),
    "scope": "world",
    "config": true,
    "choices": {
      "gray": game.i18n.localize("FitDRoller.backgroundColorGray"),
      "black": game.i18n.localize("FitDRoller.backgroundColorBlack")
    },
    "default": "gray",
    "type": String
  });

  game.settings.register( moduleName, "maxDiceCount", {
    "name": game.i18n.localize("FitDRoller.maxDiceCountName"),
    "hint": game.i18n.localize("FitDRoller.maxDiceCountHint"),
    "scope": "world",
    "config": true,
    "default": 10,
    "type": Number
  });

  game.settings.register( moduleName, "defaultDiceCount", {
    "name": game.i18n.localize("FitDRoller.defaultDiceCountName"),
    "hint": game.i18n.localize("FitDRoller.defaultDiceCountHint"),
    "scope": "world",
    "config": true,
    "default": 2,
    "type": Number,
    "onChange": function(){ game.cpnkroller = new Roller(); }
  });

  game.settings.register( moduleName, "defaultGlitchDice", {
    "name": game.i18n.localize("FitDRoller.defaultGlitchDiceName"),
    "hint": game.i18n.localize("FitDRoller.defaultGlitchDiceHint"),
    "scope": "world",
    "config": true,
    "default": 0,
    "type": Number,
    "onChange": function(){ game.cpnkroller = new Roller(); }
  });

  game.settings.register( moduleName, "defaultPosition", {
    "name": game.i18n.localize("FitDRoller.defaultPositionName"),
    "hint": game.i18n.localize("FitDRoller.defaultPositionHint"),
    "scope": "world",
    "config": true,
    "type": String,
    "choices": {
	  "pos0":game.i18n.localize("FitDRoller.Position0"),
      "controlled": game.i18n.localize("FitDRoller.PositionControlled"),
      "risky": game.i18n.localize("FitDRoller.PositionRisky"),
      "desperate": game.i18n.localize("FitDRoller.PositionDesperate"),
	  "pos4": game.i18n.localize("FitDRoller.Position4")
    },
    "default": "risky",
    "onChange": function(){ game.cpnkroller = new Roller(); }
  });

  game.settings.register( moduleName, "defaultEffect", {
    "name": game.i18n.localize("FitDRoller.defaultEffectName"),
    "hint": game.i18n.localize("FitDRoller.defaultEffectHint"),
    "scope": "world",
    "config": true,
    "type": String,
    "choices": {
	  "zero": game.i18n.localize("FitDRoller.EffectZero"),
      "limited": game.i18n.localize("FitDRoller.EffectLimited"),
      "standard": game.i18n.localize("FitDRoller.EffectStandard"),
      "great": game.i18n.localize("FitDRoller.EffectGreat"),
      "extreme": game.i18n.localize("FitDRoller.EffectExtreme"),
    },
    "default": "standard",
    "onChange": function(){ game.cpnkroller = new Roller(); }
  });
/* Disable new interface for now
  game.settings.register( moduleName, "newInterface", {
    "name": game.i18n.localize("FitDRoller.newInterface"),
    "hint": game.i18n.localize("FitDRoller.newInterfaceHint"),
    "scope": "client",
    "config": true,
    "default": false,
    "type": Boolean
  });
*/
  game.keybindings.register( moduleName, "FitDRollerShortcut", {
    name: game.i18n.localize("FitDRoller.FitDRollerShortcutName"),
    hint: game.i18n.localize("FitDRoller.FitDRollerShortcutHint"),
    editable: [{ key: "KeyR", modifiers: []}],
    onDown: async () => {
      await game.cpnkroller.FitDRollerPopup();
    },
    onUp: () => {},
    restricted: false,
    reservedModifiers: [],
    precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL
  });

  game.cpnkroller = new Roller();
});

console.log("CBR+PNK | CBR+PNK Roller loaded");
