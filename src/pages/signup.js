import React  from 'react';



function sayHello() {
  alert('You are all signed up!');
}
const Signup = () => {
    return <> <h1>Signup and you will recieve a sustainability text to your phone.</h1>
       <form >
      <label>Enter your Phonenumber:
        <input type="text" />
      </label>
    </form>
    <p>Example +10123456789</p>
    <button onClick={sayHello}>Signup</button>;
</>
  };
  
  export default Signup;