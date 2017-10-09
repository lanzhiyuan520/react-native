import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from "react-native-scrollable-tab-view"
import Action from "../nav_video/action"
import Library from "../nav_music/library"
export default class MinePage extends Component{
    render(){
        const navigate = this.props.navigate
        return(
            <View style={{flex:1}}>
                <ScrollableTabView
                    initialPage={0}
                    scrollWithoutAnimation={true}
                    tabBarPosition='top'
                    renderTabBar={() => <ScrollableTabBar/>}
                    tabBarUnderlineStyle={{backgroundColor:'#FF0000'}}
                    tabBarActiveTextColor="#ff0000"
                >
                    <Library tabLabel="热歌榜" navigate={navigate}/>
                    <Library tabLabel="MV" navigate={navigate}/>
                    <Library tabLabel="直播" navigate={navigate}/>
                    <Library tabLabel="推荐" navigate={navigate}/>
                    <Library tabLabel="短片" navigate={navigate}/>
                    <Library tabLabel="节目" navigate={navigate}/>
                    <Library tabLabel="演出" navigate={navigate}/>
                </ScrollableTabView>
            </View>
        )
    }
}