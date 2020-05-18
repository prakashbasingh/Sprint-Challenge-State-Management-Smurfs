import React, { useState} from "react";
import { connect } from 'react-redux';
import {fetchSmurfInfo, postSmurfInfo} from '../actions/smurfAction'


const smurfInitialState = {
            nameName: '',
            ageAge: '',
            heightHeight: ''
        }



const SmurfForm = (props) => {

    const [smurfInfo, setSmurfInfo] = useState(smurfInitialState)
    
    const ChangeSmurfHandle = e => {
        setSmurfInfo ({
            ...smurfInfo,
            [e.target.name]: e.target.value,
        }); 
        console.log(smurfInfo, 'What data we have here???!!!!!?????!!!!!')
    }

    const submitSmurfForm = e => {
        e.preventDefault()
        const newSmurfInfo = {
            name: smurfInfo.nameName,
            age: smurfInfo.ageAge,
            height: smurfInfo.heightHeight,
            id: Date.now()
        };console.log(newSmurfInfo, 'What newSmurfInfo data we have here???!!!!!?????!!!!!')
        props.postSmurfInfo(newSmurfInfo);

        setSmurfInfo(smurfInitialState);

    }


    return(
        <form onSubmit = {submitSmurfForm}>
            <label> Name:</label>
                <input onChange = {ChangeSmurfHandle}
                       type = 'text'
                       name = 'nameName'
                       value = {smurfInfo.nameName}/>
                <label> Age:</label>
                    <input onChange = {ChangeSmurfHandle}
                        type = 'text'
                        name = 'ageAge'
                        value = {smurfInfo.ageAge}/>
                <label> Height:</label>
                    <input onChange = {ChangeSmurfHandle}
                        type = 'text'
                        name = 'heightHeight'
                        value = {smurfInfo.heightHeight}/>
            <button> Submit Smurf Info.</button>


        </form>
        

    )
}
// export default SmurfForm



const mapStateToProps = (state) => {
    console.log({state}, "what we have here in mSTP????????")
    return {
        isFetching: state.isFetching,
        smurfs: state.smurf,
        errors: state.errors
    };
};
export default connect(mapStateToProps, {fetchSmurfInfo, postSmurfInfo})(SmurfForm);




