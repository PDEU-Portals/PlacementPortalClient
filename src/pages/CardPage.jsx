import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader";
import Clubs from "../components/Card/StudentClubs";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
const CardPage = (props) => {
    const topData = props.data.slice(0, 6);
    const bottomData = props.data.slice(6);
    return (<>
    {/* <CardHeader /> */}
    <Header />
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
        <Footer />
    </>)
}
export default CardPage;