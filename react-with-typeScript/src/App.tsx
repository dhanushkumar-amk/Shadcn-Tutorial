

// import AdminInfo from './Components/AdminInfo';
// import Userinfo from './Components/Userinfo';
// import { Info, adminInfoList } from './Components/types';

import Counter from "./Components/Counter"

const App = () => {

//     const user : Info = {
//         id : 1,
//         name : "John",
//         email : "jonh@gmail.com"
//     }

// const admin : adminInfoList = {
//     id: 2,
//     name : "dhanushkumar",
//     email : "dhanushkumar@gmail.com",
//     role : "admin",
//     lastLogin : new Date(),
// }

  return (
    <div>
        {/* <Userinfo user = {user} />
        <AdminInfo admin = {admin} /> */}

        <Counter/>
    </div>
  )
}

export default App
