import React, { Component, PropTypes } from 'react';
import { View, Text , StyleSheet , Image , TouchableHighlight ,ScrollView} from 'react-native';
import Remo from "./recommend"
export default class content extends Component{
    constructor(props){
        super(props)
        this.state = {
            birth:"今天距宝宝出生大约154天",
            birthName:"Aaron",
            read:"12294",
            title:"饮食推荐",
            video:"视频推荐",
            can:"查看全部",
            canVideo:"全部课程"
        }
    }
    more(){
        alert("没有更多了，快去浏览别的吧！！！")
    }
    render(){
        return(
            <View style={{width:375}}>
                <View style={{
                    backgroundColor:"#fff",
                    borderTopWidth:1,
                    borderBottomWidth:1,
                    borderStyle:"solid",
                    borderBottomColor:"#999",
                    borderTopColor:"#999",
                    marginBottom:13
                }}>
                    <View style={styles.birth}>
                        <Text style={styles.birthName}>{this.state.birthName}</Text>
                        <Text style={styles.birthText}>{this.state.birth}</Text>
                    </View>
                    <View style={{width:375,height:56,position:"relative",top:10}}>
                        <View style={{width:375,height:56,marginLeft:34,flexDirection:"row"}}>
                            <Image style={{width:69,height:56}} source={require("./img/timg.jpg")}/>
                            <View style={{width:220,marginLeft:20}}>
                                <Text style={{fontSize:12,color:"#000000"}}>孕妇运动的最佳时间是什么时候?孕妇做什么运动对胎儿好?</Text>
                                <View style={{position:"absolute",bottom:0}}>
                                    <Text style={{fontSize:11,color:"#8A8A8A"}}>{this.state.read}人阅读</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{height:17,flexDirection:"row",alignItems:"center",marginTop:15}}>
                        <View style={{width:5,height:5,borderRadius:2.5,backgroundColor:"#999",marginLeft:34}}></View>
                        <View style={{width:306,height:17}}>
                            <Text style={{fontSize:11,color:"#181A18"}}>孕妇运动的最佳时间是什么时候?孕妇做什么运动对胎儿好?</Text>
                        </View>
                    </View>
                    <View style={{height:17,flexDirection:"row",alignItems:"center",marginTop:15}}>
                        <View style={{width:5,height:5,borderRadius:2.5,backgroundColor:"#999",marginLeft:34}}></View>
                        <View style={{width:306,height:17}}>
                            <Text style={{fontSize:11,color:"#181A18"}}>孕妇运动的最佳时间是什么时候?孕妇做什么运动对胎儿好?</Text>
                        </View>
                    </View>
                    <View style={{height:45,flexDirection:"row",justifyContent:"center",alignItems:'center'}}>
                        <TouchableHighlight onPress={this.more}>
                            <Text style={{fontSize:12,color:"#7A767A"}}>查看更多</Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <Remo title={this.state.title} can={this.state.can} more={this.more}/>
                <Remo video={this.state.video} canVideo={this.state.canVideo} more={this.more}/>
                <View style={{height:134,marginBottom:13,backgroundColor:"#fff"}}>
                    <View style={[styles.titleStyle,styles.teach]} >
                        <Text style={styles.title}>有问必答</Text>
                        <TouchableHighlight onPress={this.more}>
                            <Text style={{fontSize:12}}>更多专家></Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{height:73,flexDirection:"row",position:"relative"}}>
                        <View style={{paddingLeft:15}}>
                            <Image source={require("./img/img1.jpg")} style={{width:70,height:70,borderRadius:35}}/>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            height:39,
                            alignItems:"center",
                            marginLeft:8
                        }}>
                            <View style={{marginRight:5}}>
                                <Text style={{fontSize:14,color:"#000"}}>黄莉莉</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:12,color:"#878687"}}>有福妈妈培训老师</Text>
                            </View>
                        </View>
                        <View style={{
                            height:34,
                            width:180,
                            position:"absolute",
                            bottom:0,
                            left:93
                        }}>
                            <Text style={{fontSize:12,color:"#8A8A8A"}}>专注于母婴护理行业20年，专注于孕妇月子期间的问题研..</Text>
                        </View>
                        <View style={{
                            width:60,
                            height:30,
                            borderRadius:5,
                            flexDirection:"row",
                            justifyContent:"center",
                            alignItems:"center",
                            position:"absolute",
                            left:290,
                            top:23
                        }}>
                            <TouchableHighlight onPress={this.more}>
                                <Text style={{fontSize:12,color:"#101010"}}>去问TA</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    birth:{
        width:306,
        height:40,
        borderBottomWidth:1,
        borderStyle:"solid",
        borderBottomColor:"#999",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:34
    },
    birthText:{
        fontSize:14,
        color:"#8C888C",
        textAlign:"center",
        marginLeft:5
    },
    birthName:{
        fontSize:16,
        color:"#636163",
        textAlign:"center"
    },
    line:{
        marginRight:8
    },
    title:{
        fontSize:14,
        color:"#000000"
    },
    titleStyle:{
        marginLeft:15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingRight:20
    },
    teach:{
        height:45
    }
})