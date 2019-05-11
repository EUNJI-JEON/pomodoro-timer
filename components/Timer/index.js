import { connect } from 'react-redux';
import {bindActionCreators} from "redux";
import { actionCreators as tomatoActions } from "../../reducer";
import Timer from "./presenter";

//copy the state from store and paste it in props of container
//스토어의 스테이트를 복사해서 컨테이너의 props에 붙여넣기. 
function mapStateToProps(state){
    const {isPlaying,elapsedTime,timerDuration} = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    };
}

function mapDispatchToProps(dispatch){
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
        addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
        
    };
}

//export default from mapStateToProps to Timer
export default connect(mapStateToProps, mapDispatchToProps)(Timer);