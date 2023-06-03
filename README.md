![Compatible with CBR+PNK](images/cbrpnk_compatible_fill.png)

# CBR+PNK Roller

An unofficial dice roller for CBR+PNK in FoundryVTT, based on code by Megastruktur and drewg13<br>

## Usage

Use the FD icon at the bottom of the taskbar.<br>
Pick your dice pool, glitch count, threat, and effect, then roll.<br>

OR

Use the shortcut key to bring up the dialog, set to 'R' by default.

## Settings

There are module settings for controlling:<br>
- the max number of dice<br>
- the default number of dice initially selected<br>
- the default number of dice to set as glitchy<br>
- the default threat initially selected<br>
- the default effect initially selected<br>
- the new GUI interface (currently disabled)<br>

## Macro usage

You can trigger the Dialog using `game.cpnkroller.FitDRollerPopup()`<br>
You can also call the roller directly with `game.cpnkroller.FitDRoller(attribute,dice_amount,position,effect,purpose,glitch)`<br>
`attribute` = can be any string (defaults to "")<br>
`dice` = total number of dice to roll (defaults to 0)<br>
`position` = accepts integers from 0-4 (defaults to Threat 2 if you enter anything else)<br>
`effect` = accepts integers from 0-4 (defaults to Effect 2 if you enter anything else)<br>
`glitch` = number of glitchy dice<br>

## Attribution
This work is based on [Blades in the Dark](http://www.bladesinthedark.com/), product of One Seven Design, developed and authored by John Harper, and licensed for use under the [Creative Commons Attribution 3.0 Unported license](http://creativecommons.org/licenses/by/3.0/).

Published independently under the '[CBR+PNK Compatibility License](https://emanoelmelo.itch.io/cbrpnk-toolkit)' with no association with Emanoel Melo, The Cabinet of Curiosities, Mythworks, or other official publishers of CBR+PNK.

'CBR+PNK' and its associated logos and iconography are copyright Emanoel Melo and are used with permission.
