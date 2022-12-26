import "./Card.css"
const Card = (props) => {
    const stars = (stars) => {
        return (<img style={{}} src={"./images/stars" + stars + ".png"} />)
    }

    return (<>
        
            <div className="cards" key={props.data.rollNo} >
                <img className="profilePic" src={props.data.image} />
                <div className="profileText">
                    <p style={{ margin: "0 2vw", color: "#F68C1F", fontWeight: "500" }}>
                    {props.data.rollNo}
                    </p>
                    <h6 className="font-medium">{props.data.name}</h6>
                    <p>{props.data.emailId}</p>
                </div>
                <div className="stars">
                    {stars(props.data.stars)}
                    <br />
                    <br />
                    <h6>{props.data.branch}</h6>

                </div>
                <div className="projectWrapper">
                    <div><h6 className="font-medium">{props.data.paperTitle}</h6>
                        <p>{props.data.paperBody}</p>
                    </div>
                    <div></div>
                    <div>
                        <h6 className="font-medium">{props.data.projectTitle}</h6>
                        <p>{props.data.projectBody}</p>
                    </div>
                </div>
            </div>
    </>)
}

export default Card;