import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute, Container, CustomerBarStats } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { CustomerUpload } from '../CustomerUpload';
//import { render, ReactDOM } from 'react-dom';
import { ResponsiveHeatMap } from '@nivo/heatmap';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
};

const App3 = () => (
    <div style={styles}>
      <h2>PIE {"\u2728"}</h2>
      <div style={{ height: 400 }}>
        <ResponsivePie
            data={[
                {
                  "id": "python",
                  "label": "python",
                  "value": 533,
                  "color": "hsl(309, 70%, 50%)"
                },
                {
                  "id": "scala",
                  "label": "scala",
                  "value": 266,
                  "color": "hsl(166, 70%, 50%)"
                },
                {
                  "id": "go",
                  "label": "go",
                  "value": 252,
                  "color": "hsl(254, 70%, 50%)"
                },
                {
                  "id": "ruby",
                  "label": "ruby",
                  "value": 25,
                  "color": "hsl(30, 70%, 50%)"
                },
                {
                  "id": "javascript",
                  "label": "javascript",
                  "value": 424,
                  "color": "hsl(5, 70%, 50%)"
                }
              ]}
            margin={{
                "top": 40,
                "right": 80,
                "bottom": 80,
                "left": 80
            }}
            innerRadius={0.5}
            padAngle={0.7}
            cornerRadius={3}
            colors="nivo"
            colorBy="id"
            borderWidth={1}
            borderColor="inherit:darker(0.2)"
            radialLabelsSkipAngle={10}
            radialLabelsTextXOffset={6}
            radialLabelsTextColor="#333333"
            radialLabelsLinkOffset={0}
            radialLabelsLinkDiagonalLength={16}
            radialLabelsLinkHorizontalLength={24}
            radialLabelsLinkStrokeWidth={1}
            radialLabelsLinkColor="inherit"
            slicesLabelsSkipAngle={10}
            slicesLabelsTextColor="#333333"
            animate={true}
            motionStiffness={90}
            motionDamping={15}
            defs={[
                {
                    "id": "dots",
                    "type": "patternDots",
                    "background": "inherit",
                    "color": "rgba(255, 255, 255, 0.3)",
                    "size": 4,
                    "padding": 1,
                    "stagger": true
                },
                {
                    "id": "lines",
                    "type": "patternLines",
                    "background": "inherit",
                    "color": "rgba(255, 255, 255, 0.3)",
                    "rotation": -45,
                    "lineWidth": 6,
                    "spacing": 10
                }
            ]}
            fill={[
                {
                    "match": {
                        "id": "ruby"
                    },
                    "id": "dots"
                },
                {
                    "match": {
                        "id": "c"
                    },
                    "id": "dots"
                },
                {
                    "match": {
                        "id": "go"
                    },
                    "id": "dots"
                },
                {
                    "match": {
                        "id": "python"
                    },
                    "id": "dots"
                },
                {
                    "match": {
                        "id": "scala"
                    },
                    "id": "lines"
                },
                {
                    "match": {
                        "id": "lisp"
                    },
                    "id": "lines"
                },
                {
                    "match": {
                        "id": "elixir"
                    },
                    "id": "lines"
                },
                {
                    "match": {
                        "id": "javascript"
                    },
                    "id": "lines"
                }
            ]}
            legends={[
                {
                    "anchor": "bottom",
                    "direction": "row",
                    "translateY": 56,
                    "itemWidth": 100,
                    "itemHeight": 18,
                    "itemTextColor": "#999",
                    "symbolSize": 18,
                    "symbolShape": "circle",
                    "effects": [
                        {
                            "on": "hover",
                            "style": {
                                "itemTextColor": "#000"
                            }
                        }
                    ]
                }
            ]}
        />
      </div>
    </div>
);

const App2 = () => (
    <div style={styles}>
      <h2>Start editing t see some magic happen {"\u2728"}</h2>
      <div style={{ height: 400 }}>
        <ResponsiveHeatMap
          data={[
            {
              country: "AD",
              "hot dog": 35,
              "hot dogColor": "hsl(68, 70%, 50%)",
              burger: 1,
              burgerColor: "hsl(81, 70%, 50%)",
              sandwich: 88,
              sandwichColor: "hsl(79, 70%, 50%)",
              kebab: 37,
              kebabColor: "hsl(135, 70%, 50%)",
              fries: 61,
              friesColor: "hsl(359, 70%, 50%)",
              donut: 72,
              donutColor: "hsl(26, 70%, 50%)",
              junk: 70,
              junkColor: "hsl(342, 70%, 50%)",
              sushi: 7,
              sushiColor: "hsl(157, 70%, 50%)",
              ramen: 19,
              ramenColor: "hsl(70, 70%, 50%)",
              curry: 93,
              curryColor: "hsl(42, 70%, 50%)",
              udon: 16,
              udonColor: "hsl(221, 70%, 50%)"
            },
            {
              country: "AE",
              "hot dog": 9,
              "hot dogColor": "hsl(295, 70%, 50%)",
              burger: 63,
              burgerColor: "hsl(360, 70%, 50%)",
              sandwich: 31,
              sandwichColor: "hsl(202, 70%, 50%)",
              kebab: 65,
              kebabColor: "hsl(208, 70%, 50%)",
              fries: 34,
              friesColor: "hsl(6, 70%, 50%)",
              donut: 28,
              donutColor: "hsl(262, 70%, 50%)",
              junk: 20,
              junkColor: "hsl(152, 70%, 50%)",
              sushi: 40,
              sushiColor: "hsl(54, 70%, 50%)",
              ramen: 66,
              ramenColor: "hsl(92, 70%, 50%)",
              curry: 43,
              curryColor: "hsl(174, 70%, 50%)",
              udon: 2,
              udonColor: "hsl(277, 70%, 50%)"
            },
            {
              country: "AF",
              "hot dog": 95,
              "hot dogColor": "hsl(102, 70%, 50%)",
              burger: 24,
              burgerColor: "hsl(215, 70%, 50%)",
              sandwich: 3,
              sandwichColor: "hsl(183, 70%, 50%)",
              kebab: 45,
              kebabColor: "hsl(299, 70%, 50%)",
              fries: 33,
              friesColor: "hsl(244, 70%, 50%)",
              donut: 14,
              donutColor: "hsl(230, 70%, 50%)",
              junk: 11,
              junkColor: "hsl(63, 70%, 50%)",
              sushi: 86,
              sushiColor: "hsl(44, 70%, 50%)",
              ramen: 91,
              ramenColor: "hsl(5, 70%, 50%)",
              curry: 9,
              curryColor: "hsl(350, 70%, 50%)",
              udon: 66,
              udonColor: "hsl(331, 70%, 50%)"
            },
            {
              country: "AG",
              "hot dog": 14,
              "hot dogColor": "hsl(311, 70%, 50%)",
              burger: 65,
              burgerColor: "hsl(124, 70%, 50%)",
              sandwich: 11,
              sandwichColor: "hsl(72, 70%, 50%)",
              kebab: 43,
              kebabColor: "hsl(268, 70%, 50%)",
              fries: 61,
              friesColor: "hsl(346, 70%, 50%)",
              donut: 30,
              donutColor: "hsl(218, 70%, 50%)",
              junk: 18,
              junkColor: "hsl(352, 70%, 50%)",
              sushi: 26,
              sushiColor: "hsl(190, 70%, 50%)",
              ramen: 44,
              ramenColor: "hsl(327, 70%, 50%)",
              curry: 2,
              curryColor: "hsl(138, 70%, 50%)",
              udon: 98,
              udonColor: "hsl(279, 70%, 50%)"
            },
            {
              country: "AI",
              "hot dog": 74,
              "hot dogColor": "hsl(92, 70%, 50%)",
              burger: 55,
              burgerColor: "hsl(147, 70%, 50%)",
              sandwich: 45,
              sandwichColor: "hsl(81, 70%, 50%)",
              kebab: 73,
              kebabColor: "hsl(253, 70%, 50%)",
              fries: 45,
              friesColor: "hsl(220, 70%, 50%)",
              donut: 80,
              donutColor: "hsl(239, 70%, 50%)",
              junk: 4,
              junkColor: "hsl(208, 70%, 50%)",
              sushi: 0,
              sushiColor: "hsl(66, 70%, 50%)",
              ramen: 61,
              ramenColor: "hsl(71, 70%, 50%)",
              curry: 51,
              curryColor: "hsl(297, 70%, 50%)",
              udon: 60,
              udonColor: "hsl(44, 70%, 50%)"
            },
            {
              country: "AL",
              "hot dog": 47,
              "hot dogColor": "hsl(279, 70%, 50%)",
              burger: 96,
              burgerColor: "hsl(204, 70%, 50%)",
              sandwich: 21,
              sandwichColor: "hsl(348, 70%, 50%)",
              kebab: 100,
              kebabColor: "hsl(268, 70%, 50%)",
              fries: 96,
              friesColor: "hsl(259, 70%, 50%)",
              donut: 9,
              donutColor: "hsl(91, 70%, 50%)",
              junk: 34,
              junkColor: "hsl(340, 70%, 50%)",
              sushi: 65,
              sushiColor: "hsl(137, 70%, 50%)",
              ramen: 40,
              ramenColor: "hsl(19, 70%, 50%)",
              curry: 34,
              curryColor: "hsl(216, 70%, 50%)",
              udon: 85,
              udonColor: "hsl(240, 70%, 50%)"
            },
            {
              country: "AM",
              "hot dog": 57,
              "hot dogColor": "hsl(55, 70%, 50%)",
              burger: 87,
              burgerColor: "hsl(191, 70%, 50%)",
              sandwich: 72,
              sandwichColor: "hsl(90, 70%, 50%)",
              kebab: 89,
              kebabColor: "hsl(18, 70%, 50%)",
              fries: 74,
              friesColor: "hsl(294, 70%, 50%)",
              donut: 38,
              donutColor: "hsl(244, 70%, 50%)",
              junk: 20,
              junkColor: "hsl(131, 70%, 50%)",
              sushi: 59,
              sushiColor: "hsl(259, 70%, 50%)",
              ramen: 6,
              ramenColor: "hsl(227, 70%, 50%)",
              curry: 14,
              curryColor: "hsl(313, 70%, 50%)",
              udon: 100,
              udonColor: "hsl(70, 70%, 50%)"
            },
            {
              country: "AO",
              "hot dog": 58,
              "hot dogColor": "hsl(30, 70%, 50%)",
              burger: 11,
              burgerColor: "hsl(132, 70%, 50%)",
              sandwich: 54,
              sandwichColor: "hsl(125, 70%, 50%)",
              kebab: 92,
              kebabColor: "hsl(111, 70%, 50%)",
              fries: 13,
              friesColor: "hsl(40, 70%, 50%)",
              donut: 14,
              donutColor: "hsl(202, 70%, 50%)",
              junk: 1,
              junkColor: "hsl(140, 70%, 50%)",
              sushi: 33,
              sushiColor: "hsl(337, 70%, 50%)",
              ramen: 28,
              ramenColor: "hsl(323, 70%, 50%)",
              curry: 24,
              curryColor: "hsl(353, 70%, 50%)",
              udon: 39,
              udonColor: "hsl(309, 70%, 50%)"
            },
            {
              country: "AQ",
              "hot dog": 22,
              "hot dogColor": "hsl(337, 70%, 50%)",
              burger: 61,
              burgerColor: "hsl(244, 70%, 50%)",
              sandwich: 81,
              sandwichColor: "hsl(66, 70%, 50%)",
              kebab: 26,
              kebabColor: "hsl(113, 70%, 50%)",
              fries: 48,
              friesColor: "hsl(13, 70%, 50%)",
              donut: 19,
              donutColor: "hsl(248, 70%, 50%)",
              junk: 51,
              junkColor: "hsl(297, 70%, 50%)",
              sushi: 76,
              sushiColor: "hsl(325, 70%, 50%)",
              ramen: 13,
              ramenColor: "hsl(139, 70%, 50%)",
              curry: 88,
              curryColor: "hsl(189, 70%, 50%)",
              udon: 68,
              udonColor: "hsl(344, 70%, 50%)"
            }
          ]}
          keys={[
            "hot dog",
            "burger",
            "sandwich",
            "kebab",
            "fries",
            "donut",
            "junk",
            "sushi",
            "ramen",
            "curry",
            "udon"
          ]}
          indexBy="country"
          margin={{
            top: 100,
            right: 60,
            bottom: 60,
            left: 60
          }}
          forceSquare={true}
          axisTop={{
            orient: "top",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -90,
            legend: "",
            legendOffset: 36
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "country",
            legendPosition: "center",
            legendOffset: -40
          }}
          cellOpacity={1}
          cellBorderColor="inherit:darker(0.4)"
          labelTextColor="inherit:darker(1.8)"
          defs={[
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "rgba(0, 0, 0, 0.1)",
              rotation: -45,
              lineWidth: 4,
              spacing: 7
            }
          ]}
          fill={[
            {
              id: "lines"
            }
          ]}
          animate={true}
          motionStiffness={80}
          motionDamping={9}
          hoverTarget="cell"
          cellHoverOthersOpacity={0.25}
        />
      </div>
    </div>
);

const CustomerBarStats2 = () => (
    <div style={styles}>
      <h2>Start editing t see some magic happen {"\u2728"}</h2>
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
            axisTop="null"
            axisRight="null"
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

//render(<App2 />, document.getElementById("app"));

const Index = () => <h2>HOME</h2>
const Graph = () => render(<CustomerBarStats />, document.getElementById("chart"))

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <PrivateRoute exact path="/customer" component={CustomerUpload} />
                                <Route path="/login" component={LoginPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 