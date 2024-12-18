var APP_DATA = {
  "scenes": [
    {
      "id": "0-exterior-entry",
      "name": "Exterior Entry",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.18130407011091165,
        "pitch": 0.08903501119326407,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.1860828298887398,
          "pitch": 0.1785447920715395,
          "rotation": 0,
          "target": "1-interior-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-interior-entry",
      "name": "Interior Entry",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -3.0986092865205777,
        "pitch": 0.010968547189104783,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -3.1382478962995677,
          "pitch": 0.09284869800090689,
          "rotation": 0,
          "target": "0-exterior-entry"
        },
        {
          "yaw": 1.3879656880287765,
          "pitch": 0.05659696035308848,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -1.2842145336454784,
          "pitch": 0.041688100208769896,
          "rotation": 0,
          "target": "9-hallway-1f"
        },
        {
          "yaw": 2.6214059664210323,
          "pitch": -0.30945820344922836,
          "rotation": 0,
          "target": "12-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kitchen",
      "name": "Kitchen",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.947557624030929,
        "pitch": 0.015545875671609366,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -1.53016579542399,
          "pitch": 0.040364385531002966,
          "rotation": 0,
          "target": "1-interior-entry"
        },
        {
          "yaw": 1.1978460674535203,
          "pitch": 0.029820144968709883,
          "rotation": 0,
          "target": "3-living-room-1"
        },
        {
          "yaw": 2.2987479701413474,
          "pitch": 0.04351095835384555,
          "rotation": 0,
          "target": "4-living-room-2"
        },
        {
          "yaw": 1.7562009005210797,
          "pitch": 0.024537117175810863,
          "rotation": 0,
          "target": "5-living-room-3"
        },
        {
          "yaw": 0.5752687580127152,
          "pitch": 0.05461157620377932,
          "rotation": 0,
          "target": "6-patio-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-living-room-1",
      "name": "Living Room 1",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -2.985737229898902,
        "pitch": 0.03882569510300371,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -1.8974163080595492,
          "pitch": 0.0571658333308136,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -2.9660910431582366,
          "pitch": 0.03788531766549674,
          "rotation": 0,
          "target": "4-living-room-2"
        },
        {
          "yaw": 2.542870662248273,
          "pitch": 0.03279194372824534,
          "rotation": 0,
          "target": "5-living-room-3"
        },
        {
          "yaw": -0.34960352834024633,
          "pitch": 0.062310954451778144,
          "rotation": 0,
          "target": "6-patio-1"
        },
        {
          "yaw": -2.1139131786600025,
          "pitch": -0.7064083381174768,
          "rotation": 0,
          "target": "13-interior-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-living-room-2",
      "name": "Living Room 2",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.19135155253682257,
        "pitch": 0.003886444226722574,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 0.17786985953939194,
          "pitch": 0.06653695057487496,
          "rotation": 0,
          "target": "3-living-room-1"
        },
        {
          "yaw": -1.0711041894111695,
          "pitch": 0.05460842797608123,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": 1.4481623772139507,
          "pitch": 0.04535787412813974,
          "rotation": 0,
          "target": "5-living-room-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-living-room-3",
      "name": "Living Room 3",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.6155402221642028,
        "pitch": 0.01554577690686898,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -2.132938968363142,
          "pitch": 0.06533743433490002,
          "rotation": 0,
          "target": "4-living-room-2"
        },
        {
          "yaw": -0.6361323396278245,
          "pitch": 0.06103804588302353,
          "rotation": 0,
          "target": "3-living-room-1"
        },
        {
          "yaw": -1.3112449274292182,
          "pitch": 0.03216992137931385,
          "rotation": 0,
          "target": "2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-patio-1",
      "name": "Patio 1",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -2.135208383394513,
        "pitch": 0.0004981929362770643,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 2.5672440874781373,
          "pitch": 0.04874273630831816,
          "rotation": 0,
          "target": "3-living-room-1"
        },
        {
          "yaw": -2.6382707738492126,
          "pitch": 0.04138427271131917,
          "rotation": 0,
          "target": "2-kitchen"
        },
        {
          "yaw": -1.9092426848860278,
          "pitch": 0.011227060179674453,
          "rotation": 0,
          "target": "7-patio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-patio-2",
      "name": "Patio 2",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.4327783941157115,
        "pitch": -0.01813673972468166,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.5335297645067554,
          "pitch": 0.016442242509747018,
          "rotation": 0,
          "target": "6-patio-1"
        },
        {
          "yaw": -1.550267554500202,
          "pitch": 0.019500165864972274,
          "rotation": 0,
          "target": "8-patio-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-patio-3",
      "name": "Patio 3",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.8816125436252342,
        "pitch": 0.1075249569392085,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -1.5838271881369153,
          "pitch": 0.03567999910518793,
          "rotation": 0,
          "target": "7-patio-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-hallway-1f",
      "name": "Hallway 1F",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 2.354094132044917,
        "pitch": 0.014571284856582878,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.6015966012643537,
          "pitch": 0.03358991015817736,
          "rotation": 0,
          "target": "1-interior-entry"
        },
        {
          "yaw": -3.0650968975753425,
          "pitch": 0.03178112374908082,
          "rotation": 0,
          "target": "10-bathroom-1f"
        },
        {
          "yaw": -1.6241254965069665,
          "pitch": 0.041818244687647166,
          "rotation": 0,
          "target": "11-bedroom-1f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bathroom-1f",
      "name": "Bathroom 1F",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 1.5432218551542745,
        "pitch": 0.04919482973842548,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 0.05542154861928239,
          "pitch": 0.05908672826889472,
          "rotation": 0,
          "target": "9-hallway-1f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bedroom-1f",
      "name": "Bedroom 1F",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -3.0408539800697145,
        "pitch": 0.02331866536031768,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.246477387216844,
          "pitch": 0.07558348143820126,
          "rotation": 0,
          "target": "9-hallway-1f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-stairs",
      "name": "Stairs",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.38555909839509184,
        "pitch": 0.2681664202081535,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.6269829648758254,
          "pitch": 0.4878193683637999,
          "rotation": 0,
          "target": "1-interior-entry"
        },
        {
          "yaw": -0.2215769910834844,
          "pitch": -0.21442894581709737,
          "rotation": 0,
          "target": "14-2nd-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-interior-balcony",
      "name": "Interior Balcony",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 2.286020960446196,
        "pitch": 0.2192409130312818,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 0.911473243004643,
          "pitch": 0.8031696283489982,
          "rotation": 0,
          "target": "3-living-room-1"
        },
        {
          "yaw": -1.2478932929938047,
          "pitch": 0.026588968880924213,
          "rotation": 0,
          "target": "14-2nd-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-2nd-floor",
      "name": "2nd Floor",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 2.7415703420999806,
        "pitch": 0.04129756724924505,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 2.9441743042870154,
          "pitch": 0.4445098838901558,
          "rotation": 0,
          "target": "12-stairs"
        },
        {
          "yaw": 1.541487058865541,
          "pitch": 0.0009500654632113026,
          "rotation": 0,
          "target": "13-interior-balcony"
        },
        {
          "yaw": -1.4009547877587174,
          "pitch": 0.06268154950877403,
          "rotation": 0,
          "target": "15-hallway-2f"
        },
        {
          "yaw": -0.8411276465677808,
          "pitch": 0.06930094999653491,
          "rotation": 0,
          "target": "16-office-2f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-hallway-2f",
      "name": "Hallway 2F",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.5177120233633445,
        "pitch": 0.02355039224010369,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -1.517840121824264,
          "pitch": 0.04021923963274432,
          "rotation": 0,
          "target": "14-2nd-floor"
        },
        {
          "yaw": -2.0124748221906614,
          "pitch": 0.052040486016384335,
          "rotation": 0,
          "target": "16-office-2f"
        },
        {
          "yaw": 0.05023721798534808,
          "pitch": 0.06631495861201486,
          "rotation": 0,
          "target": "17-bathroom-2f"
        },
        {
          "yaw": 1.5928875585849367,
          "pitch": 0.06759753079198028,
          "rotation": 0,
          "target": "18-bedroom-2f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-office-2f",
      "name": "Office 2F",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -2.712869538890107,
        "pitch": 0.08970880175110096,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -0.4546822747207937,
          "pitch": -0.0036369152081441314,
          "rotation": 0,
          "target": "14-2nd-floor"
        },
        {
          "yaw": 0.4318638380094306,
          "pitch": 0.008089765881596378,
          "rotation": 0,
          "target": "15-hallway-2f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-bathroom-2f",
      "name": "Bathroom 2F",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 2.2554504219839764,
        "pitch": 0.01960796526982378,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -3.0482386363490015,
          "pitch": 0.023963341109510594,
          "rotation": 0,
          "target": "15-hallway-2f"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-bedroom-2f",
      "name": "Bedroom 2F",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.05062157336927342,
        "pitch": -0.014850024542528928,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": -1.5749393868722734,
          "pitch": 0.02962455984252088,
          "rotation": 0,
          "target": "15-hallway-2f"
        },
        {
          "yaw": 1.6437533446576609,
          "pitch": 0.11838246311647893,
          "rotation": 0,
          "target": "19-exterior-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-exterior-balcony",
      "name": "Exterior Balcony",
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
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -3.091203075439111,
        "pitch": 0.04316618702708652,
        "fov": 1.4319388366908425
      },
      "linkHotspots": [
        {
          "yaw": 1.547064466591479,
          "pitch": 0.07817972922637395,
          "rotation": 0,
          "target": "18-bedroom-2f"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
