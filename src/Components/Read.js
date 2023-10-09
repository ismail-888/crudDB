import axios from "axios"
import { useState,useEffect } from "react"
import { Link, useParams } from "react-router-dom"


function Read() {

  const [data,setData]=useState([])
  const{id}=useParams();
  // const URL='http://localhost:3030/users/'
  const URL ='https://my-json-server.typicode.com/ismail-888/json-server/users/'
    useEffect(()=>{
        axios.get(URL+id)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
      },[id])
  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100 w-100">
       <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h3>Detail of User</h3>

        <div className="mb-2">
            <strong>Name: {data.name}</strong>
        </div>

        <div className="mb-2">
            <strong>Name: {data.email}</strong>
        </div>

        <div className="mb-3">
            <strong>Name: {data.phone}</strong>
        </div>

        <Link to={`/update/${id}`} className="btn btn-success">Edit</Link>
        <Link to='/' className="btn btn-primary ms-3">Back</Link>

       </div>
    </div>
  )
}

export default Read