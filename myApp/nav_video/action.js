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
import Loading from "./loading"
import Detailed from "./detailed"
export default class Action extends Component{
        constructor(props){
            super(props)
            this.state={
                video:[],
                ready:false,
                load:false
            }
        }
    componentDidMount(){

        fetch("https://api.douban.com/v2/movie/in_theaters")
            .then((response) => {
                this.setState({refreshing: false});
                return response.json();
            })
            .then((responseText) => {
                let arrData = responseText.subjects;
                let i = 0;
                let arrList = [];
                arrData.map(item => {
                    arrList.push({key: i, value: item});
                    i++;
                })
                this.setState({video: arrList,ready:true});
            })
            .catch(()=>{
                ToastAndroid.show('网络错误', ToastAndroid.SHORT)
            })
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
                        fetch("https://api.douban.com/v2/movie/coming_soon")
                            .then((response) => {
                                this.setState({refreshing: false});
                                return response.json();
                            })
                            .then((responseText) => {
                                let arrData = responseText.subjects;
                                let i = 0;
                                arrData.map(item => {
                                    this.state.video.unshift({key: i, value: item});
                                    i++;
                                })
                            })
                            .catch(()=>{
                                ToastAndroid.show('网络错误', ToastAndroid.SHORT)
                            })
                        setTimeout(() => {
                            if(this.state.video.length<21){
                                ToastAndroid.show('刷新成功', ToastAndroid.SHORT)
                            }else{
                                ToastAndroid.show('已经是最新数据', ToastAndroid.SHORT)
                            }
                            this.setState({refreshing: false});
                        }, 500);
                    }}


                    columnWrapperStyle={{flexDirection:"row",flex:1,justifyContent:"space-around"}}
                    data={this.state.video}
                          renderItem={({item})=> {
                              return(
                                  <TouchableWithoutFeedback onPress={() => this.props.navigate.navigate('Chat',
                                      {img:item.value.images.large,actors:item.value.casts}
                                      )}>
                                  <View style={{marginBottom:20}}>
                                      <View>
                                          <Image source={{uri: item.value.images.large}} style={{width:150,height:200}}/>
                                      </View>
                                      <View style={{flexDirection:"row",justifyContent:"center"}}>
                                          <Text>{item.value.title}</Text>
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


