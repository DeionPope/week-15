import CocktailItem from "./CocktailItem";
import AddCocktail from "./AddButton";

const CocktailList = () => {
    const [cocktails, setCocktails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    const onDeleteCocktail = (cocktailId) => {
        setCocktails((prevCocktails) => prevCocktails.filter((cocktail) => cocktail.idDrink !== cocktailId));
    };

    const onAddCocktail = (newCocktail) => {
        setCocktails((prevCocktails) => [...prevCocktails, newCocktail]);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic', {
                    params: {
                        apiKey: API_KEY,
                    },
                });

                if (response.data.drinks) {
                    setCocktails(response.data.drinks);
                } else {
                    setErrors('No non-alcoholic cocktails found.')
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
       

    return (
        <div>
            <h1>Non-Alcoholic Cocktails</h1>
            {errors && <p>{errors}</p>}
            <ul>
                {cocktails.map((cocktail) => (
                    <CocktailItem key={cocktail.idDrink} cocktail={cocktail} onDeleteCocktail={onDeleteCocktail} />
                ))}
            </ul>
            <AddCocktail onAddCocktail={onAddCocktail} />
        </div>
    );
};

export default CocktailList;