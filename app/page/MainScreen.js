import React from 'react';
import {TabBarBottom, TabNavigator} from "react-navigation";
import HomeScreen from "./HomeScreen";
import InvestScreen from "./InvestScreen";
import MineScreen from "./MineScreen";
import Display from "../resource/Display";

/**
 * 主界面
 */
export default Main = TabNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Invest: {
            screen: InvestScreen,
        },
        Mine: {
            screen: MineScreen
        }
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        animationEnabled: false,
        lazy: true,
        backBehavior: 'none',
        tabBarOptions: {
            activeTintColor: Display.orange_f5,
            inactiveTintColor: Display.gray_99,
            labelStyle: {
                fontSize: 12,
            },
            style: {
                backgroundColor: 'white',
            },
        }
    }
);
