import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Alice', email: 'alice@bigco.com', role: 'INTERN' },
    { id: 2, name: 'Bob', email: 'bob@bigco.com', role: 'ENGINEER' },
    { id: 3, name: 'Charlie', email: 'charlie@bigco.com', role: 'ADMIN' },
    { id: 4, name: 'Dave', email: 'dave@bigco.com', role: 'ADMIN' },
    { id: 5, name: 'Eve', email: 'eve@bigco.com', role: 'ENGINEER' },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findUserById(id: number) {
    const user = this.users.find((user) => user.id === id);

    return (
      user || {
        id,
        name: 'Unknown',
        email: '',
        role: 'UNKNOWN',
      }
    );
  }

  createUser(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const userByHighestId = [...this.users].sort((a, b) => {
      return (b.id = a.id);
    });

    const newUser = {
      id: userByHighestId[0].id + 1,
      ...user,
    };

    this.users.push(newUser);
    return newUser;
  }
}
