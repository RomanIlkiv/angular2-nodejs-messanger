import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {User} from "./user.model";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-signin',
    templateUrl: 'signin.component.html'
})
export class SigninComponent implements OnInit {
    myForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) {}

    onSubmit() {
        var user = new User(
            this.myForm.value.email,
            this.myForm.value.password
        );
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                error => console.log(error),
            );
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern('[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}')]),
            password: new FormControl(null, Validators.required),

        });
    }
}