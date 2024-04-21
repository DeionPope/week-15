const AddCocktail = ({onAddCocktail}) => {
    const [name, setName] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleAddCocktail = () => {
        const newCocktail = {
            strDrink: name,
            strInstructions: instructions,
        };

        onAddCocktail(newCocktail);

        setName('');
        setInstructions('');
    };

    return (
        <div>
            <h2>Add New Cocktail</h2>
            <form>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="button" onClick={handleAddCocktail}>Add</button>
            </form>
        </div>
    );
};

export default AddCocktail;