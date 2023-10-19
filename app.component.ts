import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'billing_application';
  arr: any = [];
  myfun(a: any, b: any, c: any) {
    var amount = a.value;
    var qtn = b.value;
    var prise = c.value
    this.arr.push({ "fkey": amount, "skey": qtn, "tkey": prise })
  }
  fun2(i: any) {
    this.arr.splice(i--, 1)
    
  }
  total1: any = 0;
  i: any = 1;
  fun3(x: any, y: any) {
    if (this.arr.length < this.i)
      return;
    console.log(this.arr.length)

    this.i++;
    document.getElementsByTagName("table")[0].style.display = "block"
    var sum = x.value;
    var sum2 = y.value;
    var total = sum * sum2;

    this.total1 = total + this.total1;
    var mylogic = document.getElementById("demo")
    mylogic?.setAttribute('value', `${this.total1}`)

  }


}
