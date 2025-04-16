import { Component } from '@angular/core';

import { Footer1Component } from '../footer1/footer1.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-page4',
  standalone: true,
  imports: [Footer1Component,HeaderComponent],
  templateUrl: './page4.component.html',
  styleUrl: './page4.component.css'
})
export class Page4Component {
  toggleLike(event: Event): void {
    const button = event.currentTarget as HTMLElement;
    const icon = button.querySelector('i');
  
    if (icon) {
      button.classList.toggle('liked');
      icon.classList.toggle('far'); // Outline heart
      icon.classList.toggle('fas'); // Filled heart
    }
  }
  

}
