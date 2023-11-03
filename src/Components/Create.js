import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"



function Create() {
  const [values,setValues]=useState({
    name:'',
    email:'',
    phone:''
  })
  const navigate=useNavigate()
   const URL='http://localhost:3030/users'
  //  const URL ='https://my-json-server.typicode.com/ismail-888/json-server/users'

  const handleSubmit=(event)=>{
    event.preventDefault();
    axios.post(URL,values)
        .then(res=>{
           console.log(res);
            navigate('/')
        })
        .catch(err=>console.log(err))
  }
  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100 ">
      <div className="w-50 rouded border bg-white shadow px-5 pt-3 pb-5">
      <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>

          <div className="mb-2">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="form-control" placeholder="Enter Name"
            onChange={e=>setValues({...values,name:e.target.value})}/>
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" className="form-control" placeholder="Enter Eamil"
             onChange={e=>setValues({...values,email:e.target.value})}/>
          </div>
          <div className="mb-2">
            <label htmlFor="phone">Phone:</label>
            <input type="text" name="phone" className="form-control" placeholder="Enter Phone"
             onChange={e=>setValues({...values,phone:e.target.value})}/>
          </div>
          <button className="btn btn-success">Submit</button>
          <Link to="/" className="btn btn-primary ms-3">Back</Link>

        </form>
      </div>
    </div>
  )
}

export default Create