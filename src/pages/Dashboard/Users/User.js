import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [users, setuser] = useState([])
  const [runUseEffect, setRun] = useState(0)

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then(res => res.json())
      .then(data => setuser(data))
  }, [runUseEffect])

  async function deleteUser(id) {
    try {
      const res = await axios.delete(`http://localhost:8000/users/${id}`);
      if(res.status === 200){
        setRun(prev => prev + 1)
      }
    } catch {
      console.log('none')
    }
  }
  const showUsers = users.map((user, index) => {
    return (
      <tr key={user.id}>
        <td>{index + 1}</td>
        <td> {user.username}</td>
        <td>{user.email}</td>
        <td style={{ textAlign: 'center' }}>
          <Link to={user.id}>
            <i className="fa-solid fa-pen-to-square" style={{ color: '#74afb9', fontSize: '20px', paddingRight: '8px', cursor: 'pointer' }}></i>
          </Link>
          <i onClick={() => deleteUser(user.id)} className="fa-solid fa-trash" style={{ color: 'red', fontSize: '20px', cursor: 'pointer' }}></i>
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
            <th>User</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {showUsers}
        </tbody>
      </table>
    </div>
  );
}
export default User;
