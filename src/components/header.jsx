import {useState} from "react";

export const Header = (props) => {
const [search, setSearch] = useState("");

const changing =(event, search) => {
    setSearch(event.target.value);
    console.log(search)
};
props.filSelection(search)
    return (
        <header>
            <img src="" alt="React ecommerce" />
            <form>
                <input value ={search} onChange={changing} type="text" placeholder="Search..."/>
            </form>
            
        </header>
    )
}