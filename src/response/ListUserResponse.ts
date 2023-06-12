export interface ListUserResponse {
  data: {
    content: {
      id: number;
      fullName: string;
      username: string;
      email: string;
      phoneNumber: string;
      roles: string;
      status: string;
    }[];
    number: number;
    size: number;
    totalElements: number;
    totalPages: number;
  };
  message: string[];
  code: string;
}
