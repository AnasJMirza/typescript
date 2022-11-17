const user = {
    name: "Anas",
    email: "anas@gmail,com",
    isPaid: true,
}

function createUser (param: {name: string, isPaid: boolean}):{name: string, isPaid: boolean}{
    
    return {name : param.name, isPaid: param.isPaid };
    
};
console.log(createUser({name: "anas", isPaid: true}));



//  type aliases

type User = {
    name : string,
    email : string,
    isPaid : boolean
}

const createCourse = (user: User): {} => {
    
    
    return {}
}

createCourse({name: "", email: "", isPaid: false});


export {};