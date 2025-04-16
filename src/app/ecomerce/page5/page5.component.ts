import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Footer1Component } from '../footer1/footer1.component';

@Component({
  selector: 'app-page5',
  standalone: true,
  imports: [HeaderComponent,Footer1Component],
  templateUrl: './page5.component.html',
  styleUrl: './page5.component.css'
})
export class Page5Component {

}
