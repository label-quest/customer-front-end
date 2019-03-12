import { render } from 'react-dom'
import React from 'react'
import { ResponsiveLine } from '@nivo/line'

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const CustomerLineStats = props => {
    return (
    <div style={styles}>
      <h2>Line Stats {"\u2728"}</h2>
      <div style={{ height: 400 }}>
        <ResponsiveLine
            data={[
                {
                  "id": "japan",
                  "color": "hsl(356, 70%, 50%)",
                  "data": [
                    {
                      "x": "plane",
                      "y": 42
                    },
                    {
                      "x": "helicopter",
                      "y": 143
                    },
                    {
                      "x": "boat",
                      "y": 279
                    },
                    {
                      "x": "train",
                      "y": 271
                    },
                    {
                      "x": "subway",
                      "y": 241
                    },
                    {
                      "x": "bus",
                      "y": 160
                    },
                    {
                      "x": "car",
                      "y": 18
                    },
                    {
                      "x": "moto",
                      "y": 105
                    },
                    {
                      "x": "bicycle",
                      "y": 177
                    },
                    {
                      "x": "others",
                      "y": 292
                    }
                  ]
                },
                {
                  "id": "france",
                  "color": "hsl(346, 70%, 50%)",
                  "data": [
                    {
                      "x": "plane",
                      "y": 17
                    },
                    {
                      "x": "helicopter",
                      "y": 239
                    },
                    {
                      "x": "boat",
                      "y": 152
                    },
                    {
                      "x": "train",
                      "y": 50
                    },
                    {
                      "x": "subway",
                      "y": 249
                    },
                    {
                      "x": "bus",
                      "y": 256
                    },
                    {
                      "x": "car",
                      "y": 48
                    },
                    {
                      "x": "moto",
                      "y": 144
                    },
                    {
                      "x": "bicycle",
                      "y": 155
                    },
                    {
                      "x": "others",
                      "y": 4
                    }
                  ]
                },
                {
                  "id": "us",
                  "color": "hsl(49, 70%, 50%)",
                  "data": [
                    {
                      "x": "plane",
                      "y": 244
                    },
                    {
                      "x": "helicopter",
                      "y": 292
                    },
                    {
                      "x": "boat",
                      "y": 236
                    },
                    {
                      "x": "train",
                      "y": 68
                    },
                    {
                      "x": "subway",
                      "y": 193
                    },
                    {
                      "x": "bus",
                      "y": 215
                    },
                    {
                      "x": "car",
                      "y": 175
                    },
                    {
                      "x": "moto",
                      "y": 287
                    },
                    {
                      "x": "bicycle",
                      "y": 59
                    },
                    {
                      "x": "others",
                      "y": 95
                    }
                  ]
                },
                {
                  "id": "germany",
                  "color": "hsl(26, 70%, 50%)",
                  "data": [
                    {
                      "x": "plane",
                      "y": 37
                    },
                    {
                      "x": "helicopter",
                      "y": 94
                    },
                    {
                      "x": "boat",
                      "y": 54
                    },
                    {
                      "x": "train",
                      "y": 252
                    },
                    {
                      "x": "subway",
                      "y": 105
                    },
                    {
                      "x": "bus",
                      "y": 188
                    },
                    {
                      "x": "car",
                      "y": 223
                    },
                    {
                      "x": "moto",
                      "y": 15
                    },
                    {
                      "x": "bicycle",
                      "y": 24
                    },
                    {
                      "x": "others",
                      "y": 7
                    }
                  ]
                },
                {
                  "id": "norway",
                  "color": "hsl(107, 70%, 50%)",
                  "data": [
                    {
                      "x": "plane",
                      "y": 196
                    },
                    {
                      "x": "helicopter",
                      "y": 106
                    },
                    {
                      "x": "boat",
                      "y": 17
                    },
                    {
                      "x": "train",
                      "y": 85
                    },
                    {
                      "x": "subway",
                      "y": 222
                    },
                    {
                      "x": "bus",
                      "y": 281
                    },
                    {
                      "x": "car",
                      "y": 138
                    },
                    {
                      "x": "moto",
                      "y": 24
                    },
                    {
                      "x": "bicycle",
                      "y": 152
                    },
                    {
                      "x": "others",
                      "y": 162
                    }
                  ]
                }
              ]}
            margin={{
                "top": 50,
                "right": 110,
                "bottom": 50,
                "left": 60
            }}
            xScale={{
                "type": "point"
            }}
            yScale={{
                "type": "linear",
                "stacked": true,
                "min": "auto",
                "max": "auto"
            }}
            axisBottom={{
                "orient": "bottom",
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "transportation",
                "legendOffset": 36,
                "legendPosition": "middle"
            }}
            axisLeft={{
                "orient": "left",
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "count",
                "legendOffset": -40,
                "legendPosition": "middle"
            }}
            dotSize={10}
            dotColor="inherit:darker(0.3)"
            dotBorderWidth={2}
            dotBorderColor="#ffffff"
            enableDotLabel={true}
            dotLabel="y"
            dotLabelYOffset={-12}
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            legends={[
                {
                    "anchor": "bottom-right",
                    "direction": "column",
                    "justify": false,
                    "translateX": 100,
                    "translateY": 0,
                    "itemsSpacing": 0,
                    "itemDirection": "left-to-right",
                    "itemWidth": 80,
                    "itemHeight": 20,
                    "itemOpacity": 0.75,
                    "symbolSize": 12,
                    "symbolShape": "circle",
                    "symbolBorderColor": "rgba(0, 0, 0, .5)",
                    "effects": [
                        {
                            "on": "hover",
                            "style": {
                                "itemBackground": "rgba(0, 0, 0, .03)",
                                "itemOpacity": 1
                            }
                        }
                    ]
                }
            ]}
        />
      </div>
    </div>
)};
export {CustomerLineStats};