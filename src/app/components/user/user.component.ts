import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Address } from '../../interfaces/address';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email: string;
  address: Address;
  hobbies: string[];
  posts: Post[];
  edit: boolean = false;

  constructor(private dataService:DataService) {
    console.log('constructor');
  }

  ngOnInit() {
    this.name ='Sherlock Holmes';
    this.age = 30;
    this.address = {
      street: '221B Baker Street',
      city: 'London',
      country: 'UK',
    };
    console.log('ngoninit');
    this.hobbies = ['Violin', 'Coding', 'Deduction'];
    this.email = 'shelocked@gmail.com';
    this.dataService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    });
  }

  onClick() {
    console.log('Hit!');
    this.name = 'Eurus Holmes';
    // this.hobbies.push('Killing');
  }

  toggleEdit() {
    this.edit = !this.edit;
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(delHobby) {
    console.log(delHobby);
    this.hobbies = this.hobbies.filter(hobby => {
      return hobby!==delHobby;
    });
  }
}