# PhotoshopScripts
A library of scripts I've written to streamline my processes in Photoshop -- more to come as I get ideas
## Adding the Script to Your Photoshop
### Windows
Copy the .js file you want to add to Photoshop. (Also accepts .jsx files.)

Navigate to your Program Files folder on your computer (go to This PC and select the proper drive, probably the C-drive) and find the Photoshop folder. (Should be inside an Adobe folder.)

Navigate into the Presets folder > go into the Scripts folder > paste the file in (you will need to give permission).

Start up Photoshop (or restart if you already had it open) and go to File > Scripts and you will see the new script there.

### Mac
Copy the .js or .jsx file you want to add to your Scripts.

Navigate to your Applications and open the Photoshop folder.

Go into the Presets folder > enter the Scripts folder > paste the file in (you will need to give permission).

Start up Photoshop (or restart if you already had it open) and go to File > Scripts and you will see the new script there.

## Setting your script as a keyboard shortcut
Go to Edit > Keyboard Shortcuts.

In the window that will open, click File, scroll down until you see a sub-header for Scripts, you will see your script nested inside. Click on it and you will be able to set a new keyboard shortcut for it (just hit the buttons you want to use as a shortcut, Photoshop will tell you if it's already in use or not).

Apply your changes.

# The Scripts

## Expand Fill
Expand fill prompts you for an amount you wish to expand a selection by and then fills that selection with the foreground color. I often use this when coloring in the base of my lineart, and Photoshop doesn't have a hotkey for the expand tool so it used to be so tedious. 

*Requires that you have a selection made in order to work.*

## Guide Set
Creates guides vertically or horizontally across the entire document based on your direction chosen and a spacing amount (in pixels) you provide upon prompt. 

Ex: Selecting horizontal and a spacing of 120 will create guides horizontally down your document that are spaced 120 pixels apart. Useful for segmenting the document without having to do it by hand. (Also a little simpler to use than the built in guide layout.)

