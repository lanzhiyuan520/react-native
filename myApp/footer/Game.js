import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableWithoutFeedback,
    Image,
    FlatList,
    ScrollView,
    Dimensions,
    ToastAndroid
} from 'react-native';
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from "react-native-scrollable-tab-view"
import Action from "../nav_game/action"
import Login from "../../login"
import { StackNavigator } from 'react-navigation';
export default class Picture extends Component{
    static navigationOptions = {
        title: 'Welcome',
        header:null
    };
    constructor(props){
        super(props)
        this.state = {
            list:[
                {name:"私密文章",num:"0",img:require('../../img/suo1.png')},
                {name:"收藏的文章",num:"5",img:require('../../img/shoucang.png')},
                {name:"喜欢的文章",num:"20",img:require('../../img/xin.png')},
                {name:"我的专题",num:"15",img:require('../../img/liebiao.png')},
                {name:"我的文集",num:"8",img:require('../../img/book1.png')},
                {name:"关注的专题/文集",num:"30",img:require('../../img/gou.png')},
                {name:"我的钱包",img:require('../../img/qian.png')},
            ],
            login:true
        }
        this.login=this.login.bind(this)
    }
    componentDidMount(){
        /*this.setState({login:!this.props.navigation.state.params.login})*/
        if(this.props.navigation){
            this.setState({login:false})
        }else{
            this.setState({login:true})
        }
    }
    login(){
        this.setState({login:true})
        ToastAndroid.show('退出成功', ToastAndroid.SHORT)
    }
    render(){
        const navigate = this.props.navigate
        return(
            <View>
                <View>
                    <View style={{height:40,flexDirection:"row",alignItems:"center",paddingLeft:10}}>
                        <Text style={{color:"#000",fontSize:16}}>我的</Text>
                    </View>
                </View>
                <ScrollView>
                    <View>
                <View style={{height:15,backgroundColor:"#ebebeb"}}></View>
                <View style={{
                    height:80,
                    flexDirection:"row",
                    alignItems:"center",
                    borderTopWidth:1,
                    borderBottomWidth:1,
                    borderColor:"#e5e5e5"
                }}>

                        {this.state.login?
                            <View style={{flexDirection:"row",width:Dimensions.get('window').width,justifyContent:"center"}}>
                                <View  style={{width:60,backgroundColor:"#ff8080",height:30,borderRadius:10,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                                    <TouchableWithoutFeedback onPress={() => {
                                        navigate.navigate("Login",{navigate:navigate})
                                    }}>
                                        <Text style={{color:"#fff"}}>登录</Text>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                            :
                            <View style={{flexDirection:"row",justifyContent:"flex-start",alignItems:"center",marginLeft:10}}>
                                <View>
                                    <Image source={require("../../img/huge.jpg")} style={{width:60,height:60,borderRadius:30}}/>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <Text>胡歌</Text>
                                </View>
                                <View>
                                    <View style={{width:60,height:30,backgroundColor:"#999",borderRadius:10,flexDirection:"row",marginLeft:180,alignItems:"center"}}>
                                        <TouchableWithoutFeedback onPress={this.login}>
                                            <Text style={{color:"#fff"}}>退出登录</Text>
                                        </TouchableWithoutFeedback>
                                     <View/>
                                </View>
                            </View>
                            </View>
                        }
                </View>
                <View style={{height:84,alignItems:"center",justifyContent:"space-around",flexDirection:"row",borderBottomWidth:1,borderBottomColor:"#ebebeb"}}>
                    <View style={{width:123,alignItems:"center"}}>
                        <View>
                            <Text style={{fontSize:16,color:"#999"}}>0</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:12}}>公开文章</Text>
                        </View>
                    </View>
                    <View style={{width:123,alignItems:"center"}}>
                        <View>
                            <Text style={{fontSize:16,color:"#999"}}>0</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:12}}>关注</Text>
                        </View>
                    </View>
                    <View style={{width:123,alignItems:"center"}}>
                        <View>
                            <Text style={{fontSize:16,color:"#999"}}>0</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:12}}>粉丝</Text>
                        </View>
                    </View>
                </View>
                <View style={{height:15,backgroundColor:"#ebebeb"}}></View>
                <View>
                    <FlatList
                        data={this.state.list}
                        renderItem={({item})=>{
                            return (
                                <View style={{flexDirection:"row",justifyContent:"center"}}>
                                    <View style={{
                                        width:340,
                                        height:40,
                                        flexDirection:"row",
                                        alignItems:"center",
                                        borderBottomWidth:1,
                                        borderBottomColor:"#e5e5e5",
                                        position:"relative"
                                    }}>
                                        <View style={{marginRight:5}}>
                                            <Image source={item.img} style={{width:36,height:36}}/>
                                        </View>
                                        <View>
                                            <Text>{item.name}</Text>
                                        </View>
                                        <View style={{position:"absolute",right:5}}>
                                            <Text>{item.num}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        }}
                    />
                    <View style={{height:15,backgroundColor:"#ebebeb"}}></View>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <View style={{
                            width:340,
                            height:40,
                            flexDirection:"row",
                            alignItems:"center",
                            borderBottomWidth:1,
                            borderBottomColor:"#e5e5e5",
                            position:"relative"
                        }}>
                            <View style={{marginRight:5}}>
                                <Image source={require("../../img/yue.png")} style={{width:36,height:36}}/>
                            </View>
                            <View>
                                <Text>夜间模式</Text>
                            </View>
                            <View style={{position:"absolute",right:5}}>
                                <Text></Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <View style={{
                            width:340,
                            height:40,
                            flexDirection:"row",
                            alignItems:"center",
                            borderBottomWidth:1,
                            borderBottomColor:"#e5e5e5",
                            position:"relative"
                        }}>
                            <View style={{marginRight:5}}>
                                <Image source={require("../../img/zhong.png")} style={{width:36,height:36}}/>
                            </View>
                            <View>
                                <Text>浏览记录</Text>
                            </View>
                            <View style={{position:"absolute",right:5}}>
                                <Text></Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <View style={{
                            width:340,
                            height:40,
                            flexDirection:"row",
                            alignItems:"center",
                            borderBottomWidth:1,
                            borderBottomColor:"#e5e5e5",
                            position:"relative"
                        }}>
                            <View style={{marginRight:5}}>
                                <Image source={require("../../img/zhong.png")} style={{width:36,height:36}}/>
                            </View>
                            <View>
                                <Text>浏览记录</Text>
                            </View>
                            <View style={{position:"absolute",right:5}}>
                                <Text></Text>
                            </View>
                        </View>
                    </View>
                </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}