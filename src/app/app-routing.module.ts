import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './pages/sign/sign-in/index';
import { SignUpComponent } from './pages/sign/sign-up/index';
import { HomeComponent } from './pages/home/index';
import { PageNotFoundComponent } from './pages/page-not-found/index';

const appRoutes: Routes = [
    { path: 'sign-in', component: SignInComponent},
    { path: 'sign-up', component: SignUpComponent},
    { path: '', component: HomeComponent },
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            // { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{};
