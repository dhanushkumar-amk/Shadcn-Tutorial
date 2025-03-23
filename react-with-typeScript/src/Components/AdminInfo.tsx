
import React from "react";
import { adminInfoList } from "./types"


type adminInfoProp = {
    admin: adminInfoList;
    }

const AdminInfo : React.FC<adminInfoProp> = ({admin}) => {
  return (
    <div>
        <h2>admin Information</h2>
        <p>id : {admin.id}</p>
        <p>name : {admin.name}</p>
        <p>email : {admin.email}</p>
        <p>role : {admin.role}</p>
        <p>last login : {admin.lastLogin.toString()}</p>
    </div>
  )
}

export default AdminInfo
