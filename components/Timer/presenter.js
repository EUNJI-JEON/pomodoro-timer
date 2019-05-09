import React, {Component} from "react";
import {View,Text,StyleSheet, StatusBar} from "react-native";
import Button from "../Button";


class Timer extends Component{
    render(){
        console.log(this.props);
        const {isPlaying, elapsedTime, timerDuration, startTimer, restartTimer} = this.props;
        return(
            <View style={styles.container}>
                <StatusBar barStyle={"light-content"}></StatusBar>
                <View style={styles.upper}>
                    <Text style={styles.time}>24:00</Text>
                </View>
                <View style={styles.lower}>
                    { !isPlaying && <Button iconName="play-circle" onPress={startTimer}></Button>}
                    { isPlaying && <Button iconName="stop-circle" onPress={restartTimer}></Button>}
                </View>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#f78fb3"
    },
    upper: {
        flex:2,
        justifyContent: "center",
        alignItems: "center"
    },
    lower: {
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    time: {
        color: "white",
        fontSize: 120,
        fontWeight: "100"
    }
});

export default Timer;