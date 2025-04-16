import { Component } from '@angular/core';
import { MarketplaceFilterComponent } from '../requirment for page 3/marketplace-filter/marketplace-filter.component';
import { Footer1Component } from '../footer1/footer1.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-page3',
  standalone: true,
  imports: [MarketplaceFilterComponent,HeaderComponent,FooterComponent,Footer1Component],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component {

}
