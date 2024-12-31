import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
  const [products, setproducts] = useState([])
  const [runUseEffect, setRun] = useState(0)

  useEffect(() => {
    fetch('http://localhost:8000/products')
      .then(res => res.json())
      .then(data => setproducts(data))
  }, [runUseEffect])

  async function deleteUser(id) {
    try {
      const res = await axios.delete(`http://localhost:8000/products/${id}`);
      if(res.status === 200){
        setRun(prev => prev + 1)
      }
    } catch {
      console.log('none')
    }
  }
  const showProducts = products.map((product, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td> {product.title}</td>
        <td>{product.category}</td>
        <td style={{ textAlign: 'center' }}>
          <i onClick={() => deleteUser(product.id)} className="fa-solid fa-trash" style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }}></i>
        </td>
      </tr>
    )
  }
  )
  return (
    <div style={{ padding: '20px', width: '80%' }}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {showProducts}
        </tbody>
      </table>
    </div>
  );
}
export default Products;
