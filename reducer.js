//Import


//Actions

const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';


//Action Creators

function startTimer(){
    return{
        type: START_TIMER
    };
}

function restartTimer(){
    return{
        type: RESTART_TIMER
    };
}

function addSecond(){
    return{
        type:ADD_SECOND
    };
}
//Reducer
const TIMER_DURATION = 1500;

const initialState = {
    isPlaying: false,
    elapsedTime:0,
    timerDuration: TIMER_DURATION
};

// return하는 애들은 transformations
function reducer(state= initialState, action){
    switch(action.type){
        case START_TIMER:
        return applyStartTimer(state, action);

        case RESTART_TIMER:
        return applyRestartTimer(state, action);

        case ADD_SECOND:
        return applyAddSecond(state, action);

        default:
        return state;
    }
}

//Reducer Functions

function applyStartTimer(state,action){
    return{
        ...state,
        isPlaying:true
    };
}

function applyRestartTimer(state,action){
    return{
        ...state,
        isPlaying:false,
        elapsedTime:0
    }
}

function applyAddSecond(state, action){
    if(state.elapsedTime < TIMER_DURATION){
        return{
            ...state,
            elapsedTime: state.elapsedTime +1
        };
    } else {
        return{
            ...state,
            isPlaying:false
        };
    }
}
//Export Action Creators

const actionCreators = {
    startTimer,
    restartTimer,
    addSecond
};

export { actionCreators};

//Export Reducer

export default reducer;