import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  getHeaders(): HttpHeaders {
    const accessToken = localStorage.getItem('access_token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    });
  }

  FormData = {
    title: '',
    category_id: '',
    type: '',
    position: '',
    roles: '',
    address: '',
    last_date: '',
    description: '',
  };

  constructor(private httpclient: HttpClient) {}

  PostIntern() {
    this.httpclient
      .post('http://localhost:8000/api/interns', this.FormData, {
        headers: this.getHeaders(),
      })
      .subscribe((resulData: any) => {
        console.log(resulData);

        this.FormData.title = '';
        this.FormData.category_id = '';
        this.FormData.type = '';
        this.FormData.last_date = '';
        this.FormData.address = '';
        this.FormData.description = '';
        this.FormData.roles = '';
        this.FormData.position = '';
      });
  }

  DisplayOneIntern() {}
}
