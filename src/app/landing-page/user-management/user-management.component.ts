import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/UserServive';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css'],
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];

  totalElements: number = 0;
  totalPages: number[] = [];
  currentPageNumber: number = 1;
  currentPageSize: number = 5;

  username: string = '';
  fullName: string = '';
  email: string = '';
  phoneNumber: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  search() {
    this.getUsers();
  }
  goToPreviousPage() {
    console.log('goToPreviousPage');
    this.currentPageNumber = this.currentPageNumber - 1;
    this.getUsers();
  }
  goToNextPage() {
    console.log('goToNextPage');
    this.currentPageNumber = this.currentPageNumber + 1;
    this.getUsers();
  }

  getUsers(): void {
    this.userService
      .getAllUsers(
        this.currentPageNumber,
        this.currentPageSize,
        this.username,
        this.fullName,
        this.email,
        this.phoneNumber
      )
      .subscribe(
        (response) => {
          this.users = response.data.content;
          if (this.users.length == 0) {
            this.currentPageNumber = 1;
            this.getUsers();
          }
          this.totalElements = response.data.totalElements;
          this.totalPages = Array.from(
            { length: response.data.totalPages },
            (_, index) => index + 1
          );
          this.currentPageNumber = response.data.number;
          this.currentPageSize = response.data.size;
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
