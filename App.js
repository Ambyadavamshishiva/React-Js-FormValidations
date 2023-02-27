
import './App.css';
import { useEffect, useState,useLayoutEffect } from 'react';

function App() {
  const [form, setform] = useState({
    username: '',
    email: '',
    occupation: '',
    language: [],
  })

const [error,seterror] = useState({});



  const OnChangeHandler = (event) => {
    console.log(event.target.value);
    if (event.target.name === 'language') {
      let copy = { ...form };
      if (event.target.checked) {
        copy.language.push(event.target.value);
        console.log(copy.target.value);
      } else {
        copy.language = copy.language.filter(el => el != event.target.value)
        setform(copy);
        console.log(copy);
      }
    } else {
      setform(() => ({
        ...form, [event.target.name]: event.target.value
      }))
    }
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('submitted', form);
    let IsFormValid = FormValidation(); 
  }

  const FormValidation=()=>{
   let err ={};
   if(form.username==''){
    err.username = 'Username is Mandatory';     
  }  
  else if(form.username.length <6){
    err.username = 'Username Should be Greater than 6 digit';     
  }  
  if(form.email==''){
    err.email = 'Email is Mandatory'
  }
  else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
  ) {
    err.email = 'Invalid email address';
  }
  if(form.language==''){
    err.language= 'Language is Mandatory'   
  }
  if(form.occupation==''){
    err.occupation= 'occupation is Mandatory'
  }

  seterror({...err});
  return false
  }

  return (
    <div className="App container">
      <form onSubmit={onSubmitHandler}>

        <h1>Form</h1>
        {/* username */}
        <div className="form-group">
          <label>User Name</label>
          <input className="form-control" type="text" name='username' onChange={OnChangeHandler} />
          <label className='err'>{error.username}</label>
        </div>

        {/* Email */}
        <div className="form-group">
          <label>email</label>
          <input className="form-control" type="email" name='email' onChange={OnChangeHandler} />
          <label className='err'>{error.email}</label>
        </div>


        {/* Occupation */}
        <div className="form-group">
          <label>Occupation</label>
          <select className='form-control' name='occupation' onChange={OnChangeHandler} >
            <option value='IT'>IT</option>
            <option value='ECE'>ECE</option>
            <option value='CSE'>CSE</option>
          </select>
          <label className='err'>{error.occupation}</label>
        </div>

        {/* Language */}
        <div className="form-group">
          <label>Language</label>
          <div className="form-check">
            <input type="checkbox" name="language" id="flexCheckDefault" value='English' onChange={OnChangeHandler} />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              English
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" name="language" id="flexCheckChecked" value='Telugu' onChange={OnChangeHandler} />
            <label className="form-check-label" htmlFor="flexCheckChecked">
              Telugu
            </label>
          </div>
          <label className='err'>{error.language}</label>
        </div>

        <div className='form-group'>
          <button className='btn btn-primary' type='submit'>Submit</button>
        </div>

      </form>
    </div>
  );
}

export default App;
