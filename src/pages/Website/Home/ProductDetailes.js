import { useEffect, useState } from "react";
import { useParams } from "react-router"

export default function ProductDetailes() {
    const [product, setproduct] = useState({});
    const params = useParams();
    useEffect(() => {
        fetch(`http://localhost:8000/products/${params.productId}`)
            .then(res => res.json())
            .then(data => setproduct(data))
    }, [])
    return (
        <div className="card-detailes">
            <img src={product.image} className="card-img-top image-detailes" alt="..." />
            <div className="card-body">
                <h5 className="">{product.title}</h5>
                <p className=" ">{product.description}</p>
                <p className=" ">Type: <span>{product.category}</span></p>
                <p className=""> Price: <span>{product.price} LE</span></p>
            </div>
        </div>
    )
}
