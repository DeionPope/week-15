import './App.css';
import CocktailList from "./components/CocktailList";
import CocktailDetails from "./components/CocktailDetails";
import DeleteButton from "./components/DeleteButton";
import AddButton from "./components/AddButton";
import CreateCocktail from "./components/CreateCocktail";
import UpdateCocktail from "./components/UpdateCocktail";

function App() {
  const cocktailName = "After Glow";
  return (
    <div className="App">
      <h1>Non-Alcoholic Cocktails</h1>
      <CreateCocktail />
      <UpdateCocktail />
      <CocktailList />
      <AddButton />
      <DeleteButton />
      <CocktailDetails cocktailName={cocktailName} />
      
    </div>
  );
}

export default App;