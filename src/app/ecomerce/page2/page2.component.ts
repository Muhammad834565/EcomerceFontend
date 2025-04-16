import { Component } from '@angular/core';
import { MarketplaceFilterComponent } from '../requirment for page 2/marketplace-filter/marketplace-filter.component';
import { HeaderComponent } from '../header/header.component';
import { Footer1Component } from '../footer1/footer1.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [MarketplaceFilterComponent,HeaderComponent,Footer1Component,FooterComponent],
  templateUrl: './page2.component.html',
  styleUrl: './page2.component.css'
})
export class Page2Component {

}
