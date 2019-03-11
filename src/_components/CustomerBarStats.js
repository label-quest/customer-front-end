import React from 'react'
import { ResponsiveBar } from '@nivo/bar'

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const CustomerBarStats = () => (
    <div style={styles}>
      <h2>7 days label statistics {"\u2728"}</h2>
      <div style={{ height: 400 }}>
      <ResponsiveBar
            data={[
                {
                "country": "AD",
                "hot dog": 64,
                "hot dogColor": "hsl(287, 70%, 50%)",
                "burger": 150,
                "burgerColor": "hsl(77, 70%, 50%)",
                "sandwich": 84,
                "sandwichColor": "hsl(101, 70%, 50%)",
                "kebab": 176,
                "kebabColor": "hsl(189, 70%, 50%)",
                "fries": 91,
                "friesColor": "hsl(33, 70%, 50%)",
                "donut": 140,
                "donutColor": "hsl(307, 70%, 50%)"
                },
                {
                "country": "AE",
                "hot dog": 119,
                "hot dogColor": "hsl(165, 70%, 50%)",
                "burger": 28,
                "burgerColor": "hsl(35, 70%, 50%)",
                "sandwich": 161,
                "sandwichColor": "hsl(41, 70%, 50%)",
                "kebab": 186,
                "kebabColor": "hsl(275, 70%, 50%)",
                "fries": 170,
                "friesColor": "hsl(137, 70%, 50%)",
                "donut": 85,
                "donutColor": "hsl(161, 70%, 50%)"
                },
                {
                "country": "AF",
                "hot dog": 136,
                "hot dogColor": "hsl(43, 70%, 50%)",
                "burger": 55,
                "burgerColor": "hsl(263, 70%, 50%)",
                "sandwich": 26,
                "sandwichColor": "hsl(144, 70%, 50%)",
                "kebab": 56,
                "kebabColor": "hsl(333, 70%, 50%)",
                "fries": 97,
                "friesColor": "hsl(36, 70%, 50%)",
                "donut": 55,
                "donutColor": "hsl(86, 70%, 50%)"
                },
                {
                "country": "AG",
                "hot dog": 65,
                "hot dogColor": "hsl(212, 70%, 50%)",
                "burger": 197,
                "burgerColor": "hsl(226, 70%, 50%)",
                "sandwich": 161,
                "sandwichColor": "hsl(181, 70%, 50%)",
                "kebab": 195,
                "kebabColor": "hsl(28, 70%, 50%)",
                "fries": 171,
                "friesColor": "hsl(22, 70%, 50%)",
                "donut": 120,
                "donutColor": "hsl(221, 70%, 50%)"
                },
                {
                "country": "AI",
                "hot dog": 13,
                "hot dogColor": "hsl(30, 70%, 50%)",
                "burger": 101,
                "burgerColor": "hsl(197, 70%, 50%)",
                "sandwich": 65,
                "sandwichColor": "hsl(74, 70%, 50%)",
                "kebab": 34,
                "kebabColor": "hsl(87, 70%, 50%)",
                "fries": 47,
                "friesColor": "hsl(90, 70%, 50%)",
                "donut": 121,
                "donutColor": "hsl(209, 70%, 50%)"
                },
                {
                "country": "AL",
                "hot dog": 77,
                "hot dogColor": "hsl(156, 70%, 50%)",
                "burger": 82,
                "burgerColor": "hsl(219, 70%, 50%)",
                "sandwich": 6,
                "sandwichColor": "hsl(58, 70%, 50%)",
                "kebab": 10,
                "kebabColor": "hsl(308, 70%, 50%)",
                "fries": 6,
                "friesColor": "hsl(53, 70%, 50%)",
                "donut": 167,
                "donutColor": "hsl(336, 70%, 50%)"
                },
                {
                "country": "AM",
                "hot dog": 138,
                "hot dogColor": "hsl(200, 70%, 50%)",
                "burger": 144,
                "burgerColor": "hsl(230, 70%, 50%)",
                "sandwich": 37,
                "sandwichColor": "hsl(147, 70%, 50%)",
                "kebab": 168,
                "kebabColor": "hsl(200, 70%, 50%)",
                "fries": 31,
                "friesColor": "hsl(14, 70%, 50%)",
                "donut": 183,
                "donutColor": "hsl(40, 70%, 50%)"
                }
            ]}
            keys={[
                "hot dog",
                "burger",
                "sandwich",
                "kebab",
                "fries",
                "donut"
            ]}
            indexBy="country"
            margin={{
                "top": 50,
                "right": 130,
                "bottom": 50,
                "left": 60
            }}
            padding={0.3}
            colors="nivo"
            colorBy="id"
            defs={[
                {
                    "id": "dots",
                    "type": "patternDots",
                    "background": "inherit",
                    "color": "#38bcb2",
                    "size": 4,
                    "padding": 1,
                    "stagger": true
                },
                {
                    "id": "lines",
                    "type": "patternLines",
                    "background": "inherit",
                    "color": "#eed312",
                    "rotation": -45,
                    "lineWidth": 6,
                    "spacing": 10
                }
            ]}
            fill={[
                {
                    "match": {
                        "id": "fries"
                    },
                    "id": "dots"
                },
                {
                    "match": {
                        "id": "sandwich"
                    },
                    "id": "lines"
                }
            ]}
            borderColor="inherit:darker(1.6)"
            //axisTop="null"
            //axisRight="null"
            axisBottom={{
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "country",
                "legendPosition": "middle",
                "legendOffset": 32
            }}
            axisLeft={{
                "tickSize": 5,
                "tickPadding": 5,
                "tickRotation": 0,
                "legend": "food",
                "legendPosition": "middle",
                "legendOffset": -40
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor="inherit:darker(1.6)"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            legends={[
                {
                    "dataFrom": "keys",
                    "anchor": "bottom-right",
                    "direction": "column",
                    "justify": false,
                    "translateX": 120,
                    "translateY": 0,
                    "itemsSpacing": 2,
                    "itemWidth": 100,
                    "itemHeight": 20,
                    "itemDirection": "left-to-right",
                    "itemOpacity": 0.85,
                    "symbolSize": 20,
                    "effects": [
                        {
                            "on": "hover",
                            "style": {
                                "itemOpacity": 1
                            }
                        }
                    ]
                }
            ]}
        />
      </div>
    </div>
);
export {CustomerBarStats};