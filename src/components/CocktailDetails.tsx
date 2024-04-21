const CocktailDetails = ({ cocktailName }) => {
    const [CocktailDetails, setCocktailDetails] = useState(null);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`)
            .then((response) => {
                if (response.data.drinks && response.data.drinks.length > 0) {
                    setCocktailDetails(response.data.drinks[0]);
                } else {
                    setErrors('Cocktail not found.');
                    setCocktailDetails(null);
                }
            })
            .catch ((error) => {
                console.error('Error fetching cocktail details:', errors);
                setErrors('Error fetching cocktail details.')
                setCocktailDetails(null);
            });
    }, [cocktailName]);

    if (!CocktailDetails) {
        return <p>Cocktail not found or an error occured.</p>;
    }

    return (
        <div>
            <h2>{CocktailDetails.strDrink}</h2>
            <p>{CocktailDetails.strInstructions}</p>
        </div>
    );
};

export default CocktailDetails;