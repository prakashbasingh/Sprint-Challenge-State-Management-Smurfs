import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';


const smurfInitialState = {
            nameName: '',
            ageAge: '',
            heightHeight: ''
        }



const SmurfForm = props => {
    // console.log(props, 'WWWHHHAAATTT we have here????')

    const [smurfInfo, setSmurfInfo] = useState(smurfInitialState)
    
    const ChangeSmurfHandle = e => {
        setSmurfInfo ({
            ...smurfInfo,
            [e.target.name]: e.target.value,
        },console.log(smurfInfo, 'What data we have here???!!!!!?????!!!!!')
        ); 
    }

    const submitSmurfForm = e => {
        e.preventDefault()
        const newSmurfInfo = {
            name: smurfInfo.nameName,
            age: smurfInfo.ageAge,
            height: smurfInfo.heightHeight,
            id: Date.now()
        };console.log(newSmurfInfo, 'What newSmurfInfo data we have here???!!!!!?????!!!!!')
        setSmurfInfo(smurfInitialState)
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
const mapStateToProps = (state) => {
    console.log({state}, "what we have here in mSTP????????")
    return {
        isFetching: state.isFetching,
        smurfs: state.smurf,
        error: state.error
    };
};
export default connect(mapStateToProps, {})(SmurfForm);




