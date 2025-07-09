export interface User {
  _id: string;
  name: string;
}

export interface AuthContextInterface {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  user: User | null;
}
