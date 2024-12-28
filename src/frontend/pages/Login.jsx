import { useState } from "react";
import "../styles/login.css";

function Login() {
  const [saisie, setSaisie] = useState({
    email: "",
    password: "",
  })
  const [error , setError] = useState("");
  const [employe,setEmploye] = useState({
    email : "essabbanihassan@gmail.com",password : "123456"},
  {email : "abdessammad",password : "13724"});
  const  handleEvent = (e) => {
    e.preventDefault();
   if (saisie.email !== employe.email && saisie.password === employe.password){
      setError("email incorrect");
  }else if (saisie.email === employe.email && saisie.password !== employe.password){
    setError("password incorrect")

  }else  if(saisie.email === employe.email && saisie.password === employe.password){
    alert("Connection avec succès") 
  }else{
    setError("aucune champs correct")
  }
}
  return (
    <div className = "container">
      <div className='card'>
      <form onSubmit={handleEvent}>
        <h1>Login</h1>
        <input type='text' placeholder='Saisir votre Email' value={saisie.email} onChange={(e) => setSaisie({ ...saisie, email: e.target.value })} required />
        <input type='text' placeholder='Saisir votre password' value={saisie.password} onChange={(e) => setSaisie({...saisie , password : e.target.value})} required />
        <p>{error}</p>
        <button type='btn btn-primary'>Se connecter</button>
        </form>
      </div>  
    </div>
  )
}

export default Login;