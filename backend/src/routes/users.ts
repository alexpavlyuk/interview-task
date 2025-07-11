import users, { User } from "../models/user";

export default async function userRoutes(fastify: any, options: any) {
  // GET / - Get all users
  fastify.get("/", async (request: any, reply: any) => {
    if (process.env.NODE_ENV !== 'production') {
      await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    return users;
  });

  // GET /:id - Get user by ID
  fastify.get("/:id", async (request: any, reply: any) => {
    const { id } = request.params;
    const userId = parseInt(id);
    
    const user = users.find(u => u.id === userId);
    
    if (!user) {
      reply.code(404);
      return { error: "User not found" };
    }
    
    return user;
  });

  // POST / - Create new user
  fastify.post("/", async (request: any, reply: any) => {
    const { name, email, age } = request.body;
    
    // Basic validation
    if (!name || !email || !age) {
      reply.code(400);
      return { error: "Missing required fields: name, email, age" };
    }
    
    // Generate new ID
    const newId = Math.max(...users.map(u => u.id)) + 1;
    
    const newUser: User = {
      id: newId,
      name,
      email,
      age: parseInt(age)
    };
    
    users.push(newUser);
    
    reply.code(201);
    return newUser;
  });

  // PUT /:id - Update user by ID
  fastify.put("/:id", async (request: any, reply: any) => {
    const { id } = request.params;
    const userId = parseInt(id);
    const { name, email, age } = request.body;
    
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
      reply.code(404);
      return { error: "User not found" };
    }

    if (name !== undefined) users[userIndex].name = name;
    if (email !== undefined) users[userIndex].email = email;
    if (age !== undefined) users[userIndex].age = parseInt(age);
    
    return users[userIndex];
  });

  // DELETE /:id - Delete user by ID
  fastify.delete("/:id", async (request: any, reply: any) => {
    const { id } = request.params;
    const userId = parseInt(id);
    
    const userIndex = users.findIndex(u => u.id === userId);
    
    if (userIndex === -1) {
      reply.code(404);
      return { error: "User not found" };
    }
    
    const deletedUser = users.splice(userIndex, 1)[0];
    
    return { 
      message: "User deleted successfully", 
      user: deletedUser 
    };
  });
}