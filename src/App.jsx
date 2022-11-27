
// import Name from './Name';
import * as React from 'react';
import {useState, useEffect }  from 'react';

import axios from 'axios';
import TodosContext, { useStateManage } from './context/TodosContext';
import Main from './components/Main/Main';

function App() {
  const states = useStateManage()
  return (
    <div>
      <TodosContext.Provider value={states}>
        <Main/>
      </TodosContext.Provider>
    </div>
  )
}

export default App


// export default function App() {

//   const [users, setUsers] = useState([]);

//   useEffect((users) => {
//     fetch("https://reqres.in/api/users?page=2")
//     .then((res) => res.json())
//       .then((data)=>
//         setUsers(data.data.map((u)=>u.first_name + ' ' + u.last_name))
//     )
//   }, []);

//   const load = () => {
//     if (users.length > 0) return setUsers([]);
//     fetch("https://reqres.in/api/users?page=2")
//     .then((res) => res.json())
//       .then((data)=>
//         setUsers(data.data.map((u)=>u.first_name + ' ' + u.last_name))
//     )
    
//     };
//   return (
//     <div>
//       <h1>User list</h1>
//       <ul>
//         { 
//         <Name users={users} 
//         // onClick={(e) =>}
//         />
//           }
//       </ul>
//       <button
//         onClick={() => {
//           load();
//         }}
//       >
//         {users.length == 0 ? 'load' : 'clear'}
//       </button>
//     </div>
//   );
// }





