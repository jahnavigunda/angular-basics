import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-userpc',
  templateUrl: './userpc.component.html',
  styleUrls: ['./userpc.component.css']
})
export class UserpcComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

@Input('user') userName : string | undefined ;
@Input() name : string | undefined;
@ContentChild('userParagraph') userParagraph: ElementRef | undefined; 
constructor(){}

 
  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnchanges called');
    // console.log(changes);
  }

ngOnInit(): void {
  // console.log('ngOnInit called');
  // console.log(this.userParagraph);
}
ngDoCheck() {
  // console.log('ngDocheck called');
}

ngAfterContentInit(){
 // console.log('ngAfterContentInit called');
 // console.log(this.userParagraph?.nativeElement.textContent);

}
ngAfterContentChecked(){
   // console.log("after content checked called");
}
ngAfterViewInit() {
  //console.log("after view init called");
}
ngAfterViewChecked() {
  //console.log("after view checked called");
}
ngOnDestroy() {
  //console.log("ng on destroy called");
}
}
