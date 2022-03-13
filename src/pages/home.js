import React from 'react';
import me1 from '/Users/moniq/Desktop/motherearth/src/me1.jpg';
import { Button} from 'react-bootstrap';


const Home = () => {
    return (
    <><h1>Welcome To Mother Earth</h1>
    <a href="./envirochallenges">
  <Button>Click here to start your environment challenges</Button>
  </a>
    <img src={me1}  />
    </>
    )
  };
  
  export default Home;
  