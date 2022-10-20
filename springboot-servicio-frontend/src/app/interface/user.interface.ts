export interface UserInterface {
  userName: string;
  userPassword: string;
  enabled: boolean;
  nombre: string;
  apellidos: string;
  email: string;
  birthDate: string;
  roles: Role[];
  id: number;
}

export interface Role {
  roleName: string;
  id: number;
}