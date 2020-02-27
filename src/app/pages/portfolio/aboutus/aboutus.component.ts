import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
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
