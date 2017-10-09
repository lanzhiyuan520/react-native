import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
    ToastAndroid,
    ScrollView,
    FlatList
} from 'react-native';


export default class musicDetailed extends Component{
    constructor(props){
        super(props)
        this.state={
            Music:[
                {music_name:"高手",name:"胡彦斌"},
                {music_name:"干了这杯波本",name:"杨坤"},
                {music_name:"我们的爱",name:"狮子合唱团"},
                {music_name:"盛夏",name:"毛不易"},
                {music_name:"给未来的自己",name:"王俊凯"},
                {music_name:"无聊人",name:"华晨宇"},
                {music_name:"哭给你听",name:" 金志文"},
                {music_name:"白露",name:"孙露"},
                {music_name:"如果有一天",name:"李荣浩"},
                {music_name:"模特",name:"李荣浩"},
                {music_name:"喜欢你",name:"邓紫棋"},
                {music_name:"年轮",name:"张碧晨"}
            ]
        }
    }
    static navigationOptions = {
        title: '音乐详情',
    };
    render(){
        return(
            <View>
                <View>
                    <Image source={require("../../img/xiangqingimg.jpg")} style={{width:Dimensions.get('window').width,height:200}}/>
                    <Image source={require("../../img/xiangqingimg.jpg")} style={{width:90,height:90,marginTop:-170,marginLeft:170}}/>
                    <Image source={require("../../img/bofang.png")} style={{width:35,height:35,position:"absolute",top:55,left:195}}/>
                    <Text style={{color:"#fff",fontSize:16,textAlign:"center",marginTop:5,marginBottom:5}}>每日最新单曲</Text>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <TouchableWithoutFeedback onPress={()=>{ ToastAndroid.show('暂时不能下载', ToastAndroid.SHORT)}}>
                        <View style={{width:132,height:32,backgroundColor:'#9c864f',borderRadius:15,flexDirection:"row",alignItems:"center"}}>
                            <View style={{marginLeft:10}}>
                                <Image source={require("../../img/xiazai.png")} style={{width:18,height:18}}/>
                            </View>
                            <Text style={{fontSize:14,color:"#fff"}}>下载歌单歌曲</Text>
                        </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
                <ScrollView style={{marginTop:16}}>
                <View >
                    <FlatList
                        data={this.state.Music}
                        renderItem={({item})=>{
                            return(
                                <View style={{width:Dimensions.get('window').width,height:60,borderBottomWidth:1,borderBottomColor:"#e5e5e5"}}>
                                    <View style={{height:30,flexDirection:"row",alignItems:"center"}}>
                                        <Text style={{marginLeft:10,color:"#333"}}>{item.music_name}</Text>
                                        <Image source={require("../../img/HQ.png")} style={{width:21,height:11,marginLeft:5}}/>
                                        <Image source={require("../../img/LMusic.png")} style={{width:21,height:11,marginLeft:5}}/>
                                    </View>
                                    <View style={{marginLeft:10}}>
                                        <Text style={{fontSize:12,color:"#666"}}>{item.name}-{item.music_name}</Text>
                                 </View>
                                    <View style={{flexDirection:"row",justifyContent:"flex-end",marginTop:-25,marginRight:10}}>
                                        <TouchableWithoutFeedback onPress={()=>{ ToastAndroid.show('暂时不能下载', ToastAndroid.SHORT)}}>
                                            <Image source={require("../../img/xiazai2.png")} style={{width:18,height:18}}/>
                                            </TouchableWithoutFeedback>
                                        </View>
                                </View>
                            )
                        }}
                       />
                </View>
                </ScrollView>
            </View>
        )
    }
}