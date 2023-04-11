
import './number-box.css';


const Number = (props) => {
        
        const {data} = props;
        const el = data.map(item => {
            const {id, style, text, } = item;
            const {click} = props;
            return(
                <button className={style} onClick={click} id={id}>{text}</button>
            )
        })

        return(
            <div className='buttons'>
                {el}
            </div>
        )
    
    

}

export default Number;