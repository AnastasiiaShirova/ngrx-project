import {User} from "../interfaces/user.interface";

export const mockUsers: (User & { password:string })[] = [{
  id: 1,
  login: 'admin',
  name: 'Admin',
  surname: "Admin-surname",
  date: '2020-06-12T07:05:00.000Z',
  city: 'Moscow',
  password: 'admin',
},
  {
    id: 2,
    login: 'second-admin',
    name: 'Masha',
    surname: "Ivanova",
    date: '2020-05-19T07:10:00.000Z',
    city: 'Saint-Petersburg',
    password: 'mashapassword256',
  },
  {
    id: 3,
    login: 'third-admin',
    name: 'Petya',
    surname: "Ivanov",
    date: '2023-06-12T07:05:00.000Z',
    city: 'Vladivostok',
    password: 'petya4752',
  }]
