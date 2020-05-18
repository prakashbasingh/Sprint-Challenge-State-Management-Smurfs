import React, { useEffect } from "react";
import { connect } from 'react-redux';

import { fetchSmurfInfo} from '../actions/smurfAction'
import Smurf from './smurf'

const SmurfList = (props)  => {
    // ({isFetching, smurfs, fetchSmurfInfo, newSmurfList, deleteSmurf})
 console.log(props.smurfs, 'WWWHHHAAATTT we have here????')

    useEffect(() => {
        props.fetchSmurfInfo();

    }, []);

    return(
        <div>
            <h3>Smurf Village Citizens</h3>
            <div>
                {props.isFetching && <h4>Fetching DATA ............................</h4>}

                {props.smurfs.map(smurf => {
                        console.log(smurf, 'Do We Have Smurf Info Here???!!!!')
                        return (<Smurf key={smurf.id} smurf={smurf} id= {smurf.id}/>)
                        })
                }

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log({state}, "what we have here in smurfList mSTP????????")
    return{
        isFetching: state.isFetching,
        smurfs: state.smurfs,
        errors: state.errors,
        // newSmurfList: state.newSmurfList
    }
}


export default connect(mapStateToProps, {fetchSmurfInfo})(SmurfList)
