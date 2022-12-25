import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import Clubs from "../components/Card/StudentClubs";
const CardPage = (props) => {
    const topData = props.data.slice(0, 6);
    const bottomData = props.data.slice(6);
    return (<>
    <CardHeader />
        <div className="cardWrapper" >
            {topData.map((each, index) => {
                return (<Card data={each} key={each.rollNo + index} />)
            })}
        </div>
        <div>
           <Clubs />
        </div>
        <div className="cardWrapper" >
            {bottomData.map((each, index) => {
                return (<Card data={each} key={each.rollNo + index} />)
            })}
        </div>


    </>)
}
export default CardPage;