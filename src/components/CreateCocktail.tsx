const CreateCocktail = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCocktail = {
            strDrink: name,
        };

        try {
            const response = await axios.post(
                'https://www.thecocktaildb.com/api/json/v2/9973533/cocktail.php',
                newCocktail
            );

            if (response.status === 201) {
                alert("Cocktail created succcessfully!");
            setName("");
            } else {
                alert("Failed to create a new cocktail. Please try again.");
            }
        } catch (error) {
            console.error("Error creating cocktail:", error);
            alert("Failed to create a cocktail. Please try again.");
        }
    };

        return (
            <div>
                <h2>Create New Cocktail</h2>
                <form onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit">Create</button>
                </form>
            </div>
        );
    };

export default CreateCocktail;