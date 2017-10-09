import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from "react-native-scrollable-tab-view"
import Action from "../nav_video/action"
import Fanntasy from "../nav_book/fantasy"
export default class My extends Component{
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
                        <Fanntasy tabLabel="玄幻排行榜" navigate={navigate}/>
                        <Fanntasy tabLabel="都市排行榜" navigate={navigate}/>
                        <Fanntasy tabLabel="校园排行榜" navigate={navigate}/>
                        <Fanntasy tabLabel="言情排行榜" navigate={navigate}/>
                    </ScrollableTabView>
                </View>
        )
    }
}