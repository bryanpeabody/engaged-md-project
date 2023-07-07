import "./ValidationResults.css"

//
// Validation Results component
// Displays a valid or invalid message in the UI
//
function ValidationResults(props) {
    let result = '';
    
    if (props.isValid === 1) {
        result = <div className="alert alert-success" role="alert">Valid!</div>
    } else if (props.isValid === -1) {
        result = <div className="alert alert-danger" role="alert">Invalid!</div>
    }    

    return (
        <div className="spacing-top">{result}</div>
    )
}

export default ValidationResults