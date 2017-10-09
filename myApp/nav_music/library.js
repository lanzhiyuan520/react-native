import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    FlatList,
    Image,
    Dimensions,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import Loading from "../nav_video/loading"
import Swiper from 'react-native-swiper';
export default class Library extends Component{
    constructor(props){
        super(props)
        this.state = {
            Show:false
        }

    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                Show:true
            });
        },2000)
    }
    render(){
        if(this.state.Show) {
            return (
                <View style={{flex: 1}}>
                    <ScrollView>
                    <Swiper
                            height={200}
                            horizontal={true}
                            autoplay={true}
                            autoplayTimeout={2}
                            paginationStyle={{bottom: 10}}
                            showsButtons={false}
                    >
                        <Image source={require("../../img/jie.jpg")} style={styles.img}/>
                        <Image source={require("../../img/chen.png")} style={styles.img}/>
                        <Image source={require("../../img/li.jpg")} style={styles.img}/>
                        <Image source={require("../../img/deng.jpg")} style={styles.img}/>
                    </Swiper>
                        <View style={styles.split}></View>
                    <View>
                        <View style={{marginLeft:5,height:40,justifyContent:"center"}}>
                            <Text style={{fontSize:18,color:"#000"}}>每日新歌</Text>
                        </View>
                        <View style={{alignItems:"center"}}>
                            <TouchableWithoutFeedback onPress={() => this.props.navigate.navigate("Detailed")}>
                            <Image source={require("../../img/tfboys.jpg")} style={{width:Dimensions.get('window').width-10,height:200}}/>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{height:30,alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:14,color:"#999"}}>华语新歌推荐</Text>
                        </View>
                        <View style={{alignItems:"center"}}>
                            <TouchableWithoutFeedback onPress={() => this.props.navigate.navigate("Detailed")}>
                            <Image source={require("../../img/huayu.jpg")} style={{width:Dimensions.get('window').width-10,height:200}}/>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{height:30,alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:14,color:"#999"}}>日韩新歌推荐</Text>
                        </View>
                        <View style={{alignItems:"center"}}>
                            <TouchableWithoutFeedback onPress={() => this.props.navigate.navigate("Detailed")}>
                            <Image source={require("../../img/rihan.jpg")} style={{width:Dimensions.get('window').width-10,height:200}}/>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{height:30,alignItems:"center",justifyContent:"center"}}>
                            <Text style={{fontSize:14,color:"#999"}}>欧美新歌推荐</Text>
                        </View>
                    </View>
                        <View style={styles.split}></View>
                        <View>
                            <View style={{marginLeft:5,height:40,justifyContent:"center"}}>
                                <Text style={{fontSize:18,color:"#000"}}>歌单推荐</Text>
                            </View>
                            <View style={{paddingRight:10,flexDirection:"row",justifyContent:"space-between"}}>
                                <ScrollView horizontal>
                                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                        <View>
                                            <TouchableWithoutFeedback onPress={() => this.props.navigate.navigate("Detailed")}>
                                            <Image source={require("../../img/meiti.jpg")} style={styles.music_pic}/>
                                            </TouchableWithoutFeedback>
                                            <Text style={styles.music_title}>每日最新单曲</Text>
                                        </View>
                                        <View>
                                            <TouchableWithoutFeedback onPress={() => this.props.navigate.navigate("Detailed")}>
                                            <Image source={require("../../img/peng.jpg")} style={styles.music_pic}/>
                                            </TouchableWithoutFeedback>
                                            <View style={{width:100}}>
                                                <Text style={styles.music_title}>来一场怦然心动的爱情</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <TouchableWithoutFeedback onPress={() => this.props.navigate.navigate("Detailed")}>
                                            <Image source={require("../../img/wan.jpg")} style={styles.music_pic}/>
                                            </TouchableWithoutFeedback>
                                            <View style={{width:100}}>
                                                <Text style={styles.music_title}>【完美】一行入你心的清澈小诗</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <TouchableWithoutFeedback onPress={() => this.props.navigate.navigate("Detailed")}>
                                            <Image source={require("../../img/hun.jpg")} style={styles.music_pic}/>
                                            </TouchableWithoutFeedback>
                                            <View style={{width:100}}>
                                                <Text style={styles.music_title}>婚礼时hold住全场的幸福旋律</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <TouchableWithoutFeedback onPress={() => this.props.navigate.navigate("Detailed")}>
                                            <Image source={require("../../img/wu.jpg")} style={styles.music_pic}/>
                                            </TouchableWithoutFeedback>
                                            <View style={{width:100}}>
                                                <Text style={styles.music_title}>武侠丨江湖恩怨何时了，一曲逍遥终罢了。</Text>
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                        <View style={styles.split}></View>
                        <View>
                            <View style={{marginLeft:5,height:40,justifyContent:"center"}}>
                                <Text style={{fontSize:18,color:"#000"}}>精彩节目</Text>
                            </View>
                            <View style={{paddingRight:10,flexDirection:"row",justifyContent:"space-between"}}>
                                <ScrollView horizontal>
                                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                                        <View>
                                            <TouchableWithoutFeedback onPress={() => this.props.navigate.navigate("Detailed")}>
                                            <Image source={require("../../img/kuwo.jpg")} style={styles.music_pic}/>
                                            </TouchableWithoutFeedback>
                                            <Text style={styles.music_title}>酷我音乐调频</Text>
                                        </View>
                                        <View>
                                            <TouchableWithoutFeedback onPress={() => this.props.navigate.navigate("Detailed")}>
                                            <Image source={require("../../img/tucao.jpg")} style={styles.music_pic}/>
                                            </TouchableWithoutFeedback>
                                            <View style={{width:100}}>
                                                <Text style={styles.music_title}>吐小曹扒新闻</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <TouchableWithoutFeedback onPress={() => this.props.navigate.navigate("Detailed")}>
                                            <Image source={require("../../img/xiaoxuan.jpg")} style={styles.music_pic}/>
                                            </TouchableWithoutFeedback>
                                            <View style={{width:100}}>
                                                <Text style={styles.music_title}>《莫萱日记》音乐小品</Text>
                                            </View>
                                        </View>
                                        <View>
                                            <TouchableWithoutFeedback onPress={() => this.props.navigate.navigate("Detailed")}>
                                            <Image source={require("../../img/kuwo.jpg")} style={styles.music_pic}/>
                                            </TouchableWithoutFeedback>
                                            <Text style={styles.music_title}>酷我音乐调频</Text>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            )
        }else{
            return(
                <View>
                    <Loading/>
                </View>
            )
        }
    }
}
const styles = StyleSheet.create({
    split:{
        width:Dimensions.get('window').width,
        height:10,
        backgroundColor:"#e8e8e8"
    },
    img: {
        width: Dimensions.get('window').width,
        height: 200,
    },
    music_pic:{
        width:100,
        height:100,
        marginLeft:10
    },
    music_title:{
        color:"#333",
        fontSize:12,
        marginLeft:10
    }
});