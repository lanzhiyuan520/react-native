import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TouchableWithoutFeedback,
    Button,
    ScrollView,
    ToastAndroid
} from 'react-native';


export default class City extends Component{
    constructor(props){
        super(props)
        this.state = {
            img:"",
            name:"",
            people:"",
            retained:"",
            Introduction:"",
            font:"",
            book:{
                long:require('../../img/longwang.jpg')
            }
        }
    }
    static navigationOptions = {
        title: '小说详情',
    };
    componentDidMount(){
        this.setState({
            img:this.props.navigation.state.params.img,
            name:this.props.navigation.state.params.name,
            people:this.props.navigation.state.params.people,
            retained:this.props.navigation.state.params.retained,
            Introduction:this.props.navigation.state.params.Introduction,
            font:this.props.navigation.state.params.font,
        })
        console.log(this.props.navigation.state.params)
    }
    render(){
        return(
            <View style={{backgroundColor:"#fff"}}>
                <ScrollView>
                <View style={{width:Dimensions.get('window').width,
                    height:127,
                    flexDirection:"row"
                }}>
                        <View style={{ flexDirection:"row",
                            alignItems:"center",marginLeft:10}}>
                            <Image source={this.state.img} style={{width:64,height:87}}/>
                        </View>
                    <View style={{justifyContent:"center",marginLeft:10}}>
                        <View style={{height:87}}>
                            <View >
                                <Text style={{color:"#000",fontSize:16}}>圣墟</Text>
                            </View>
                            <View style={{flexDirection:"row",marginTop:5,marginBottom:5}}>
                                <Text style={{fontSize:12, color:"#b93321"}}>{this.state.name}</Text>
                                <Text style={{fontSize:12, color:"#666",marginLeft:5,marginRight:5}}>|</Text>
                                <Text style={{fontSize:12, color:"#666"}}>东方玄幻</Text>
                                <Text style={{fontSize:12, color:"#666",marginLeft:5,marginRight:5}}>|</Text>
                                <Text style={{fontSize:12, color:"#666"}}>{this.state.font}万字</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:12, color:"#666"}}>14小时前更新</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row",height:64,justifyContent:"space-around"}}>
                    <TouchableWithoutFeedback onPress={()=>{ToastAndroid.show('暂时不能加入书架', ToastAndroid.SHORT)}}>
                        <View style={{
                            width:150,
                            height:43,
                            flexDirection:"row",
                            justifyContent:"center",
                            alignItems:"center",
                            borderWidth:1,
                            borderColor:"#b93321",
                            borderRadius:2
                        }}>
                            <Text style={{color:"#b93321"}}>加入书架</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=>{ToastAndroid.show('暂时不能阅读', ToastAndroid.SHORT)}}>
                        <View style={{
                            width:150,
                            height:43,
                            flexDirection:"row",
                            justifyContent:"center",
                            alignItems:"center",
                            borderRadius:2,
                            backgroundColor:"#b93321"
                        }}>
                            <Text style={{color:"#fff"}}>开始阅读</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{height:84,alignItems:"center",flexDirection:"row",borderBottomWidth:1,borderBottomColor:"#ebebeb",borderTopWidth:1,borderTopColor:"#ebebeb"}}>
                    <View style={{width:123,alignItems:"center"}}>
                        <View>
                            <Text style={{fontSize:12,color:"#999"}}>追人气</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:16}}>{this.state.people}万</Text>
                        </View>
                    </View>
                    <View style={{width:123,alignItems:"center"}}>
                        <View>
                            <Text style={{fontSize:12,color:"#999"}}>读者留存率</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:16}}>{this.state.retained}</Text>
                        </View>
                    </View>
                    <View style={{width:123,alignItems:"center"}}>
                        <View>
                            <Text style={{fontSize:12,color:"#999"}}>日更字数/天</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:16}}>7493</Text>
                        </View>
                    </View>
                </View>
                <View style={{height:100,justifyContent:"center",padding:10}}>
                    <Text>{this.state.Introduction}</Text>
                </View>
                <View style={styles.split}></View>
                <View>
                    <View>
                        <View style={{height:45,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingLeft:10,paddingRight:10}}>
                            <Text style={{color:"#000",fontSize:14}}>你可能感兴趣</Text>
                            <TouchableWithoutFeedback onPress={() => this.props.navigation.state.params.nation("List")}>
                                <Text style={{fontSize:12,color:"#b93321"}}>更多</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                    <View style={{height:115,flexDirection:"row",justifyContent:"space-around"}}>
                        <View>
                                <Image source={this.state.book.long} style={{width:60,height:80,marginBottom:5}}/>
                            <Text>龙王传说</Text>
                        </View>
                        <View>
                            <Image source={require("../../img/xiuluo.jpg")} style={{width:60,height:80,marginBottom:5}}/>
                            <Text>修罗武神</Text>
                        </View>
                        <View>
                            <Image source={require("../../img/wuhun.jpg")} style={{width:60,height:80,marginBottom:5}}/>
                            <Text>绝世武魂</Text>
                        </View>
                        <View>
                            <Image source={require("../../img/wanmei.jpg")} style={{width:60,height:80,marginBottom:5}}/>
                            <Text>完美至尊</Text>
                        </View>
                        <View>
                            <Image source={require("../../img/mushen.jpg")} style={{width:60,height:80,marginBottom:5}}/>
                            <Text>牧神记</Text>
                        </View>
                    </View>
                    <View style={styles.split}></View>
                    <View style={{paddingLeft:10}}>
                        <View style={{height:62,justifyContent:"center"}}>
                            <Text style={{fontSize:14,color:"#000",marginBottom:5}}>版权信息</Text>
                            <Text style={{fontSize:12,color:"#999"}}>阅文集团正版授权</Text>
                        </View>
                    </View>
                </View>
                    <View style={styles.split}></View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    split:{
        width:Dimensions.get('window').width,
        height:10,
        backgroundColor:"#e8e8e8"
    }
})