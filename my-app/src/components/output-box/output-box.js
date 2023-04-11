import "./output-box.css"

const Output = (props) => {



    return(
        <div className="output__box">
            <div className="answer">{props.num}</div>
        </div>
    )

}

export default Output;