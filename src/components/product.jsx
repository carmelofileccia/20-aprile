import {list} from "./list"
export const Product = ({title, price, image}) => {
    return (
        <article className="card">
            <img src={image} alt="Image ..."></img>
            <p>{price}</p>
            <h4>{title}</h4>
        </article>
    )
}