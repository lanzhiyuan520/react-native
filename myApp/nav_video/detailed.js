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
                actors:[]
        }
    }
    componentDidMount(){
        this.setState({
            img:this.props.navigation.state.params.img,
            actors:this.props.navigation.state.params.actors
        })
    }
    render(){
        return(
            <View>
                <ScrollView>
                <View style={{flexDirection:"row",justifyContent:"center"}}>
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
                />
                </ScrollView>
            </View>
        )
    }
}