export default class Roller {
  /**
  * Create popup for roller
  * @return none
  */
  constructor() {
    this.moduleName = "foundryvtt-cbrpnkroller";
    this.defaultDice = game.settings.get( this.moduleName, "defaultDiceCount");
	  this.defaultGlitch = game.settings.get( this.moduleName, "defaultGlitchDice");
    this.defaultPosition = game.settings.get( this.moduleName, "defaultPosition");
    this.defaultEffect = game.settings.get( this.moduleName, "defaultEffect");
  }

  async FitDRollerPopup({dice=this.defaultDice, glitch=this.defaultGlitch}={}) {

    const maxDice = game.settings.get( this.moduleName, "maxDiceCount" );
    const newInterface = false //game.settings.get( this.moduleName, "newInterface" ); //force disable the new interface

    if( !newInterface ) {
      new Dialog( {
        title: `${ game.i18n.localize( 'FitDRoller.RollTitle' ) }`,
        content: `
        <div class="fitd-dialog">  
        <h2>${ game.i18n.localize( 'FitDRoller.Roll' ) }</h2>
          <form>
            <div class="form-group">
              <label for="roll-purpose">${game.i18n.localize("FitDRoller.RollPurpose")}:</label>
              <input id="roll-purpose" type="text" name="purpose">
            </div>
            <div class="form-group">
              <label>${ game.i18n.localize( 'FitDRoller.RollNumberOfDice' ) }:</label>
              <select id="dice" name="dice">
                ${ Array( maxDice + 1 ).fill().map( ( item, i ) => `<option value="${ i }">${ i }d</option>` ).join( '' ) }
              </select>
              <script>
                $('#dice option[value="' + ${dice} + '"]').prop("selected", "selected");
              </script>
            </div>
			<div class="form-group">
              <label>${ game.i18n.localize( 'FitDRoller.RollNumberOfGlitchDice' ) }:</label>
              <select id="glitch" name="glitch">
                ${ Array( maxDice + 1 ).fill().map( ( item, i ) => `<option value="${ i }">${ i }d</option>` ).join( '' ) }
              </select>
              <script>
                $('#glitch option[value="' + ${glitch} + '"]').prop("selected", "selected");
              </script>
            </div>
            <div class="form-group">
              <label>${ game.i18n.localize( 'FitDRoller.Position' ) }:</label>
              <select id="pos" name="pos">
				<option value="pos0">${ game.i18n.localize( 'FitDRoller.Position0' ) }</option>
                <option value="controlled">${ game.i18n.localize( 'FitDRoller.PositionControlled' ) }</option>
                <option value="risky">${ game.i18n.localize( 'FitDRoller.PositionRisky' ) }</option>
                <option value="desperate">${ game.i18n.localize( 'FitDRoller.PositionDesperate' ) }</option>
				<option value="pos4">${ game.i18n.localize( 'FitDRoller.Position4' ) }</option>
              </select>
              <script>
                $('#pos option[value="' + game.cpnkroller.defaultPosition + '"]').prop("selected", "selected");
              </script>
            </div>
            <div class="form-group">
              <label>${ game.i18n.localize( 'FitDRoller.Effect' ) }:</label>
              <select id="fx" name="fx">
                <option value="zero">${ game.i18n.localize( 'FitDRoller.EffectZero' ) }</option>
                <option value="limited">${ game.i18n.localize( 'FitDRoller.EffectLimited' ) }</option>
                <option value="standard">${ game.i18n.localize( 'FitDRoller.EffectStandard' ) }</option>
                <option value="great">${ game.i18n.localize( 'FitDRoller.EffectGreat' ) }</option>
                <option value="extreme">${ game.i18n.localize( 'FitDRoller.EffectExtreme' ) }</option>
              </select>
              <script>$('#fx option[value="' + game.cpnkroller.defaultEffect + '"]').prop("selected", "selected");</script>
            </div>
          </form>
          </div>
        `,
        buttons: {
          action: {
            icon: "<i class='fas fa-running'></i>",
            label: game.i18n.localize( 'FitDRoller.Action' ),
            callback: async( html ) => {
              const dice_amount = parseInt( html.find( '[name="dice"]' )[0].value );
			        const glitch_amount = parseInt( html.find( '[name="glitch"]' )[0].value );
              const position = html.find( '[name="pos"]' )[0].value;
              const effect = html.find( '[name="fx"]' )[0].value;
              const purpose = html.find( '[name="purpose"]' )[0].value;
              await this.FitDRoller( {dice_amount:dice_amount, position:position, effect:effect, purpose:purpose, glitch:glitch_amount });
            }
          },
          fortune: {
            icon: "<i class='fas fa-coins'></i>",
            label: game.i18n.localize( 'FitDRoller.Fortune' ),
            callback: async( html ) => {
              const dice_amount = parseInt( html.find( '[name="dice"]' )[0].value );
              const glitch_amount = parseInt( html.find( '[name="glitch"]' )[0].value );
			        const purpose = html.find( '[name="purpose"]' )[0].value;
              await this.FitDRoller( {attribute:"fortune", dice_amount:dice_amount, purpose:purpose,glitch:glitch_amount });
            }
          },
          no: {
            icon: "<i class='fas fa-times'></i>",
            label: game.i18n.localize( 'FitDRoller.Close' ),
          },
        },
        default: "action",
      } ).render( true , { width: 475} );
    } /* else {
      let htmlContent = await renderTemplate( "modules/" + this.moduleName + "/templates/roll-dialog.html", {} );
      // hacky as hell, but using jQuery in the html doesn't change with the setting
      let dice = this.defaultDice > 6 ? 6 : this.defaultDice;
      htmlContent = new DOMParser().parseFromString(htmlContent, "text/html");
      htmlContent.getElementById( dice + "d" ).setAttribute("checked", "");
      htmlContent = htmlContent.querySelector("form").parentElement.innerHTML;

      new Dialog( {
        title: `${ game.i18n.localize( 'FitDRoller.RollTitle' ) }`,
        content: htmlContent,
        buttons: {},
        render: ( [ html ] ) => {
          html.addEventListener( "click", async( { target } ) => {
            const buttonValue = target.value;
            const numberOfDice = parseInt( target.closest( "form" ).querySelector( "input[name='dice']:checked" ).value );
            const purpose = target.closest( "form" ).querySelector( "input[name='purpose']" ).value
            if( target.matches( ".fortune-roll" ) ){
              await this.FitDRoller( "fortune", numberOfDice, "", "", purpose );
            }
            if( !target.matches( ".rollButton" ) ) return;

            let position;
            let effect;
            switch( buttonValue ) {
              case 'bt01':
                position = 'controlled';
                effect = 'zero';
                break;
              case 'bt02':
                position = 'controlled';
                effect = 'limited';
                break;
              case 'bt03':
                position = 'controlled';
                effect = 'standard';
                break;
              case 'bt04':
                position = 'controlled';
                effect = 'great';
                break;
              case 'bt05':
                position = 'controlled';
                effect = 'extreme';
                break;
              case 'bt06':
                position = 'risky';
                effect = 'zero';
                break;
              case 'bt07':
                position = 'risky';
                effect = 'limited';
                break;
              case 'bt08':
                position = 'risky';
                effect = 'standard';
                break;
              case 'bt09':
                position = 'risky';
                effect = 'great';
                break;
              case 'bt10':
                position = 'risky';
                effect = 'extreme';
                break;
              case 'bt11':
                position = 'desperate';
                effect = 'zero';
                break;
              case 'bt12':
                position = 'desperate';
                effect = 'limited';
                break;
              case 'bt13':
                position = 'desperate';
                effect = 'standard';
                break;
              case 'bt14':
                position = 'desperate';
                effect = 'great';
                break;
              case 'bt15':
                position = 'desperate';
                effect = 'extreme';
                break;
              default:
                console.log( "error 666!" );
            }

            await this.FitDRoller( "", numberOfDice, position, effect, purpose );
          } )
        }
      } ).render( true );
    } */
  }


  /**
   * Roll Dice.
   * @param {string} attribute arbitrary label for the roll
   * @param {int} dice_amount number of dice to roll
   * @param {string} position position
   * @param {string} effect effect
   * @param {string} purpose purpose
   * @param {int} glitch number of glitch dice
   */
  async FitDRoller({attribute = "", dice_amount = this.defaultDice, position = this.defaultPosition, effect = this.defaultEffect, purpose = "", glitch=this.defaultGlitch} = {} ){
    let versionParts;
    if( game.version ) {
      versionParts = game.version.split( '.' );
      game.majorVersion = parseInt( versionParts[0] );
      game.minorVersion = parseInt( versionParts[1] );
    } else {
      versionParts = game.data.version.split( '.' );
      game.majorVersion = parseInt( versionParts[1] );
      game.minorVersion = parseInt( versionParts[2] );
    }

    let zeromode = false;
    if (dice_amount < 0) { dice_amount = 0; }
    if (dice_amount === 0) { zeromode = true; dice_amount = 2; }

    const r = new Roll(`${dice_amount}d6`, {});

    if (game.majorVersion > 7) {
      await r.evaluate({async: true});
    } else {
      r.roll();
    }
    return await this.showChatRollMessage( r, zeromode, attribute, position, effect, purpose, glitch );
  }

  /**
   * Shows Chat message.
   *
   * @param {Roll} r array of rolls
   * @param {Boolean} zeromode whether to treat as if 0d
   * @param {string} attribute arbitrary label for the roll
   * @param {string} position position
   * @param {string} effect effect
   * @param {string} purpose purpose
   * @param {int} glitch number of glitch dice
   */
  async showChatRollMessage(r, zeromode, attribute = "", position = "", effect = "", purpose = "", glitch = 0) {
    let versionParts;
    if( game.version ) {
      versionParts = game.version.split( '.' );
      game.majorVersion = parseInt( versionParts[0] );
      game.minorVersion = parseInt( versionParts[1] );
    } else {
      versionParts = game.data.version.split( '.' );
      game.majorVersion = parseInt( versionParts[1] );
      game.minorVersion = parseInt( versionParts[2] );
    }

    const speaker = ChatMessage.getSpeaker();
    let rolls = [];

    rolls = (r.terms)[0].results;

    // Retrieve Roll status.
    let roll_status;
    if( attribute === "fortune" ) {
      roll_status = this.getFitDFortuneRollStatus( rolls, zeromode );
    } else {
      if( attribute === "" ){ attribute = "action"; }
      roll_status = this.getFitDActionRollStatus( rolls, zeromode );
    }

    if( effect === "zero" ){ roll_status = "zero"; }
	
	// Retrieve glitch result
	let glitches = [];
	let glitch_status;
	glitch_status = this.getGlitchStatus(rolls, glitch);
	
	if (glitch > 0){
		if (glitch > rolls.length){
			glitch = rolls.length;
		}
		glitches = rolls.splice(-glitch);
	}
	
    let color = game.settings.get(this.moduleName, "backgroundColor");

    let position_localize = '';
    switch (position){
      case 'pos0':
	  case 0:
        position_localize = 'FitDRoller.Position0';
        break;
	  case 'controlled':
	  case 1:
        position_localize = 'FitDRoller.PositionControlled';
        break;
      case 'desperate':
	  case 3:
        position_localize = 'FitDRoller.PositionDesperate';
        break;
	  case 'pos4':
	  case 4:
        position_localize = 'FitDRoller.Position4';
        break;
      case 'risky':
	  case 2:
      default:
        position_localize = 'FitDRoller.PositionRisky';
    }

    let effect_localize = '';
    switch (effect)
    {
      case 'zero':
	  case 0:
        effect_localize = 'FitDRoller.EffectZero';
        break;
      case 'limited':
	  case 1:
        effect_localize = 'FitDRoller.EffectLimited';
        break;
      case 'great':
	  case 3:
        effect_localize = 'FitDRoller.EffectGreat';
        break;
      case 'extreme':
	  case 4:
        effect_localize = 'FitDRoller.EffectExtreme';
        break;
      case 'standard':
	  case 2:
      default:
        effect_localize = 'FitDRoller.EffectStandard';
    }
    const result = await renderTemplate("modules/" + this.moduleName + "/templates/fitd-roll.html", { rolls, roll_status, attribute, position, position_localize, effect, effect_localize, zeromode, color, purpose, glitches, glitch_status});

    const messageData = {
      speaker,
      content: result,
      type: CONST.CHAT_MESSAGE_TYPES.ROLL,
      roll: r
    };
    if (game.majorVersion > 7) {
      return CONFIG.ChatMessage.documentClass.create(messageData, {});
    } else {
      return CONFIG.ChatMessage.entityClass.create(messageData, {});
    }
  }

  /**
   *  Get status of the Roll.
   *  - failure
   *  - partial-success
   *  - success
   *  - critical-success
   * @param {Array} rolls results of dice rolls
   * @param {Boolean} zeromode whether to treat as if 0d
   * @returns {string} success/failure status of roll
   */
  getFitDActionRollStatus(rolls, zeromode = false) {

    let sorted_rolls = [];
    // Sort roll values from lowest to highest.
    sorted_rolls = rolls.map((i) => i.result).sort();

    let roll_status = "failure";

    
    let use_die;
    let prev_use_die = false;

    if (zeromode){
      use_die = sorted_rolls[0];
    } else {
      use_die = sorted_rolls[sorted_rolls.length - 1];

      if (sorted_rolls.length - 2 >= 0){
        prev_use_die = sorted_rolls[sorted_rolls.length - 2];
      }
    }

    // 1,2,3 = failure
    if (use_die <= 3){
      roll_status = "failure";
      // if 6 - check the prev highest one.
    } else if (use_die === 6){
      // 6,6 - critical success
      if (prev_use_die && prev_use_die === 6){
        roll_status = "critical-success";
      } else {
        // 6 - success
        roll_status = "success";
      }
    } else {
        // else (4,5) = partial success
        roll_status = "partial-success";
    }
    return roll_status;
  }

  getFitDFortuneRollStatus(rolls, zeromode = false) {
    let sorted_rolls = rolls.map(i => i.result).sort();
    let roll_status;
    let use_die;
    let prev_use_die;

    if (zeromode) {
      use_die = sorted_rolls[0];
    } else {
      use_die = sorted_rolls[sorted_rolls.length - 1];
      if (sorted_rolls.length - 2 >= 0) {
        prev_use_die = sorted_rolls[sorted_rolls.length - 2]
      }
    }

    // 1,2,3 = failure
    if (use_die <= 3) {
      roll_status = "poor";
    } else if (use_die === 6) {
      // 6,6 - critical success
      if (prev_use_die && prev_use_die === 6) {
        roll_status = "great";
      } else {
        roll_status = "standard";
      }
    } else {
      roll_status = "limited";
    }

    return roll_status;
  }

  /**
   *  Get glitch result of the Roll.
   *  - no-resist
   *  - resist
   *  - empty string signifies no glitch
   * @param {Array} rolls results of dice rolls
   * @param {int} glitchDice number of glitch dice
   * @returns {string} glitch status of roll
   */
  getGlitchStatus(rolls, glitchDice = 0) {
	let glitch_rolls = [];
	let glitch_status = "";
	if (glitchDice <= 0){
		glitch_status = "";
		return glitch_status;
	} else if (glitchDice >= rolls.length){
		glitch_rolls = rolls.slice();
	} else {
		glitch_rolls = rolls.slice(-glitchDice); //always look at the last dice for glitches
	}
	
    let sorted_rolls = [];
    // Sort glitch values from lowest to highest.
    sorted_rolls = glitch_rolls.map((i) => i.result).sort();
    
    let use_die;
	use_die = sorted_rolls[0]; //take worst result
	
	if (use_die <= 3){
		glitch_status = "no-resist";
	} else if (use_die === 6){
		glitch_status = "";
	} else {
		glitch_status = "resist";
	}
    return glitch_status;
  }

}

