import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';
import { URlService } from '../Services/url.service';
import { UserDdetail } from '../Services/User/add-user-ddetail.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  repeatPass = 'none';
  formdata: UserDdetail = {
    firstname: '',
    lastname: '',
    login: '',
    pwd: '',
    state: false,
    role: ''
  };

  registerForm = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern('[a-zA-Z].*')
    ]),
    login: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)
    ]),
    role: new FormControl('', [Validators.required]),
    rpwd: new FormControl('')
  });

  get FirstName(): FormControl {
    return this.registerForm.get('firstname') as FormControl;
  }

  get LastName(): FormControl {
    return this.registerForm.get('lastname') as FormControl;
  }

  get login(): FormControl {
    return this.registerForm.get('login') as FormControl;
  }

  get pwd(): FormControl {
    return this.registerForm.get('pwd') as FormControl;
  }

  get role(): FormControl {
    return this.registerForm.get('role') as FormControl;
  }

  get rpwd(): FormControl {
    return this.registerForm.get('rpwd') as FormControl;
  }

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private urlService: URlService
  ) {}
  
  
  ngOnInit(): void {}

  registerSubmitted(): void {
    if (this.pwd.value === this.rpwd.value) {
      const data = this.formdata;
      console.log(this.formdata)
      const config = {
        method: 'post',
        url: this.urlService.UserUrl,
        headers: {
          'Content-Type': 'application/json'
        },
        data
      };

      axios(config)
        .then((response) => {
          console.log(response);
          if (response.status === 201) {
            this.router.navigate(['GestUser']);
            this.toastr.success('User Add');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      this.repeatPass = 'inline';
    }
  }
}
