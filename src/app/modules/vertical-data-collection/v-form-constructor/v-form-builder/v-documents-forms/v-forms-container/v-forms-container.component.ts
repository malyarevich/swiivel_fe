import {Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit, OnDestroy} from '@angular/core';
import {fromEvent, Subscription} from "rxjs";
import {pairwise, switchMap, takeUntil} from "rxjs/operators";
import {PDFDocumentProxy} from 'ng2-pdf-viewer/src/app/pdf-viewer/pdf-viewer.module';
import {FormsDivModel, FormsPDFModel} from "../model/formsPDF.model";
import {Field} from "../../../../model/field.model";

@Component({
  selector: 'app-v-forms-container',
  templateUrl: './v-forms-container.component.html',
  styleUrls: ['./v-forms-container.component.scss']
})
export class VFormsContainerComponent implements AfterViewInit, OnDestroy {
  @Input() width = 816;
  @Input() height = 1056;
  @Input() existingFields: Field[];
  @Input() formsPDF: FormsPDFModel[];
  @ViewChild('viewer') canvas: ElementRef;

  sectionName: string = "School Forms";
  sectionWidth: string = "4 Columns";


  pdfSrc = "../../../../../../../assets/files/BBY Contract 1 Student.pdf";
  canvasEl: HTMLCanvasElement;
  cx: CanvasRenderingContext2D;
  drawingSubscription: Subscription;
  lastPos;
  finalPos;
  divs: FormsDivModel[] = [];

  constructor() {}






  ngAfterViewInit() {
    // get the context
    this.canvasEl = this.canvas.nativeElement;
    this.cx = this.canvasEl.getContext('2d');

    // set the width and height
    this.canvasEl.width = this.width;
    this.canvasEl.height = this.height;

    // set some default properties about the line
    this.cx.lineWidth = 3;
    this.cx.lineCap = 'round';
    this.cx.strokeStyle = '#000';
    this.cx.fillStyle = '#fff';

    // we'll implement this method to start capturing mouse events
    this.captureEvents(this.canvasEl);
  }




  mouseDown(e){
    const rect = this.canvasEl.getBoundingClientRect();
    this.lastPos ={
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }
  mouseUp(e){
    const rect = this.canvasEl.getBoundingClientRect();
    this.finalPos ={
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
    const div: FormsDivModel={
      top: this.lastPos.y,
      left: this.lastPos.x,
      width: this.finalPos.x-this.lastPos.x,
      height: this.finalPos.y-this.lastPos.y,
      isEdit: true
    };
    if(div.height>5&&div.width>5) this.divs.push(div);

  }

  loadComplete(pdf: PDFDocumentProxy){
    // console.log(pdf);
  }


  captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from teh canvas element
    this.drawingSubscription = fromEvent(canvasEl, 'mousedown')
      .pipe(
        // map(res=>console.log(res.clientX, 'map')),
        switchMap(e => {
          // console.log(e);
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, 'mousemove').pipe(
            // we'll stop (and unsubscribe) once the user releases the mouse
            // this will trigger a 'mouseup' event
            takeUntil(fromEvent(canvasEl, 'mouseup')),
            // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
            takeUntil(fromEvent(canvasEl, 'mouseleave')),
            // pairwise lets us get the previous value to draw a line from
            // the previous point to the current point
            pairwise()
          );
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        // console.log(res[0].type, res[1].type);
        const rect = canvasEl.getBoundingClientRect();

        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };

        // this method we'll implement soon to do the actual drawing
        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  drawOnCanvas(
    prevPos: { x: number; y: number },
    currentPos: { x: number; y: number }
  ) {
    // incase the context is not set
    if (!this.cx) {
      return;
    }
    this.cx.clearRect(0,0,this.width, this.height)
    // start our drawing path
    this.cx.beginPath();

    // we're drawing lines so we need a previous position
    if (prevPos) {
      // sets the start point
      //  this.cx.moveTo(prevPos.x, prevPos.y); // from
      // draws a line from the start pos until the current position
      // this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.rect(this.lastPos.x, this.lastPos.y, currentPos.x-this.lastPos.x,currentPos.y-this.lastPos.y);
      this.cx.fill();
      // strokes the current path with the styles we set earlier
      this.cx.stroke();
    }
  }

  styleObject(div:FormsDivModel){
    return {
      'top': div.top +'px',
      'left': div.left +'px',
      'width': div.width +'px',
      'height': div.height +'px'
    }
  }
  ngOnDestroy() {
    // this will remove event lister when this component is destroyed
    this.drawingSubscription.unsubscribe();
  }
}
