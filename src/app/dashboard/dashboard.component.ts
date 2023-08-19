import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Todo } from 'src/assets/user';
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user!: Todo;
  private clickTimeout = null;
  private updateTimeout = null;
  userName: any;
  userMobile: any;
  tableData: any = [];
  showEditTable: boolean = false;
  editRowID: any = "";

  todoForm = this.formBuilder.group({
    name: new FormControl("", [Validators.required]),
    mobile: new FormControl("", [Validators.required])
  });

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
  ) {
  }

  submitData() {
    
  }
}
