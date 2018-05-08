module.exports = {

    ios: {

        icon: [
            {size: "60x60", filename: "icon-60.png", conf_size: true},
            {size: "120x120", filename: "icon-60-2x.png", conf_size: true},
            {size: "180x180", filename: "icon-60-3x.png", conf_size: true},
            {size: "76x76", filename: "icon-76.png", conf_size: true},
            {size: "152x152", filename: "icon-76-2x.png", conf_size: true},
            {size: "40x40", filename: "icon-40.png", conf_size: true},
            {size: "80x80", filename: "icon-40-2x.png", conf_size: true},
            {size: "57x57", filename: "icon-57.png", conf_size: true},
            {size: "114x114", filename: "icon-57-2x.png", conf_size: true},
            {size: "72x72", filename: "icon-72.png", conf_size: true},
            {size: "144x144", filename: "icon-72-2x.png", conf_size: true},
            {size: "29x29", filename: "icon-29.png", conf_size: true},
            {size: "58x58", filename: "icon-29-2x.png", conf_size: true},
            {size: "50x50", filename: "icon-50.png", conf_size: true},
            {size: "100x100", filename: "icon-50-2x.png", conf_size: true},
            {size: "167x167", filename: "icon-83.5-2x.png", conf_size: true},
            {size: "1024x1024", filename: "store-icon-1024.png", conf_exclude: true},
        ],

        splash: [
            {size: "320x480", filename: "screen-320x480.png", conf_size: true},
            {size: "640x960", filename: "screen-640x960.png", conf_size: true},
            {size: "640x1136", filename: "screen-640x1136.png", conf_size: true},
            {size: "750x1334", filename: "screen-750x1334.png", conf_size: true},
            {size: "1242x2208", filename: "screen-1242x2208.png", conf_size: true},
            {size: "480x320", filename: "screen-480x320.png", conf_size: true},
            {size: "960x640", filename: "screen-960x640.png", conf_size: true},
            {size: "1024x768", filename: "screen-1024x768.png", conf_size: true},
            {size: "768x1024", filename: "screen-768x1024.png", conf_size: true},
            {size: "1536x2048", filename: "screen-1536x2048.png", conf_size: true},
            {size: "2048x1536", filename: "screen-2048x1536.png", conf_size: true},
        ]

    },

    android: {

        icon: [
            {size: "36x36", filename: "icon-36.png", conf_density: "ldpi",},
            {size: "48x48", filename: "icon-48.png", conf_density: "mdpi",},
            {size: "72x72", filename: "icon-72.png", conf_density: "hdpi",},
            {size: "96x96", filename: "icon-96.png", conf_density: "xhdpi",},
            {size: "144x144", filename: "icon-144.png", conf_density: "xxhdpi",},
            {size: "192x192", filename: "icon-192.png", conf_density: "xxxhdpi",},
            {size: "512x512", filename: "store-icon-512.png", conf_exclude: true}
        ],

        splash: [
            {size: "200x320", filename: "screen-200x320.png", conf_density: "ldpi",},
            {size: "320x480", filename: "screen-320x480.png", conf_density: "mdpi",},
            {size: "480x800", filename: "screen-480x800.png", conf_density: "hdpi",},
            {size: "720x1280", filename: "screen-720x1280.png", conf_density: "xhdpi",},
            {size: "320x200", filename: "screen-320x200.png", conf_density: "land-ldpi",},
            {size: "480x320", filename: "screen-480x320.png", conf_density: "land-mdpi",},
            {size: "800x480", filename: "screen-800x480.png", conf_density: "land-hdpi",},
            {size: "1280x720", filename: "screen-1280x720.png", conf_density: "land-xhdpi",},
        ]
    }
};