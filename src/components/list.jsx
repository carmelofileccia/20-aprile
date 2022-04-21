
import {useState, useEffect} from "react";
import { Product} from "./product";

const mock = ["prodotto1", "prodotto2", "prodotto3"];

export const List = ({category}) => {
    const [source, setSource] = useState([]);
    const [products, setProducts] = useState(mock);
    const [isLoading, setLoading] = useState(true);


    const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products/")
        const data = await response.json()
        console.log(data);
        setProducts(data);
        setSource(data);
        setLoading(false);
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        
        const filtered = source.filter((product) => {
            if (category === "everything") {
                return products;
            } else {
                return product.category === category;
            }
            });
            
        setProducts(filtered);
        console.log("lacategoria è", category, filtered)
    },[category]);
        
    return (
        <section>
            <ul className="grid">
            { products.map ((item, index) => (
                <li key={index} className={isLoading ? "loading" : ""}>
                    <Product title={item.title} price={item.price} image={item.image}/>
                </li>
            
            ))}
            </ul>
        </section>
    )
}