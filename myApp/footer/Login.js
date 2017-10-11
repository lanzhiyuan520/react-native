import React, { Component } from 'react';
import { AppRegistry,Alert,ToastAndroid, Button,TextInput ,TouchableOpacity,TouchableNativeFeedback,TouchableHighlight,Image , StyleSheet, Text, View ,ScrollView} from 'react-native';
export default class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            text:"",
            check:false,
            validation:"",
            verify:"发送验证码",
            count:60,
            once:"再试一次",
            hello:"后重试",
            liked:true,
            clear:true,
            login:false
        }
        this.checked = this.checked.bind(this)
        this.click = this.click.bind(this)
        this.send = this.send.bind(this)
        this.service = this.service.bind(this)
        this.social = this.social.bind(this)
    }
    click(){
        if(!this.state.text){
           /* Alert.alert(
                "温馨提示",
                "请输入手机号",
                [{text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: '确定', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false })*/

             ToastAndroid.show('请输入手机号', ToastAndroid.SHORT)

            return false
        }else{
            if(!(/^1[34578]\d{9}$/.test(this.state.text))){
               /* Alert.alert(
                    "温馨提示",
                    "手机号有误重新填写",
                    [{text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        {text: '确定', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false })*/
                 ToastAndroid.show('手机号有误重新填写', ToastAndroid.SHORT)
                return false;
            }
            if(!this.state.validation){
               /* Alert.alert(
                    "温馨提示",
                    "请输入验证码",
                    [{text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        {text: '确定', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false })*/
                ToastAndroid.show('请输入验证码', ToastAndroid.SHORT)
                return false
            }else{
                if(this.state.verify == "发送验证码"){
                   /* Alert.alert(
                        "温馨提示",
                        "验证码错误",
                        [{text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: '确定', onPress: () => console.log('OK Pressed')},
                        ],
                        { cancelable: false })*/
                    ToastAndroid.show('验证码错误', ToastAndroid.SHORT)
                    return false
                }else{
                    if(!this.state.check){
                       /* Alert.alert(
                            "温馨提示",
                            "请阅读协议",
                            [{text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                {text: '确定', onPress: () => console.log('OK Pressed')},
                            ],
                            { cancelable: false })*/
                        ToastAndroid.show('请阅读协议', ToastAndroid.SHORT)
                        return false
                    }else{
                        /*Alert.alert(
                            "温馨提示",
                            "登录成功",
                        )*/
                        ToastAndroid.show('登录成功', ToastAndroid.SHORT)
                        this.setState({text:"",validation:""})
                        this.props.click()
                        clearInterval(this.time)
                    }
                }
            }
        }
    }
    service(){
       /* Alert.alert("温馨提示","暂时还没有服务条款！！！",  [
                {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: '确定', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false })*/
        ToastAndroid.show('暂时还没有服务条款', ToastAndroid.SHORT)
    }
    social(){
        /*Alert.alert(
            "温馨提示","等会！！！",  [
                {text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: '确定', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false })*/
        ToastAndroid.show('暂时不支持此登录', ToastAndroid.SHORT)
    }
    checked(){
        let that = this
        that.setState({check:!this.state.check})
    }
    send(){
        if(this.state.count<1){
            this.state.count = 60
            this.state.liked = true
        }
        if(!this.state.text){
            /*Alert.alert(
                "温馨提示","请输入手机号"
            )*/
            ToastAndroid.show('请输入手机号', ToastAndroid.SHORT)
            return false
        }else{
            if(!(/^1[34578]\d{9}$/.test(this.state.text))){
               /* Alert.alert(
                    "温馨提示",
                    "手机号有误重新填写",
                    [{text: '取消', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                        {text: '确定', onPress: () => console.log('OK Pressed')},
                    ],
                    { cancelable: false })*/
                ToastAndroid.show('手机号有误请重新填写', ToastAndroid.SHORT)
                return false;
            }
        }
        if(this.state.clear){
            this.setState({clear:false})
             this.time = setInterval(()=>{
                this.setState({verify:this.state.count})
                this.state.count=this.state.count-1
                if(this.state.count<1){
                    this.setState({verify:this.state.once,liked:false,clear:true})
                    clearInterval(this.time)
                }
            },1000)
        }
    }
    render() {
        let check = this.state.check?require("../../img/checked2.png"):require("../../img/checkbox.png")
        let once = this.state.liked?styles.once:styles.once1
        return (
            <View style={{backgroundColor:"#fff",paddingBottom:100}}>
                {/*<View style={{height:1,backgroundColor:"#999",marginTop:45}}></View>*/}
                <View style={styles.header}>
                    <Text style={styles.title}>快速登录</Text>
                </View>

                <View style={{paddingTop:45}}>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"center",
                        marginBottom:10
                    }}>
                        <TextInput
                            style={styles.phone}
                            placeholder="请输入手机号"
                            onChangeText={(text) => this.setState({text})}
                            value={this.state.text}
                            underlineColorAndroid={"transparent"}
                            maxLength={11}
                        />

                    </View>
                    <View style={{
                        flexDirection:"row",
                        justifyContent:"center",
                    }}>
                        <TextInput
                            style={styles.validation}
                            placeholder="请输入验证码"
                            value={this.state.validation}
                            onChangeText={(validation) => {
                                this.setState({validation})
                            }}
                        />
                        <TouchableOpacity style={{
                            width:100,
                            height:45,
                            backgroundColor:"#fff",
                            borderRadius:5,
                            flexDirection:"row",
                            justifyContent:"center",
                            alignItems:"center",
                            borderWidth:1,
                            borderColor:"#f2f2f2",
                            marginLeft:10
                        }} onPress={this.send}>
                            <Text style={once}>{this.state.verify}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop:10,
                        flexDirection:"row",
                        justifyContent:'center'
                    }}>
                        <View style={{width:335,flexDirection:"row",}}>
                            <TouchableNativeFeedback onPress={this.checked}>
                                <View ><Image source={check} style={{width:13,height:13}}/></View>
                            </TouchableNativeFeedback>
                            <View style={{marginLeft:5,marginTop:-4}}>
                                <TouchableHighlight onPress={this.service}>
                                    <Text style={{fontSize:15,color:"#262626"}}>用户服务条款</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        flexDirection:"row",
                        justifyContent:"center",
                        marginTop:20,
                    }}>
                        <View style={{width:335,height:45,}}>
                            <Button title="登录"
                                    color="#ff8080"
                                    onPress={this.click}
                            />
                        </View>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"center",marginTop:80,marginBottom:40}}>
                        <Text style={{fontSize:16,color:"#7A767A"}}>使用社交账号登录</Text>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <View style={{width:335,flexDirection:"row",justifyContent:"center"}}>
                            <TouchableNativeFeedback onPress={this.social}><Image source={require("../../img/mm.png")}
                                                                                  style={{width:45,height:45}}
                            /></TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this.social}>
                                <View><Image source={require("../../img/qq.png")}
                                             style={{width:45,height:45}}
                                /></View>
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={this.social}>
                                <View><Image source={require("../../img/sinaweibo.png")}
                                             style={{width:45,height:45}}
                                /></View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        justifyContent:"center",
        marginTop:50,
        marginBottom:35
    },
    title:{
        color:"#262626",
        fontSize:30,
        textAlign:"center"
    },
    phone:{
        height: 45,
        width:335,
        backgroundColor:"#f8f8f8",
        padding:0,
        borderRadius:5,
        fontSize:12,
        color:"#999",
        paddingLeft:30
    },
    validation:{
        width:225,
        height:45,
        backgroundColor:"#f8f8f8",
        borderRadius:5,
        paddingLeft:30,
        fontSize:12,
        padding:0,
        color:"#999",
    },
    once:{
        fontSize:12,
        color:"#ff8080"
    },
    once1:{
        fontSize:12,
        color:"#999"
    }
});