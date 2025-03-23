type userShape = {
    name : string;
    age : number;
    isStudent : boolean;
}

const User = ({name, age, isStudent} : userShape) => {
  return (
    <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{isStudent}</h2>
    </div>
  )
}

export default User
