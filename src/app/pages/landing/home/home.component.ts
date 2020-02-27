import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() { }

  subscribe() {
    if (this.name !== '' && this.email !== '') {
      this.afs.collection('Subscribers').add({ name: this.name, email: this.email })
        .then(res => {
          alert(this.name + '\n We are sorry our News Letter service not availble! \n' + " We contact you soon at \n" + this.email);
          this.email = '';
          this.name = '';
        })
    }
  }

  sendContactDetail() {
    if (this.name !== '' && this.email !== '' && this.message !== '') {
      this.afs.collection('Contact Us').add({ name: this.name, email: this.email, message: this.message })
        .then(res => {
          alert(this.name + ' Your message has been sent, Thank you!');
          this.email = '';
          this.message = '';
          this.name = '';
        })
    }
  }




}
