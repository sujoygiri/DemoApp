import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'DemoApp';
  // dataArr: string[] = ['Demo data 1', 'Demo data 2', 'Demo data 3', 'Demo data 4'];
  // alMenuList: any[] = [];
  // clickedElement: any = null;
  // @ViewChild("rmenu") rmenu!: ElementRef<HTMLDivElement>;
  allMonths: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  firstColumn: string[] = ['Data1', 'Data2', 'Data34444443', 'Data4', 'Data5', 'Data6', 'Data7', 'Data8', 'Data9', 'Data10', 'Data11'];

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    // this.alMenuList = this.elementRef.nativeElement.querySelectorAll(".listData");
    // for (const element of this.alMenuList) {
    //   element.addEventListener('contextmenu', (event: any) => {
    //     this.clickedElement = element;
    //     this.rmenu.nativeElement.className = "show";
    //     this.rmenu.nativeElement.style.top = this.mouseY(event) + 'px';
    //     this.rmenu.nativeElement.style.left = this.mouseX(event) + 'px';
    //     event.preventDefault();
    //   }, false);
    // }
    // this.elementRef.nativeElement.addEventListener("click", (event: any) => {
    //   this.rmenu.nativeElement.className = "hide";
    // });
  }

  // mouseX(event: any) {
  //   if (event.pageX) {
  //     return event.pageX;
  //   } else if (event.clientX) {
  //     return event.clientX + (document.documentElement.scrollLeft ?
  //       document.documentElement.scrollLeft :
  //       document.body.scrollLeft);
  //   } else {
  //     return null;
  //   }
  // }

  // mouseY(event: any) {
  //   if (event.pageY) {
  //     return event.pageY;
  //   } else if (event.clientY) {
  //     return event.clientY + (document.documentElement.scrollTop ?
  //       document.documentElement.scrollTop :
  //       document.body.scrollTop);
  //   } else {
  //     return null;
  //   }
  // }

  // changeBackgroundColor(colorNameOrHex: string) {
  //   console.log(colorNameOrHex + this.clickedElement);
  //   this.clickedElement.style.backgroundColor = colorNameOrHex;
  // }

}
