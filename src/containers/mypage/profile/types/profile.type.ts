import { UserRole } from 'src/types/user.type';

export type Profile = {
  createdDate: string;
  email: string;
  grade: string;
  introduction: string;
  nickname: string;
  userRole: UserRole;
};
