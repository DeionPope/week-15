import DeleteButton from "./DeleteButton";

const CocktailItem = ({ cocktail, onDeleteCocktail, onAddCocktail }) => {
    const { idDrink, strDrink, strDrinkThumb } = cocktail;

    const handleAddClick = () => {
        onAddCocktail(cocktail.idDrink);
        console.log(`Adding cocktail: ${cocktail.strDrink}`);

    }
    const handleDelete = () => {
        onDeleteCocktail(cocktail.idDrink);
        console.log(`Deleting cocktail: ${cocktail.strDrink}`);
    };

    return (
        <div className="cocktail-item">
            <h3>{cocktail.strDrink}</h3>
        <li>
            <img src={strDrinkThumb} alt={strDrink} className="img-thumbnail"/>
            <h3>{strDrink}</h3>
            <button onClick={handleAddClick}>Add</button>
            <button onClick={() => onDeleteCocktail(idDrink)}>Delete</button>
        </li>
        </div>
    );
};

export default CocktailItem;