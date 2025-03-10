import Roller from "./fitdroller.js";
const moduleName = "foundryvtt-cbrpnkroller";

Hooks.once("ready", () => {

});

// getSceneControlButtons
Hooks.on("renderSceneControls", (app, html) => {
  const dice_roller = $('<li class="scene-control" title="CBR+PNK Roller"><svg xmlns="http://www.w3.org/2000/svg" class="svg-icon" viewBox="0 0 72.18 72.18"><polygon points="45.81 22.51 46.72 24.21 46.72 47.97 45.77 49.72 56.07 49.72 56.92 47.87 56.92 24.36 55.97 22.51 45.81 22.51" fill="f0f0e0"/><path d="M-235.33,12.83h-62a5.07,5.07,0,0,0-5.07,5.06V79.94A5.07,5.07,0,0,0-297.38,85h62a5.06,5.06,0,0,0,5.06-5.07v-62A5.06,5.06,0,0,0-235.33,12.83Zm-34.15,25.66-5.45-3.15H-285l.9,1.7v7.85h3.4l5.9-3.35v12.6l-5.95-3.3h-3.35v11.9l3.1,5.71h-14.31l3.1-5.71V34.89l-3.1-5.5h25.86Zm32.1,24-3.05,5.91h-26.5l3.1-5.36V34.89l-3.1-5.5h26.5l3.05,5.9Z" transform="translate(302.45 -12.83)" fill="f0f0e0"/></svg></li>');
  dice_roller.on( "click", async function() {
    await game.cpnkroller.FitDRollerPopup();
  })
  if( isNewerVersion( game.version, '9.220' ) ) {
    html.children().first().append( dice_roller );
  } else {
    html.append( dice_roller );
  }
});

Hooks.on("renderSidebarTab", (app, html, data) => {
  html.find(".chat-control-icon").click(async (event) => {
    await game.cpnkroller.FitDRollerPopup();
  });
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
    "default": 6,
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
