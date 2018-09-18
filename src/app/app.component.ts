import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "simple-fun";
}

var funs: Function[] = [];
for (var i = 0; i < 6; ++i) {
  var y = i;
  funs.push(function() {
    console.log(y);
  });
}

funs.forEach((fun: Function) => {
    fun();
});
