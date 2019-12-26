import { Directive, ElementRef, Input, Renderer2, HostListener } from "@angular/core";
import { HttpService } from '@app/core/http.service';

const config = {
  file: 'RTfgqP4XAlyiNs0CIypGWhxF',
  token: '29476-34ab01b4-45f8-433e-a532-a448ede6dbdd',
  format: 'svg',
  url: 'https://api.figma.com/v1/images/',
  scale: 1,
  ids: [],
  bounds: true,
  version: null,
  simple: false,
  includeId: false
}
@Directive({
  selector: '[swFigmaId]'
})
export class FigmaDirective {
  private nodeId: string;
  private imageUrl: string;
  @Input('swFigmaId') set figmaId(nodeId: string) {
    this.nodeId = nodeId;
    // this.renderer.addClass(this.el.nativeElement, 'hasFigma');
    this.getUrl();
    
  }
  @HostListener('contextmenu', ['$event']) onClick(event) {
    if (event) event.preventDefault();
    this.el.nativeElement.classList.toggle('hasFigma');
  }
  constructor(private el: ElementRef, private http: HttpService, private renderer: Renderer2) {
  }

  getUrl() {
    if (this.nodeId) {
      let requestUrl = config.url + config.file + '?';
      if (config.format) requestUrl += 'format=' + config.format; 
      if (config.scale) requestUrl += '&scale=' + config.scale; 
      if (config.bounds) requestUrl += '&use_absolute_bounds=true';
      if (config.simple) requestUrl += '&svg_simplify_stroke=true';
      if (config.includeId) requestUrl += '&svg_include_id=true';
      if (config.version) requestUrl += '&version=' + config.version;
      requestUrl += '&ids=' + this.nodeId;
      this.http.request('GET', requestUrl, {
        headers: {
          'X-FIGMA-TOKEN': config.token
        }
      }).subscribe((response) => {
        if (!response['err']) {
          this.imageUrl = response['images'][this.nodeId];
          this.el.nativeElement.style.setProperty('--background-url', `url('${this.imageUrl}')`)
        }
      }, (error) => console.error);
    }
  }
}