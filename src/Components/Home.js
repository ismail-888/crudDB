import axios from "axios"
import { useEffect, useState, } from "react"
import { Link} from "react-router-dom"



function Home() {
    const [data,setData]=useState([])
    // const navigate=useNavigate();
    const URL='http://localhost:3030/users'
    //  const URL ='https://my-json-server.typicode.com/ismail-888/json-server/users'
    
    useEffect(()=>{
        axios.get(URL)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])

    const handleDelete=(id)=>{
        const confirm=window.confirm("Would you like ot Delete ?")
        if(confirm){
            axios.delete('http://localhost:3030/users/'+id)
            .then(res=>{
                console.log(res)
                
                window.location.reload();
              
            }).catch(err=>console.log(err))
        }
    }
   
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
        <h1>List Of Users</h1>
        <div className="w-75 rounded bg-white border shadow p-4">
            
            <div className="d-flex justify-content-end">
                <Link to="/create" className="btn btn-success">Add +</Link>
                </div>
            
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((d,i,)=>(
                            <tr key={i}>
                                <td>{d.id}</td>
                                <td>{d.name}</td>
                                <td>{d.email}</td>
                                <td>{d.phone}</td>
                                <td>
                                    <Link to={`/read/${d.id}`} className="btn btn-sm btn-info me-2">Read</Link>
                                    <Link to={`/update/${d.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                    <button onClick={() =>handleDelete(d.id)} className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )

}

export default Home