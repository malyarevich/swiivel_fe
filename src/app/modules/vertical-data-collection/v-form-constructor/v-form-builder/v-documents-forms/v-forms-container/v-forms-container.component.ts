import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-v-forms-container',
  templateUrl: './v-forms-container.component.html',
  styleUrls: ['./v-forms-container.component.css']
})
export class VFormsContainerComponent implements OnInit {
  // @ViewChild('viewer') canvasRef: ElementRef;
  public ctx: CanvasRenderingContext2D;
    canvasx;
   canvasy ;
  last_mousex = 0;
  last_mousey = 0;
  mousex =0;
  mousey = 0;
  mousedown = false;
  pdfSrc = "../../../../../../../assets/files/BBY Contract 1 Student.pdf";
  constructor() {

  }

  // ngAfterViewInit(): void {
  //   this.ctx = (<HTMLCanvasElement>this.canvasRef.nativeElement).getContext('2d');
  //   console.log(this.ctx);
  //
  // }
  ngOnInit() {

//     console.log('native element',this.canvasRef);
//    console.log(this.canvasRef.nativeElement.getBoundingClientRect(), 'try to get position');
//     this.canvasx =  this.canvasRef.nativeElement.getBoundingClientRect().x;
//     this.canvasy =  this.canvasRef.nativeElement.getBoundingClientRect().y;
// // this.canvasx = this.canvasRef.nativeElement.offsetLeft;
// // this.canvasy = this.canvasRef.nativeElement.offsetTop;
//     console.log(this.canvasx, this.canvasy, 'start canvas');
  }


  // mouseDown(e: MouseEvent){
  //   console.log('down',e);
  //   this.last_mousex = e.clientX-this.canvasx;
  //   this.last_mousey = e.clientY-this.canvasy;
  //   this.mousedown = true;
  // }
  // mouseUp(e: MouseEvent){
  //   console.log('up',e);
  //
  //   this.mousedown = false;
  // }

  // mouseMove(e: MouseEvent){
  //   // console.log('move',e);
  //
  //   this.mousex = e.clientX-this.canvasx;
  //   this.mousey = e.clientY-this.canvasy;
  //   if(this.mousedown){
  //     this.ctx.clearRect(0,0,this.canvasRef.nativeElement.width,this.canvasRef.nativeElement.height); //clear canvas
  //     this.ctx.beginPath();
  //     let width = this.mousex-this.last_mousex;
  //     let height = this.mousey-this.last_mousey;
  //      console.log(width, height, 'size');
  //     console.log(this.last_mousex, this.last_mousey, 'last in move');
  //     // this.ctx.strokeRect(18, 18, 260, 260);
  //     this.ctx.rect(this.last_mousex, this.last_mousey, width, height);
  //     // this.ctx.rect(this.mousex, this.mousey, width, height);
  //     this.ctx.strokeStyle = "black";
  //     this.ctx.lineWidth = 1;
  //     // this.ctx.lineTo(this.last_mousex,this.last_mousey);
  //     this.ctx.stroke();
  //   }
  // }
}
