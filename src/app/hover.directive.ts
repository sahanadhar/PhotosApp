import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHover]"
})
export class HoverDirective {
  constructor(el: ElementRef) {
    console.dir(el.nativeElement);
    const attachedelement = el.nativeElement as HTMLElement;
    attachedelement.classList.add("zoom");
    attachedelement.addEventListener("click", e => {
      attachedelement.classList.remove("zoom");
      console.log(e);
    });
  }
}
