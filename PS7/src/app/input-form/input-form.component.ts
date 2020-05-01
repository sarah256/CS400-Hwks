import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {

  inputForm;
  resultData;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { 
  	this.inputForm = this.formBuilder.group({
  	  state: '',
  	});
  	this.resultData = this.getData();
  }

  ngOnInit() {
  }

  getData() {
    this.http.get('localhost:3000/').subscribe(data => {
      this.resultData = data;
    });
  }

  onSubmit() {
  	this.submitted = true;
  }

}
