import React, { useEffect } from "react";
import { connect } from 'react-redux';




const SmurfForm = props => {
    console.log(props, 'WWWHHHAAATTT we have here????')




    return(
        <form onsubmit = {props.submitForm}>
            <label> Name:</label>
                <input onChange = {props.handleChange}
                       type = 'text'
                       name = 'task'
                       value = {props.name}/>
                <label> Age:</label>
                    <input onChange = {props.handleChange}
                        type = 'text'
                        name = 'task'
                        value = {props.name}/>
                <label> Height:</label>
                    <input onChange = {props.handleChange}
                        type = 'text'
                        name = 'task'
                        value = {props.name}/>
            <button> Submit Smurf Info.</button>


        </form>



    )


}
const mapStateToProps = (state) => {
    console.log({state}, "what we have here in mSTP????????")
    return {
        name: state.name,
        age: state.age,
        height: state.height
    };
};
export default connect(mapStateToProps, {})(SmurfForm);




