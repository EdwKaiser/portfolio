import '../assets/Skillbar.scss'

function Skillbar({width}) {
    
    return (
        <div className="bar__container">
            <div className="bar" style={{width: width}}>
            </div>
        </div>
    )
}

export default Skillbar