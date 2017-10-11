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
    ToastAndroid,
    TouchableHighlight,
    Modal
} from 'react-native';
import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from "react-native-scrollable-tab-view"
import Action from "../nav_game/action"
import Login from "./Login"
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
            login:false,
            flag:false,
            show:false
        }
        this.click=this.click.bind(this)
        this.login=this.login.bind(this)
    }
    login(){
        this.setState({
            show:true
        })
    }
    click(){
        this.setState({
            flag:true
        })
    }
    render(){
        const navigate = this.props.navigate
        return(
            <View>
                {this.state.flag?
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
                                        navigate.navigate("Login")
                                    }}>
                                        <Text style={{color:"#fff"}}>登录</Text>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                            :
                            <View style={{flexDirection:"row",width:Dimensions.get('window').width,alignItems:"center",marginLeft:10}}>
                                <View>
                                    <Image source={require("../../img/huge.jpg")} style={{width:60,height:60,borderRadius:30}}/>
                                </View>
                                <View style={{marginLeft:10}}>
                                    <Text>胡歌</Text>
                                </View>
                                <View style={{position:"absolute",right:10,marginRight:10}}>
                                    <View style={{width:60,height:30,backgroundColor:"#999",borderRadius:10,flexDirection:"row",alignItems:"center"}}>
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
                                <View style={{
                                    flexDirection:"row",
                                    width:Dimensions.get('window').width,
                                    justifyContent:"center",
                                    paddingLeft:10,
                                    paddingRight:10,
                                }}>
                                    <View style={{
                                        paddingLeft:10,
                                        paddingRight:10,
                                        width:Dimensions.get('window').width,
                                        height:40,
                                        flexDirection:"row",
                                        alignItems:"center",
                                        borderBottomWidth:1,
                                        borderBottomColor:"#e5e5e5",
                                        position:"relative"
                                    }}>

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
                    <View style={{flexDirection:"row"}}>
                        <View style={{
                            paddingLeft:10,
                            width:Dimensions.get('window').width,
                            height:40,
                            flexDirection:"row",
                            alignItems:"center",
                            borderBottomWidth:1,
                            borderBottomColor:"#e5e5e5",
                            position:"relative"
                        }}>

                            <View>
                                <Text>夜间模式</Text>
                            </View>
                            <View style={{position:"absolute",right:5}}>
                                <Text></Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",width:Dimensions.get('window').width}}>
                        <View style={{
                            paddingLeft:10,
                            width:Dimensions.get('window').width,
                            height:40,
                            flexDirection:"row",
                            alignItems:"center",
                            borderBottomWidth:1,
                            borderBottomColor:"#e5e5e5",
                            position:"relative"
                        }}>
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
            </View>:<Login click={this.click}/> }
                <View style={styles.container}>
                    <Modal
                        animationType='slide'
                        transparent={true}
                        visible={this.state.show}
                        onShow={() => {}}
                        onRequestClose={() => {}} >
                        <View style={styles.modalStyle}>
                            <View style={styles.subView}>
                                <Text style={styles.titleText}>
                                    提示
                                </Text>
                                <Text style={styles.contentText}>
                                    确定要退出吗
                                </Text>
                                <View style={styles.horizontalLine} />
                                <View style={styles.buttonView}>
                                    <TouchableHighlight underlayColor='transparent'
                                                        style={styles.buttonStyle}
                                                        onPress={()=>{this.setState({show:false})}}>
                                        <Text style={styles.buttonText}>
                                            取消
                                        </Text>
                                    </TouchableHighlight>
                                    <View style={styles.verticalLine} />
                                    <TouchableHighlight underlayColor='transparent'
                                                        style={styles.buttonStyle}
                                                        onPress={()=>{
                                                            this.setState({show:false});
                                                            this.setState({flag:false});
                                                            ToastAndroid.show('退出成功', ToastAndroid.SHORT)
                                                        }}>
                                        <Text style={styles.buttonText}>
                                            确定
                                        </Text>
                                    </TouchableHighlight>
                                </View>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#ECECF0',
    },
    // modal的样式
    modalStyle: {
        // backgroundColor:'#ccc',
        alignItems: 'center',
        justifyContent:'center',
        flex:1,
    },
    // modal上子View的样式
    subView:{
        marginLeft:60,
        marginRight:60,
        backgroundColor:'#fff',
        alignSelf: 'stretch',
        justifyContent:'center',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor:'#ccc',
    },
    // 标题
    titleText:{
        marginTop:10,
        marginBottom:5,
        fontSize:16,
        fontWeight:'bold',
        textAlign:'center',
    },
    // 内容
    contentText:{
        margin:8,
        fontSize:14,
        textAlign:'center',
    },
    // 水平的分割线
    horizontalLine:{
        marginTop:5,
        height:0.5,
        backgroundColor:'#ccc',
    },
    // 按钮
    buttonView:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonStyle:{
        flex:1,
        height:44,
        alignItems: 'center',
        justifyContent:'center',
    },
    // 竖直的分割线
    verticalLine:{
        width:0.5,
        height:44,
        backgroundColor:'#ccc',
    },
    buttonText:{
        fontSize:16,
        color:'#3393F2',
        textAlign:'center',
    },
});