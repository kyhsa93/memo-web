import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {

    constructor(
        private router: Router
    ){};

    home() {
        this.router.navigate(['']);
    }

    sign() {
        this.router.navigate(['sign-in']);
    }
};
