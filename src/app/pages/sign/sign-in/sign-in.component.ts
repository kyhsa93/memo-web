import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {

    private id: string = '';
    private password: string = '';
    private errorMessage: string = '';

    constructor(
        private http: Http,
        private router: Router
    ){}

    signIn() {
        this.http.get('http://localhost:5000/sign/' + this.id + '/' + this.password).
            subscribe((response: Response) => {
                if (response.json().success) {
                    console.log('response: ', response.json());
                    this.router.navigate(['']);
                    return;
                }
                this.errorMessage = 'sign fail';
            }, error => {
                this.errorMessage = 'sign fail';
        });
    }

    signUp() {
        this.router.navigate(['sign-up']);
    }
};
