import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [Categories, setCategories] = useState([]);

    const getProduct = () =>{
        fetch(`http://localhost:8000/products`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }
    const getCategories = () =>{
        fetch(`http://localhost:8000/Categories`)
        .then((res) => res.json())
        .then((data) => setCategories(data));
    }
    const getProductInCategories = (catName) =>{
        fetch(`http://localhost:8000/${catName}`)
        .then((res) => res.json())
        .then(data => setProducts(data))
    }
    useEffect(() => {
      getProduct()
      getCategories()
    }, [])

    return (
        <div>
            <h2 className="text-center">Our Product</h2>
            <div className="container">
                <div className="text-center">
                    <button className="mb-2" onClick={() => getProduct()}>All</button>
                    {
                        Categories.map((cat) => {
                            return (<button key={cat.id} className="mb-2" onClick={() => getProductInCategories(cat.Categorie)}> {cat.Categorie}</button>)
                        })
                    }
                </div>
                <div className="row">
                    {products.map((product) => {
                        return(
                            <div className="col-3 mb-1" key={product.id}>
                                <div className="card" >
                                    <img src={product.image} className="card-img-top image" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title product-title">{product.title}</h5>
                                        <p className="card-text ">{product.category}</p>
                                        <p className="card-text"> Price: <span>{product.price} LE</span></p>
                                        <Link to={`/product/${product.id}`} className="btn btn-primary">Detailes</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
