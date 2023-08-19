import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TestServiceService } from '../test-service.service';
import { Validators,FormBuilder,FormControl,FormGroup, MinValidator } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {
  @ViewChild("tref",{read:ElementRef})tref: ElementRef | undefined;
  @ViewChildren("el", {read:ElementRef }) children: QueryList<ElementRef> | undefined
  @Output() dataEvent = new EventEmitter<string>();
  isClicked: boolean | undefined = false;
  result: any;
  data = "message from child to parent";
  loginForm!: FormGroup;
  submitted = false;
  loading = false;
  returnUrl!: string;

  constructor(private el:ElementRef,private router: Router,private test:TestServiceService, private formBuilder: FormBuilder){
  }
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required]
    });

    // get return url from route parameters or default to '/'
    // this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  

  
  emitData(){
    this.dataEvent.emit(this.data);
  }
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log("invalid")
      return;
    }

    this.loading = true;
    this.router.navigate(['/dashboard']);
    // this.accountService
    //   .login(this.f.email.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate([this.returnUrl]);
    //     },
    //     error => {
    //       this.alertService.error(error);
    //       this.loading = false;
    //     }
    //   );
  }
  get f() {
    return this.loginForm.controls;
  }
}
