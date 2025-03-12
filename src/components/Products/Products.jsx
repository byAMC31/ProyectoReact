import './Products.css'

//Componente con arrow function
// Props desestructurados

const Products = ( {image, title, description, price, alt} ) => {
    return (
        <div className='card--container'>
            <div className="product--card">
                <img src={image} alt={alt} />
                <h2>{title}</h2>
                <p>{description}</p>
                <h3>{price}</h3>
            </div>

        </div>
    )
}

export default Products;


