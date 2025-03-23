type Info =  {
    id : number;
    name : string;
    email : string;
}

type adminInfoList = Info & {
        role : string;
        lastLogin : Date;
};


export {type Info, type adminInfoList}  // Exporting the types from types.ts file
