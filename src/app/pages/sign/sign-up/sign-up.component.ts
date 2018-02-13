import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

    private id: string = '';
    private password: string = '';
    private name: string = '';
    private email: string = '';
    private errorMessage: string = '';

    private  idReg = /^[a-z]+[a-z0-9]{3,14}$/g;
    private  nameReg = /^[a-z]{1,20}$/g;
    private  passwordReg = /^[a-z0-9]{10,20}$/g;
    private  phoneReg = /^\d{3,4}-\d{3,4}-\d{3,4}$/g;
    private  emailReg
    = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    constructor(
        private http: Http,
        private router: Router
    ){}

    submit() {
        if (!this.id.match(this.idReg)) {
            this.errorMessage = 'Invalid id';
            return;
        } else if (!this.password.match(this.passwordReg)) {
            this.errorMessage = 'Invalid password';
            return;
        } else if (!this.name.match(this.nameReg)) {
            this.errorMessage = 'Invalid name';
            return;
        } else if (!this.email.match(this.emailReg)) {
            this.errorMessage = 'Invalid email';
            return;
        }

        let signData = {
            "id": this.id,
            "name": this.name,
            "password": this.password,
            "email": this.email
        };

        this.http.post('http://localhost:5000/sign', signData).
            subscribe(response => {
                this.router.navigate(['']);
            }, error => {
                this.errorMessage = 'sign up fail';
        });
    }
};
