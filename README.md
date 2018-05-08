# Cordova Res Generator

Generate icons images, splash screens images (uni color), and prefilled config.xml for cordova projects.
Works for iOS and android. 
Requires imagemagick for the generation.
Requires cordova-plugin-splashscreen plugin in your cordova project.

## Installation and usage

```
1) If you do not have imagemagick, install it
    $ sudo apt update && sudo apt install imagemagick

2) Clone the git and go inside
    $ git clone https://github.com/Vizeer/cordova-res-generator.git && cd cordova-res-generator

3) Run the script (Usage: $ node index [background-color-as-hexcode-for-splash-screens] [icon-base-path])
    $ node index "#513a7a" ./icon-1024.js

4) If you do not have it, install the cordova-plugin-splashscreen in your cordova plugin
    $ cordova plugin install cordova-plugin-splashscreen

5) Replace the res folder inside your cordova project by the generated and fill your config.xml with the platforms tag in the generated config.xml

6) cordova run android && cordova run ios
```