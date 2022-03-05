import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  miForm: FormGroup = this.fb.group({
    name: ['fran',[Validators.required]],
    email: ['test1@gmail.com',[Validators.required,Validators.email]],
    password: ['123456',[Validators.required,Validators.minLength(5)]],
  })

  constructor(private fb:FormBuilder,
              private router:Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }


  register(){
    const {name,email,password} =this.miForm.value;
    this.authService.registerUser(name,email,password)
    .subscribe(resp => {
      if(resp === true){
        Swal.fire('Registrado con exito!!','', 'success');
        this.router.navigateByUrl('/dashboard');
      }else{
        Swal.fire('Error',resp, 'error');
      }
    })
  }



}
