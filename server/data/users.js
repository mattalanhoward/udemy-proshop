import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'matt@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Lou Dogg',
    email: 'lou@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jonah',
    email: 'jonah@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
