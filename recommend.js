import React, { Component, PropTypes } from 'react';
import { View, Text , StyleSheet , Image , TouchableHighlight ,ScrollView} from 'react-native';

export default class recommend extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <View style={{width:375,backgroundColor:"#fff",marginBottom:13}}>
                <View style={{marginLeft:15,height:38,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <View>
                        <Text style={{fontSize:14,color:"#000000"}}>{this.props.title}{this.props.video}</Text>
                    </View>
                    <View>
                        <TouchableHighlight onPress={this.props.more}>
                            <Text style={{fontSize:12,color:"#BAB8BA",marginRight:20}}>{this.props.can}{this.props.canVideo}></Text>
                        </TouchableHighlight>
                    </View>
                </View>
                <View style={{marginLeft:15,marginRight:15,height:130,flexDirection:"row"}}>
                    <ScrollView horizontal>
                        <View style={styles.line}>
                            <Image style={{width:200,height:114}} source={require("./img/img1.jpg")}/>
                        </View>
                        <View style={styles.line}>
                            <Image style={{width:200,height:114}} source={require("./img/img2.jpg")}/>
                        </View>
                        <View style={styles.line}>
                            <Image style={{width:200,height:114}} source={require("./img/img3.jpg")}/>
                        </View>
                        <View style={styles.line}>
                            <Image style={{width:200,height:114}} source={require("./img/img4.jpg")}/>
                        </View>
                        <View style={styles.line}>
                            <Image style={{width:200,height:114}} source={require("./img/img5.jpg")}/>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    line:{
        marginRight:8
    }
})