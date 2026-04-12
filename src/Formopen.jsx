import React, { useState } from "react";

export default function Formopen({submit}) {

    const[form,setform]=useState({
        name:'',
        email:''
    })
    const handleChange=(e)=>{
        const{name,value}=e.target
        setform((prev)=>({
            ...prev,
            [name]:value
        }))
         


    }
   const handleSubmit = (e) => {
    e.preventDefault();
    submit(form);
    setform({ name: "", email: "" }); // reset
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name" name='name' value={form.name} onChange={handleChange} />
        <input type="text" placeholder="email" name='email' value={form.email} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
