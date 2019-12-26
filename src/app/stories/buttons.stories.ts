import { storiesOf, moduleMetadata } from '@storybook/angular';
import { text, withKnobs, object } from '@storybook/addon-knobs';
import { ButtonComponent } from '@app/shared/buttons/button/button.component';
import { FontAwesomeModule, FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { FigmaDirective } from './figma.directive';
import { HttpService } from '@app/core/http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

storiesOf('Elements|Buttons', module).addDecorator(withKnobs)
  .addDecorator(
    moduleMetadata({
      declarations: [ButtonComponent, FigmaDirective],
      imports: [FontAwesomeModule, HttpClientModule],      
      entryComponents: [FaIconComponent],
      providers: [HttpService]
    })
  )
  .add('Huge', () => {
    return {
      component: ButtonComponent,
      template: `
      <div class="story">
        <div class="col">
          <div class="title">Default</div>
          <div class="content">
            <div class="col-xs">
              <sw-button class="huge" swFigmaId="206:477">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="huge left-icn" icon="fa-file" swFigmaId="206:483">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="huge right-icn" swFigmaId="206:500">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button class="huge" [disabled]="true"  swFigmaId="3575:43">{{text}}</sw-button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="title">Secondary</div>
          <div class="content">
            <div class="col-xs">
              <sw-button class="huge secondary">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="huge secondary left-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="huge secondary right-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button class="huge secondary" [disabled]="true">{{text}}</sw-button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="title">Tetriary</div>
          <div class="content">
            <div class="col-xs">
              <sw-button class="huge tetriary">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="huge tetriary left-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="huge tetriary right-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button class="huge tetriary" [disabled]="true">{{text}}</sw-button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="title">Quaternary</div>
          <div class="content">
            <div class="col-xs">
              <sw-button class="huge quaternary">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="huge quaternary left-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="huge quaternary right-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button class="huge quaternary" [disabled]="true">{{text}}</sw-button>
            </div>
          </div>
        </div>
      </div>`,
      props: {
        text: text('text', 'Button text'),
        icon: object('icon', fasStar)
      }
    }
  })
  .add('Default', () => {
    return {
      component: ButtonComponent,
      template: `
        <div class="story">
          <div class="col">
            <div class="title">Default</div>
            <div class="content">
              <div class="col-xs">
                <sw-button>{{text}}</sw-button>
              </div>
              <div class="col-xs">
                <sw-button [icon]="icon" class="left-icn" icon="fa-file">{{text}}</sw-button>
              </div>
              <div class="col-xs">
                <sw-button [icon]="icon" class="right-icn">{{text}}</sw-button>
              </div>
              <div class="col-xs">
                <sw-button [disabled]="true">{{text}}</sw-button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="title">Secondary</div>
            <div class="content">
              <div class="col-xs">
                <sw-button class="secondary">{{text}}</sw-button>
              </div>
              <div class="col-xs">
                <sw-button [icon]="icon" class="secondary left-icn">{{text}}</sw-button>
              </div>
              <div class="col-xs">
                <sw-button [icon]="icon" class="secondary right-icn">{{text}}</sw-button>
              </div>
              <div class="col-xs">
                <sw-button class="secondary" [disabled]="true">{{text}}</sw-button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="title">Tetriary</div>
            <div class="content">
              <div class="col-xs">
                <sw-button class="tetriary">{{text}}</sw-button>
              </div>
              <div class="col-xs">
                <sw-button [icon]="icon" class="tetriary left-icn">{{text}}</sw-button>
              </div>
              <div class="col-xs">
                <sw-button [icon]="icon" class="tetriary right-icn">{{text}}</sw-button>
              </div>
              <div class="col-xs">
                <sw-button class="tetriary" [disabled]="true">{{text}}</sw-button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="title">Quaternary</div>
            <div class="content">
              <div class="col-xs">
                <sw-button class="quaternary">{{text}}</sw-button>
              </div>
              <div class="col-xs">
                <sw-button [icon]="icon" class="quaternary left-icn">{{text}}</sw-button>
              </div>
              <div class="col-xs">
                <sw-button [icon]="icon" class="quaternary right-icn">{{text}}</sw-button>
              </div>
              <div class="col-xs">
                <sw-button class="quaternary" [disabled]="true">{{text}}</sw-button>
              </div>
            </div>
          </div>
        </div>`,
      props: {
        text: text('text', 'Button text'),
        icon: object('icon', 'fasStar')
      }
    }
  })
  .add('Middle', () => {
    return {
      component: ButtonComponent,
      template: `
      <div class="story">
        <div class="col">
          <div class="title">Default</div>
          <div class="content">
            <div class="col-xs">
              <sw-button class="middle">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="middle left-icn" icon="fa-file">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="middle right-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button class="middle" [disabled]="true">{{text}}</sw-button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="title">Secondary</div>
          <div class="content">
            <div class="col-xs">
              <sw-button class="middle secondary">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="middle secondary left-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="middle secondary right-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button class="middle secondary" [disabled]="true">{{text}}</sw-button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="title">Tetriary</div>
          <div class="content">
            <div class="col-xs">
              <sw-button class="middle tetriary">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="middle tetriary left-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="middle tetriary right-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button class="middle tetriary" [disabled]="true">{{text}}</sw-button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="title">Quaternary</div>
          <div class="content">
            <div class="col-xs">
              <sw-button class="middle quaternary">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="middle quaternary left-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="middle quaternary right-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button class="middle quaternary" [disabled]="true">{{text}}</sw-button>
            </div>
          </div>
        </div>
      </div>`,
      props: {
        text: text('text', 'Button text'),
        icon: object('icon', fasStar)
      }
    }
  })
  .add('Small', () => {
    return {
      component: ButtonComponent,
      template: `
      <div class="story">
        <div class="col">
          <div class="title">Default</div>
          <div class="content">
            <div class="col-xs">
              <sw-button class="small">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="small left-icn" icon="fa-file">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="small right-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button class="small" [disabled]="true">{{text}}</sw-button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="title">Secondary</div>
          <div class="content">
            <div class="col-xs">
              <sw-button class="small secondary">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="small secondary left-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="small secondary right-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button class="small secondary" [disabled]="true">{{text}}</sw-button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="title">Tetriary</div>
          <div class="content">
            <div class="col-xs">
              <sw-button class="small tetriary">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="small tetriary left-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="small tetriary right-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button class="small tetriary" [disabled]="true">{{text}}</sw-button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="title">Quaternary</div>
          <div class="content">
            <div class="col-xs">
              <sw-button class="small quaternary">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="small quaternary left-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="small quaternary right-icn">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button class="small quaternary" [disabled]="true">{{text}}</sw-button>
            </div>
          </div>
        </div>
      </div>`,
      props: {
        text: text('text', 'Button text'),
        icon: object('icon', fasStar)
      }
    }
  })
  .add('Icon', () => {
    return {
      component: ButtonComponent,
      template: `
      <div class="story">
        <div class="col">
          <div class="title">Default</div>
          <div class="content">
            <div class="col-xs">
              <sw-button [icon]="icon" class="icon huge">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="icon" icon="fa-file">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="icon middle">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="icon small" [disabled]="true">{{text}}</sw-button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="title">Secondary</div>
          <div class="content">
            <div class="col-xs">
              <sw-button [icon]="icon" class="secondary icon huge">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="secondary icon">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="secondary icon middle">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="secondary icon small" [disabled]="true">{{text}}</sw-button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="title">Tetriary</div>
          <div class="content">
            <div class="col-xs">
              <sw-button [icon]="icon" class="tetriary icon huge">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="tetriary icon">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="tetriary icon middle">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="tetriary icon small" [disabled]="true">{{text}}</sw-button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="title">Quaternary</div>
          <div class="content">
            <div class="col-xs">
              <sw-button [icon]="icon" class="quaternary icon huge">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="quaternary icon">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="quaternary icon middle">{{text}}</sw-button>
            </div>
            <div class="col-xs">
              <sw-button [icon]="icon" class="quaternary icon small" [disabled]="true">{{text}}</sw-button>
            </div>
          </div>
        </div>
      </div>`,
      props: {
        text: text('text', 'Button text'),
        icon: object('icon', fasStar)
      }
    }
  })
  .add('Plus', () => {
    return {
      component: ButtonComponent,
      template: `<sw-button>{{text}}</sw-button>`,
      props: {
        text: text('text', 'Button text')
      }
    }
  })
