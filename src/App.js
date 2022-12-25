// import 'bootstrap/dist/css/bootstrap.min.css';
// import CarouselExample from "./components/Carousel";
import CardPage from "./pages/CardPage.jsx"
import data from "./components/Card/CardData"
function App() {
  
      
  return (
    <div className="App">
      {/* <CarouselExample /> */}
      <CardPage data={data} />
    </div>
  );
}

export default App;