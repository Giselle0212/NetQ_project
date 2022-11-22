import './App.css';
import { Route, Routes } from "react-router-dom"
import LoginForm from './componets/LoginForm';
import RegistrationForm  from './componets/RegistrationForm';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/login' element={<RegistrationForm />} />

    </Routes>
    </div>
  );
}

export default App;

//   <form>
//   <div class="mb-3">
//   {/* <label class="form-label">Username</label> */}
//   <input type="text" class="form-control" placeholder='Username'>
// </div>
// <div class="mb-3">
//   {/* <label class="form-label">Last Name</label> */}
//   <input type="text" class="form-control" placeholder='Password' >
// </div>
// <div class="mb-3">
//   <label class="form-label">Password</label>
//   <input type="password" class="form-control" >
// </div>
// <div class="mb-3">
//   <label class="form-label">Confirm Password</label>
//   <input type="text" class="form-control" >
// </div>
// <div><p>Don't have an account? <link></link>Create One </p></div>
// <button type="submit" class="btn btn-primary">Submit</button>
// </form> 