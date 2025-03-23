import React from "react";
import { Info } from "./types"

type userInfoProp = {
    user : Info;
}

const Userinfo: React.FC<userInfoProp> = ({user}) => {
  return (
    <div>
        <h2>User Information : </h2>
        <p>ID : {user.id}</p>
        <p>Name : {user.name}</p>
        <p>Email : {user.email}</p>
        </div>
  )
}

export default Userinfo
