import React from "react";




const Smurf = (props) => {
    console.log(props,'?????????????????????????')
    return(
        <div >
            <h4>Smurf Name: {props.smurf.name}</h4>
            <p>Smurf Age: {props.smurf.age}</p>
            <p>Smurf Height: {props.smurf.height}</p>
        </div>
    )
}
export default Smurf