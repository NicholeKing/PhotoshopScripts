# PhotoshopScripts
A library of scripts I've written to streamline my processes in Photoshop -- more to come as I get ideas
## Adding the Script to Your Photoshop
### Windows
1. Copy the .js file you want to add to Photoshop. (Also accepts .jsx files.)
2. Navigate to your Program Files folder on your computer (go to This PC and select the proper drive, probably the C-drive) and find the Photoshop folder. (Should be inside an Adobe folder.)
3. Navigate into the Presets folder > go into the Scripts folder > paste the file in (you will need to give permission).
4. Start up Photoshop (or restart if you already had it open) and go to File > Scripts and you will see the new script there.

### Mac
1. Copy the .js or .jsx file you want to add to your Scripts.
2. Navigate to your Applications and open the Photoshop folder.
3. Go into the Presets folder > enter the Scripts folder > paste the file in (you will need to give permission).
4. Start up Photoshop (or restart if you already had it open) and go to File > Scripts and you will see the new script there.

## Setting your script as a keyboard shortcut
1. Go to Edit > Keyboard Shortcuts.
2. In the window that will open, click File, scroll down until you see a sub-header for Scripts, you will see your script nested inside. Click on it and you will be able to set a new keyboard shortcut for it (just hit the buttons you want to use as a shortcut, Photoshop will tell you if it's already in use or not).
3. Apply your changes.

# The Scripts

## Expand Fill
Expand fill prompts you for an amount you wish to expand a selection by and then fills that selection with the foreground color. I often use this when coloring in the base of my lineart, and Photoshop doesn't have a hotkey for the expand tool so it used to be so tedious. 

*Requires that you have a selection made in order to work.*

## Quick Expand
That being said, I also wrote a quick script for expanding a selection 1 pixel at a time -- set it to a hotkey to make the process quick

*Requires that you have a selection made in order to work.*

## Fill Path
Fills your working path (made with the pen tool) with the current foreground color -- good for doing fast fills where lineart doesn't exist or doesn't close completely

## Guide Set
Creates guides vertically or horizontally across the entire document based on your direction chosen and a spacing amount (in pixels) you provide upon prompt. 

Ex: Selecting horizontal and a spacing of 120 will create guides horizontally down your document that are spaced 120 pixels apart. Useful for segmenting the document without having to do it by hand. (Also a little simpler to use than the built in guide layout.)

I use this when creating even segments for comic panels

## Add Multiple Layers
Lets you create multiple layers at once and customize a base naming convention to give to the layers. For example, you can create 4 layers named "Color" + "# iteration". 

