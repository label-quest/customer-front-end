import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const ProgressBarComponent = props => {
    return (
        <ProgressBar now={props.progress} />
    )
};
export {ProgressBarComponent};