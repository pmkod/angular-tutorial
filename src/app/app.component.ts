import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { PracticeComponent } from "./practice/practice.component";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, PracticeComponent],
	// templateUrl: './app.component.html',
	template: `
  <!-- <h1>
    My title is {{title}}
    Age {{age}}
  </h1>
  <p>
    Val {{counter}}

    <button (click)="increment()">
Increment
    </button>

        <button (click)="decrement()">
Decrement
    </button>
  </p>

  <div>

  <input type="text" #myInput (input)="onEdit(myInput.value)">
  <p>{{theValue}}</p>

  <div>
    <div [class]="messageClass">Message ...</div>
    <button (click)="changeColor('success')">Success</button>
    <button (click)="changeColor('error')">Error</button>
  </div>
</div> -->
<app-practice />
  `,
	// styleUrl: "./app.component.scss",
	styles: [".success{color: green} .error{color: red}"],
})
export class AppComponent {
	title = "ABA";

	age = 22;
	counter = 0;

	theValue = "";
	messageClass: "success" | "error" = "success";

	increment() {
		this.counter += 1;
	}
	decrement() {
		this.counter -= 1;
	}

	onEdit(value: string) {
		console.log(value);
		this.theValue = value;
	}

	changeColor(style: "success" | "error") {
		this.messageClass = style;
	}
}
