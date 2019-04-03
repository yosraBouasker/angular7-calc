import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  message='';
  operation = '';
  number='';
  btnClicked(op){
    if (op in ['0','1','2','3','4','5','6','7','8','9','.']){
      this.number=this.number+op;
      this.message = this.number;
    }
    else {
      this.message=op;
      this.number='';
    }
    this.operation = this.operation + op;
  }

  result(){
      this.message = eval(this.operation);
      this.operation = '';
      this.number = '';
  }

  clear(){
    this.message = '';
    this.number = '';
    this.operation = '';
    
  }
}
