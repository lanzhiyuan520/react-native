import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    TouchableWithoutFeedback,
    ToastAndroid
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { TabNavigator } from "react-navigation";
import Loading from "../nav_video/loading"
export default class Action extends Component{
    constructor(props){
        super(props)
        this.state={
            picture:[],
            ready:false,
            load:false
        }
        this.detailed=this.detailed.bind(this)
    }
    componentDidMount(){
        fetch("http://i.jandan.net/?oxwlxojflwblxbsapi=jandan.get_ooxx_comments&page=${page}")
            .then((response) => {
                this.setState({refreshing: false});
                return response.json();
            })
            .then((responseText) => {
                let arrData = responseText.comments;
                let i = 0;
                let arrList = [];
                arrData.map(item => {
                    arrList.push({key: i, value: item});
                    i++;
                })
                this.setState({picture: arrList,ready:true});
            })
            .catch(()=>{
                ToastAndroid.show('网络错误', ToastAndroid.SHORT)
            })
    }
    detailed(){
        alert("hello")
    }
    render(){
        return(
            <View>
                {this.state.ready?
                    <FlatList
                        numColumns="2"
                        refreshing={this.state.load}
                        onRefresh={() => {
                            this.setState({refreshing: true})
                            setTimeout(() => {
                                ToastAndroid.show('没有可刷新的内容', ToastAndroid.SHORT)
                                this.setState({refreshing: false});
                            }, 500);
                        }}


                        columnWrapperStyle={{flexDirection:"row",flex:1,justifyContent:"space-around"}}
                        data={this.state.picture}
                        renderItem={({item})=> {
                            return(
                                <TouchableWithoutFeedback  onPress={this.detailed} >
                                    <View style={{marginBottom:20}}>
                                        <View>
                                            <Image source={{uri: item.value.pics[0]}} style={{width:150,height:200}}/>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            )

                        }}
                    />:<Loading/>
                }
            </View>
        )
    }
}
