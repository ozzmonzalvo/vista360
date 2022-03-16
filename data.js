var APP_DATA = {
  "Demoz": "",
  "pitchMin": -0.5,
  "pitchMax": 0.0,
  "yawMin": -0.4,
  "yawMax": 0.4,
  //Zoom
  "vfovMin": 1,
  "vfovMax": 10,

  "scenes": [
    {
      "id": "0-panorama1",
      "name": "panorama1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
          "yaw": -0.0033887537820778135,
     //   "yaw": -5,
        "pitch": -0.0753332254770136,
        "fov": 1.4811428556961166
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Demo ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  },

};
