import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
// import {Field} from "../../../../../model/field.model";
// import {
//   FormPDFSignatureModel,
//   FormPDFTemporaryField,
//   FormsDivModel,
//   FormsPDFModel
// } from "../../model/formsPDF.model";
import {fromEvent, Subscription} from "rxjs";
import {PDFDocumentProxy, PDFProgressData} from "pdfjs-dist";
import {pairwise, switchMap, takeUntil} from "rxjs/operators";
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'sw-form-drawing',
  templateUrl: './form-drawing.component.html',
  styleUrls: ['./form-drawing.component.scss']
})
export class FormDrawingComponent implements AfterViewInit, OnDestroy, OnInit, OnChanges{
  searchText: string = '';
  @Input() width = 816;
  @Input() pages: number;
  @Input() height = 1056;
  @Input() existingFields: any[];
  @Input() formsPDF: any;
  @Input() sideBar: any;
  @Input() form: any;
  @ViewChild('viewer', { static: true }) canvas: ElementRef;

  showAddButtonTemporary: boolean = false;
  canvasEl: HTMLCanvasElement;
  cx: CanvasRenderingContext2D;
  drawingSubscription: Subscription;
  lastPos;
  finalPos;
  loading: boolean = false;
  page =1;
  drawingType: string = "system";
  temporaryField: any[] = [];
  loadingPoc: number;

  signatureOptions = [
    {
      label: 'E-signature',
      value: true
    },
    {
      label: 'Wet Signature',
      value: false
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }



  editDivChange(div:any){
    if(this.formsPDF.isEdit && div.type==this.drawingType)     div.isEdit=!div.isEdit;

  }

  changeTypeDraw(e){
    this.formsPDF.form.fieldsPdf.forEach( page=>{
      page.forEach(div=>{
        div.isEdit=false;
      })
    })
  }


  addTempField(name: string, div: any) {
    if(name.length<1) return;
    if (!div.fields) { div.fields = []; }
    div.fields.push({id: uuid(),name: name});
    this.temporaryField.push({id: uuid(),name: name});
    this.showAddButtonTemporary=false;
  }

  linkFieldToDiv(field: any, div: any):void{
    if(div.linkedField == undefined || div.linkedField.mapped == null || field.mapped != div.linkedField.mapped) {
      div.linkedField = field;
      return;
    }
    div.linkedField = null;
  }

  onError(error: any) {
    console.log(error, 'error');
  }

  removeDiv(id: string):void{
    this.formsPDF.form.fieldsPdf[this.page-1]=this.formsPDF.form.fieldsPdf[this.page-1].filter(div=>div.id!=id);
  }


  onProgress(progressData: PDFProgressData) {
    // do anything with progress data. For example progress indicator)
    this.loadingPoc = progressData.loaded / progressData.total * 100;
    this.loading=progressData.loaded<=progressData.total;
  }
  logType(){
    // console.log(this.drawingType);
  }

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

  editToggle() {
    console.log('this.formsPDF.isEdit', this.formsPDF.isEdit)
    this.formsPDF.isEdit = !this.formsPDF.isEdit;
  }

  setDrawingType(t: string) {
    if (t) {
      this.drawingType = t;
      // this.changeTypeDraw(t);
    }
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

    const div: any={
      id: uuid(),
      top: Math.min(this.lastPos.y,this.finalPos.y),
      left: Math.min(this.lastPos.x,this.finalPos.x),
      width: Math.abs(this.finalPos.x-this.lastPos.x),
      height: Math.abs(this.finalPos.y-this.lastPos.y),
      isEdit: false,
      type: this.drawingType
    };
    if(this.drawingType=='signature'){
      div.linkedField = <any>{
        id: uuid(),
        isE: true,
        isSystem: true,
        isBothParents: false
      }
    }
    if(div.height>5&&div.width>5){
      if(!this.formsPDF.form.fieldsPdf[this.page-1]) this.formsPDF.form.fieldsPdf[this.page-1]=[];
      this.formsPDF.form.fieldsPdf[this.page-1].push(div);
    }
    this.cx.clearRect(0,0,this.width, this.height);


  }

  loadComplete(pdf: PDFDocumentProxy){
    let pages = pdf.numPages;
    while (pages){
      if(!this.formsPDF.form.fieldsPdf[pages-1]) this.formsPDF.form.fieldsPdf[pages-1]=[];
      pages--;
    }
    this.temporaryField = [];
    this.formsPDF.form.fieldsPdf.forEach(page=>{
      page.forEach(field=>{
        console.log('Pdf field', field);
        if(field.type=='temporary'&&field.linkedField) this.temporaryField.push( field.linkedField);
      })
    });
    this.page=1;
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
        // console.log(prevPos, currentPos);
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
    this.cx.clearRect(0,0,this.width, this.height);
    // start our drawing path
    this.cx.beginPath();

    // we're drawing lines so we need a previous position
    if (prevPos) {
      // sets the start point
      // draws a line from the start pos until the current position
      this.cx.rect(this.lastPos.x, this.lastPos.y, currentPos.x-this.lastPos.x,currentPos.y-this.lastPos.y);
      this.cx.fill();
      // strokes the current path with the styles we set earlier
      this.cx.stroke();
    }
  }

  styleObject(div:any){
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

  ngOnChanges(changes: SimpleChanges): void {
  }

}
