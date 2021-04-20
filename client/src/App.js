import React, {useEffect} from 'react'
import {useDispatch, useSelector }  from 'react-redux'

import {getUsers} from './redux/actions/usersAction'

function App() {

  const dispatch = useDispatch();
 
   const users = useSelector((state)=>state.allUser )

   console.log(users);

    useEffect(() =>{
      dispatch(getUsers)
    }, []);
   

  return (
    <div className="App">
       {/* <Register/>  */}
      <h1>Hellow</h1>
    </div>
  );
}
export default App;
