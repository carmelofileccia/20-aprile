import {useState, useEffect} from "react";

const mock = ["category 1", "category 2", "category 3"];

export const Sidebar = (props) => {
    const [current, setCurrent] = useState ("");
    const [categories, setCategories] = useState(mock);

    const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products/categories/")
        const data = await response.json()
        // data.push("Everything");
        // data.reverse();
        // data.unshift("Everything");
        const updated = ["everything"].concat(data);
        console.log(data)
        setCategories(updated)
    }
    //useEffect (callback, []) === evento di aggiunta componente in pagina
    useEffect(() => {
        console.log('è cambiato qualcosa');
        getData();
    }, []);

    const clicked =(event, category) =>{
        event.preventDefault();
        props.catSelection(category)
        setCurrent(category);
    };

    return (
        <aside>
            <h2>Categories</h2>
            <ul>
                {/* <li> <a href="/everything"> Everything</a></li> */}
                {categories.map((item, index) => (
                    <li key={index}> 
                        <a href={item} className={item === current ? "active" : ""} onClick={(event) => clicked(event,item)}>{item}</a>
                    </li>
                ))}
            </ul>
        </aside>
    )
}