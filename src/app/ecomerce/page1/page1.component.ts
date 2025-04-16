import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Footer1Component } from '../footer1/footer1.component';
import { FooterComponent } from '../footer/footer.component';
import { Part1Component } from '../requirment for page 1/part1/part1.component';
import { Part2Component } from '../requirment for page 1/part2/part2.component';
import { Part3Component } from '../requirment for page 1/part3/part3.component';
import { Part4Component } from '../requirment for page 1/part4/part4.component';
import { Part5Component } from '../requirment for page 1/part5/part5.component';
import { Part6Component } from '../requirment for page 1/part6/part6.component';
import { Part7Component } from '../requirment for page 1/part7/part7.component';
import { Part8Component } from '../requirment for page 1/part8/part8.component';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [HeaderComponent,Footer1Component,FooterComponent,Part1Component,Part2Component,Part3Component,
    Part4Component,Part5Component,Part6Component,Part7Component,Part8Component
  ],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.css'
})
export class Page1Component {

}
