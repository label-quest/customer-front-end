import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const ProgressBarComponent = props => {
	console.log("props")
	console.log(props);
    return (
    	<div>
    	<h2>Overall progress, {props.data.progressjson.progress}%</h2>
        <ProgressBar now={props.data.progressjson.progress} />
        </div>
    )
};
export {ProgressBarComponent};