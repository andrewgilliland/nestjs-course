import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: '1', name: 'Alice', email: 'alice@bigco.com', role: 'INTERN' },
    { id: '2', name: 'Bob', email: 'bob@bigco.com', role: 'ENGINEER' },
    { id: '3', name: 'Charlie', email: 'charlie@bigco.com', role: 'ADMIN' },
    { id: '4', name: 'Dave', email: 'dave@bigco.com', role: 'ADMIN' },
    { id: '5', name: 'Eve', email: 'eve@bigco.com', role: 'ENGINEER' },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findUserById(id: string) {
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
}
