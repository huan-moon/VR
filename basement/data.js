var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "地下室入口",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "yaw": 2.091776776550213,
        "pitch": 0.2031807634193754,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 1.8864076222864181,
          "pitch": 0.3385162136381865,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.5553442853958135,
          "pitch": -0.015626106218689984,
          "title": "圖書館的大門",
          "text": ""
        },
        {
          "yaw": -1.4319054861678762,
          "pitch": -0.033842273013933166,
          "title": "永安市場捷運站",
          "text": ""
        }
      ]
    },
    {
      "id": "1-",
      "name": "圖書館地下室",
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
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0.16562818411782843,
        "pitch": 0.04046703024051723,
        "fov": 1.2828048894984105
      },
      "linkHotspots": [
        {
          "yaw": 0.16167566626634766,
          "pitch": 0.1370931164306377,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.4883611871769844,
          "pitch": 0.10482134356405481,
          "title": "活動室",
          "text": "可以登記舉辦活動"
        },
        {
          "yaw": -1.448193795368093,
          "pitch": 0.06681346443102854,
          "title": "廁所",
          "text": "&lt;---女廁<div>男廁---&gt;</div>"
        },
        {
          "yaw": -0.6835748343893648,
          "pitch": 0.07117634395044803,
          "title": "布納咖啡館",
          "text": "新開幕"
        }
      ]
    }
  ],
  "name": "圖書館地下室",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
