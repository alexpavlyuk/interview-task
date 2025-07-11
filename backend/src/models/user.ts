// User interface with required properties: id, name, email, age
export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Array to store users in memory
let users: User[] = [
  { 
    id: 1, 
    name: "Pelayo", 
    email: "pelayo@goodcompany.es",
    age: 21
  },
  { 
    id: 2, 
    name: "Nacho", 
    email: "nacho@goodcompany.es", 
    age: 22 
  },
  { 
    id: 3, 
    name: "César", 
    email: "cesari@goodcompany.es", 
    age: 22 
  },
  { 
    id: 4, 
    name: "Andreas", 
    email: "andreas@goodcompany.es", 
    age: 22 
  },
  { 
    id: 5, 
    name: "Alex", 
    email: "alex@goodcompany.es", 
    age: 19 
  }
];

export default users;