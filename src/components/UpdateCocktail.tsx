const UpdateCocktail = ({ cocktailId, onUpdate }) => {
    const [name, setName] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updateCocktail = {
            strDrink: name,
            strInstructions: instructions,
        };

        try {
            const response = await axios.put(
                'https://www.thecocktaildb.com/api/json/v2/9973533/cocktail.php/${cocktailId',
                updateCocktail

            );

            if (response.status === 200) {
                alert("Cocktail updated successfully!");
                setName("");
                setInstructions("");
                onUpdate();
            } else {
                alert("Failed to update the cocktail. Please try again.");
            }
        } catch (error) {
            console.error("Error updating cocktail:", error);
            alert("Failed to update the cocktail. Please try again.");
        }
    };

    return (
        <div>
            <h2>Update Cocktail</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateCocktail;