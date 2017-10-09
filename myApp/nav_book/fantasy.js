import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    FlatList,
    ToastAndroid,
    TouchableWithoutFeedback
} from 'react-native';
import Loading from "../nav_video/loading"

export default class City extends Component{
    static navigationOptions = {
        title: 'Welcome',
        header:null
    };
    constructor(props){
        super(props)
        this.state = {
            ready:false,
            load:false,
            book:[
                {name:"辰东",book_name:"圣墟",book_type:"玄幻",Introduction:"在破败中崛起，在寂灭中复苏。沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了……",people:"30.4",retained:"73.63%",img:require('../../img/shengxu.jpg'),font:"256"},
                {name:"唐家三少",book_name:"龙王传说",book_type:"玄幻",Introduction:"伴随着魂导科技的进步，斗罗大陆上的人类征服了海洋，又发现了两片大陆……",people:"21.4",retained:"70.5%",img:require('../../img/longwang.jpg'),font:"344"},
                {name:"梦入神机",book_name:"龙符",book_type:"玄幻",Introduction:"苍茫大地，未来变革，混乱之中，龙蛇并起，谁是真龙，谁又是蟒蛇？或是天地众生……",people:"2.4",retained:"60.33%",img:require('../../img/longfu.jpg'),font:"333"},
                {name:"逆苍天",book_name:"万域之王",book_type:"玄幻",Introduction:"太古时代，有擎天巨灵，身如星辰，翱翔宙宇。有身怀异血的各族大尊，破灭虚空，再造天地……",people:"2.4",retained:"57.88%",img:require('../../img/wanyu.jpg'),font:"281"},
                {name:"观鱼",book_name:"完美至尊",book_type:"玄幻",Introduction:"时代天运，武道纵横！少年林凌自小被封印，受尽欺辱，当一双神秘的眼瞳觉醒时，曾经的强者……",people:"1.6",retained:"62.73%",img:require('../../img/wanmei.jpg'),font:"880"},
                {name:"乱",book_name:"全职法师",book_type:"玄幻",Introduction:"一觉醒来，世界大变，熟悉的高中传授的是魔法，告诉大家要成为一名出色的魔法师居住的都市之外游荡着袭击人……",people:"11.6",retained:"63.97%",img:require('../../img/fashi.jpg'),font:"492"},
                {name:"净无痕",book_name:"太古神王",book_type:"玄幻",Introduction:"九天大陆,天穹之上有九条星河,亿万星辰,皆为武命星辰,武道之人,可沟通星辰,觉醒星魂,成武命修士……",people:"10.1",retained:"74.8%",img:require('../../img/taigu.jpg'),font:"645"},
                {name:"善良的蜜蜂",book_name:"修罗武神",book_type:"玄幻",Introduction:"论潜力，不算天才，可玄功武技，皆可无师自通。论魅力，千金小姐算什么，妖女圣女……",people:"9.1",retained:"58.01%",img:require('../../img/xiuluo.jpg'),font:"777"},
                {name:"洛城东",book_name:"绝世武魂",book_type:"玄幻",Introduction:"龙脉大陆，万族林立，宗门无数，武者为尊。强者毁天灭地，弱者匍匐如蚁。少年陈枫……",people:"6.7",retained:"40.67%",img:require('../../img/wuhun.jpg'),font:"677"},
                {name:"宅猪",book_name:"牧神记",book_type:"玄幻",Introduction:"大墟的祖训说，天黑，别出门,大墟残老村的老弱病残们从江边捡到了一个婴儿，取名秦牧……",people:"8.3",retained:"56.54%",img:require('../../img/mushen.jpg'),font:"352"}
            ]
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({ready:true})
        },2000)
    }
    render(){
        return(
            <View>{this.state.ready?
                <FlatList
                    refreshing={this.state.load}
                    onRefresh={() => {
                        setTimeout(()=>{
                            ToastAndroid.show('已经是最新数据', ToastAndroid.SHORT)
                        },0)
                    }}
                    data={this.state.book}
                    renderItem={({item})=>{
                        return(
                            <TouchableWithoutFeedback onPress={() => this.props.navigate.navigate("Book",
                            {img:item.img,name:item.name,people:item.people,retained:item.retained,Introduction:item.Introduction,font:item.font,nation:this.props.navigate.navigate}
                            )}>
                            <View style={{
                                width:Dimensions.get('window').width,
                                height:105,
                                marginLeft:10,
                                flexDirection:"row",
                                alignItems:"center",
                                position:"relative"
                            }}>

                                <View>
                                    <Image source={item.img} style={{width:58,height:82}}/>
                                </View>
                                <View style={{height:82,marginLeft:10}}>
                                    <Text style={{color:"#000",fontSize:16}}>{item.book_name}</Text>
                                    <View style={{flexDirection:"row"}}>
                                        <Text style={{fontSize:10}}>{item.name}</Text>
                                        <Text style={{marginLeft:5,marginRight:5,fontSize:10}}>|</Text>
                                        <Text style={{fontSize:10}}>{item.book_type}</Text>
                                    </View>
                                    <View>
                                        <Text style={{fontSize:12}}>{item.Introduction}</Text>
                                    </View>
                                    <View style={{flexDirection:"row",position:"absolute",bottom:0}}>
                                        <Text style={{fontSize:10,color:"#b93321"}}>{item.people}万</Text>
                                        <Text style={{fontSize:10}}>人气</Text>
                                        <Text style={{marginLeft:5,marginRight:5,fontSize:10}}>|</Text>
                                        <Text style={{fontSize:10,color:"#b93321"}}>{item.retained}</Text>
                                        <Text style={{fontSize:10}}>读者留存</Text>
                                    </View>
                                </View>
                            </View>
                            </TouchableWithoutFeedback>
                        )
                    }}
                />:<Loading /> }
            </View>

        )
    }
}