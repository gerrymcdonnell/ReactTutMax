import React from 'react';
import {Button} from 'react-native';

//create functional component
const fetchLocation=props=>{
    return (
        //onPress will call the handlerer function to handle event
        <Button title="get location" onPress={props.onGetLocation} />
    );
}

export default fetchLocation;