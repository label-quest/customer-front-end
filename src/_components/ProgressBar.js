import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const ProgressBarComponent = props => {
	console.log("props")
	console.log(props);
    return (
    	<div className="progressbar">
    	<h2>Overall progress, {props.data.progressjson.progress}%</h2>
        <ProgressBar animated now={props.data.progressjson.progress} />
        </div>
    )
};
export {ProgressBarComponent};