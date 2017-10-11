import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableWithoutFeedback,
    ToastAndroid,
    Button,
    ScrollView
} from 'react-native';

export default class Detailed extends Component{
    static navigationOptions = {
        title: '视频详情',
        headerTitleStyle:{

        }
    };
    constructor(props){
        super(props)
        this.state={
                img:"",
                actors:[],
                name:"",
                scoring:"",
                directors:""
        }
    }
    componentDidMount(){
        this.setState({
            img:this.props.navigation.state.params.img,
            actors:this.props.navigation.state.params.actors,
            name:this.props.navigation.state.params.name,
            scoring:this.props.navigation.state.params.scoring,
            directors:this.props.navigation.state.params.director
        })
    }
    render(){
        return(
            <View style={{backgroundColor:"#fff"}}>
                <ScrollView>
                {/*<View style={{flexDirection:"row",justifyContent:"center"}}>
                    <Image source={{uri:this.state.img}} style={{width:200,height:300}}/>
                </View>
                <Text>演员列表:</Text>
                <FlatList
                    data={this.state.actors}
                    renderItem={({item})=>{
                        return(
                                <View style={{

                                    marginTop:10,
                                    flexDirection:"row",
                                    marginLeft:20,
                                    borderWidth:1,
                                    borderColor:"#000"
                                }}>
                                    <View>
                                        <Image source={{uri:item.avatars.medium}} style={{width:80,height:120}}/>
                                    </View>
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                </View>
                        )
                    }}
                />*/}
                    <View style={{flexDirection:"row"}}>
                        <View style={{padding:10}}>
                            <Image source={{uri:this.state.img}} style={{width:180,height:280}}/>
                        </View>
                        <View style={{paddingTop:10,position:"relative"}}>
                            <View style={styles.list}>
                                <Text style={styles.text}>片名：{this.state.name}</Text>
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.text}>地区：中国</Text>
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.text}>语言：国语</Text>
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.text}>片长：140分钟</Text>
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.text}>上映日期：2017-07-14</Text>
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.text}>资源更新：2017-10-10</Text>
                            </View>
                            <View style={styles.list}>
                                <Text style={styles.text}>豆瓣评分：{this.state.scoring}</Text>
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <View style={styles.list}>
                                    <Text style={styles.text}>演员列表：</Text>
                                </View>
                                <FlatList
                                    horizontal={true}
                                    data={this.state.actors}
                                    renderItem={({item})=>{
                                        return(
                                            <View style={{flexDirection:"row"}}>
                                                <View>
                                                    <Text style={styles.text}>{item.name}/</Text>
                                                </View>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                            <View>
                                <Text style={styles.text}>导演：{this.state.directors}</Text>
                            </View>
                            <View style={{flexDirection:"row",position:"absolute",bottom:10}}>
                                <View style={{marginRight:10}}>
                                    <TouchableWithoutFeedback onPress={()=>{ToastAndroid.show('暂时不能播放', ToastAndroid.SHORT)}}>
                                        <View style={{width:60,height:20,flexDirection:"row",justifyContent:"space-around",alignItems:"center",backgroundColor:"#46b8da",borderRadius:3}}>
                                            <Image source={require("../../img/play3.png")} style={{width:16,height:16}}/>
                                            <Text style={{color:"#fff"}}>播放</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                                <View>
                                    <TouchableWithoutFeedback onPress={()=>{ToastAndroid.show('暂时不能下载', ToastAndroid.SHORT)}}>
                                        <View style={{width:60,height:20,flexDirection:"row",justifyContent:"space-around",alignItems:"center",backgroundColor:"#d9534f",borderRadius:3}}>
                                            <Image source={require("../../img/down.png")} style={{width:16,height:16}}/>
                                            <Text style={{color:"#fff"}}>下载</Text>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{padding:10}}>
                        <Text>
                            凯撒（安迪·瑟金斯 饰）领导的猿族将被迫与残暴的Colonel（伍迪·哈里森 饰）领导的人类军队上演一场生死大战。最终，凯撒与Colonel面对面进行了一场关乎猿族和人类命运的终极之战。
                            猿族和人类的战争已经持续了两年之久，凯撒一直生活在暴力与疯狂之中。他被科巴的死折磨着，同时也看够了猿族的同胞死于战争之中，他想要复仇，发起了一场“史诗远征”。凯撒领导的猿族被迫与残暴的Colonel领导的人类军队上演一场生死大战。猿族在战斗中遭遇了前所未有的重创，由此激发了凯撒内心中黑暗的一面，心中燃起复仇的烈火。最终，凯撒与Colonel面对面进行了一场关乎猿族和人类命运的终极之战 。
                            人类与猿族之间已经毫无和解余地，一场生死之战一触即发。历经科巴的反叛和人类的猛烈进攻，一心保护同胞的凯撒已经变成了一位冷酷无情的领袖，他策划一次针对人类军队指挥官——上校的刺杀行动，面对人类他也不再心慈手软。然而刺杀行动中凯撒一行偶遇一个小女孩，这个小女孩却重新唤起了了凯撒心中的善良之火。
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    text:{
        color:"#333"
    },
    list:{
        marginBottom:10
    }
})