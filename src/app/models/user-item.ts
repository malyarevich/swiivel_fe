export interface UserItem {
 name: string;
 id?: number;
 avatar?: string;
 role?: string;
 full_name?: string;
}

export interface ExpandUserItem {
  address: string;
  admin: number;
  city: string;
  email: string;
  full_name: string;
  id: number;
  phone: string;
  role: {
    id: number,
    role_name: string;
  };
  state: string;
  status: string;
  username: string;
  zip: string;
}
