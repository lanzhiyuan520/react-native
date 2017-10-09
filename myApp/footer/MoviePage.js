import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import ScrollableTabView,{ScrollableTabBar} from "react-native-scrollable-tab-view"

import Action from "../nav_video/action"
export default class HomePage extends Component{
    constructor(props){
        super(props)
    }
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
                    <Action tabLabel="电影" navigate={navigate}/>
                    <Action tabLabel="电视剧" navigate={navigate}/>
                    <Action tabLabel="动漫" navigate={navigate}/>
                    <Action tabLabel="综艺" navigate={navigate}/>
                    <Action tabLabel="搞笑" navigate={navigate}/>
                    <Action tabLabel="新闻" navigate={navigate}/>
                    <Action tabLabel="资讯" navigate={navigate}/>
                </ScrollableTabView>
            </View>
        )
    }
}
