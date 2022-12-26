import CardPage from "./pages/CardPage.jsx"
import data from "./components/Card/CardData"
function App() {
    
  return (
    <div className="App">
      <CardPage data={data} />
    </div>
  );
}

export default App;
