import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialeColor: string = "#f5f5f5";
  private defaultColor: string = "#009688";
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder("#f5f5f5");
    this.setHeight(180);
   }

   @Input("pkmnBorderCard") borderColor: string;

   @HostListener("mouseenter") onMouseEnter(){
    this.setBorder(this.borderColor || "#009688");
   }

   @HostListener("mouseleave") onMouseLeave(){
    this.setBorder("#f5f5f5");
   }

   setBorder(color: string){

    let border = "solid 4px " + color;
     this.el.nativeElement.style.border = border;
    }
    
    setHeight(height: number){
      this.el.nativeElement.style.height = height + "px";
    }
}
