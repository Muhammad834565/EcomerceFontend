import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  stars: number;
  orders: number;
  freeShipping: boolean;
  description: string;
  imageUrl: string;
}

@Component({
  selector: 'app-page3-1',
  templateUrl: './marketplace-filter.component.html',
  styleUrls: ['./marketplace-filter.component.css'],
  imports: [CommonModule],
  standalone: true,
})
export class MarketplaceFilterComponent implements OnInit, AfterViewInit {
  @ViewChild('minRange', { static: true }) minRange!: ElementRef<HTMLInputElement>;
  @ViewChild('maxRange', { static: true }) maxRange!: ElementRef<HTMLInputElement>;
  @ViewChild('minInput', { static: true }) minInput!: ElementRef<HTMLInputElement>;
  @ViewChild('maxInput', { static: true }) maxInput!: ElementRef<HTMLInputElement>;
  @ViewChild('sliderSelected', { static: true }) sliderSelected!: ElementRef<HTMLDivElement>;

  maxValue: number = 999999;
  categories: string[] = [
    'Mobile accessory', 'Electronics', 'Smartphones', 'Modern tech', 'Wearables',
    'Gaming', 'Audio', 'Cameras', 'Chargers', 'Cases'
  ];
  brands: string[] = [
    'Samsung', 'Apple', 'Huawei', 'Poco', 'Lenovo', 'Nokia', 'Xiaomi', 'Realme', 'OnePlus', 'Google'
  ];
  features: string[] = [
    'Metallic', 'Plastic cover', '8GB RAM', 'Super power', 'Large memory',
    'Wireless charging', 'Waterproof', 'Fast charging', '4K Video', 'Face unlock'
  ];
  conditions: string[] = [
    'New', 'Used', 'Refurbished', 'Like new', 'Open box', 'For parts', 'Damaged', 'Repaired', 'Unlocked', 'Locked'
  ];
  ratings: number[] = [5, 4, 3, 2, 1];

  products: Product[] = [
    {
      id: 1,
      name: 'Canon Camera EOS 2000, Black 10x zoom',
      price: 998.00,
      oldPrice: 1128.00,
      stars: 4.5,
      orders: 154,
      freeShipping: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: '/tech/1.jpg'
    },
    {
      id: 2,
      name: 'Canon Camera EOS 2000, Black 10x zoom',
      price: 998.00,
      oldPrice: 1128.00,
      stars: 4.5,
      orders: 154,
      freeShipping: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: '/tech/1.jpg'
    },
  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // No longer call initPriceSlider here.
  }

  ngAfterViewInit(): void {
    this.initPriceSlider();  // Initialize slider in ngAfterViewInit
  }


  initPriceSlider(): void {
    const minRangeEl = this.minRange.nativeElement;
    const maxRangeEl = this.maxRange.nativeElement;


    minRangeEl.addEventListener('input', () => this.updateSlider());
    maxRangeEl.addEventListener('input', () => this.updateSlider());

    this.minInput.nativeElement.addEventListener('change', () => this.updateSliderFromInputs());
    this.maxInput.nativeElement.addEventListener('change', () => this.updateSliderFromInputs());
    this.updateSlider();
  }

  updateSliderFromInputs(): void {
    let min = parseInt(this.minInput.nativeElement.value) || 0;
    let max = parseInt(this.maxInput.nativeElement.value) || this.maxValue;
    if (min > max) [min, max] = [max, min];
    this.minRange.nativeElement.value = min.toString();
    this.maxRange.nativeElement.value = max.toString();
    this.updateSlider();
  }

  updateSlider(): void {
    const min = parseInt(this.minRange.nativeElement.value);
    const max = parseInt(this.maxRange.nativeElement.value);
    const percentMin = (min / this.maxValue) * 100;
    const percentMax = (max / this.maxValue) * 100;
    this.renderer.setStyle(this.sliderSelected.nativeElement, 'left', percentMin + "%");
    this.renderer.setStyle(this.sliderSelected.nativeElement, 'right', (100 - percentMax) + "%");
    this.minInput.nativeElement.value = min.toString();
    this.maxInput.nativeElement.value = max.toString();
  }

  applyRange(): void {
    const min = parseInt(this.minRange.nativeElement.value);
    const max = parseInt(this.maxRange.nativeElement.value);
    alert(`Filtering products from $${min} to $${max}`);
  }

  toggleSection(sectionId: string, iconId: string): void {
    const section = document.getElementById(sectionId);
    const icon = document.getElementById(iconId);
    section?.classList.toggle('hidden');
    icon?.classList.toggle('rotate');
  }

  toggleSeeAll(event: MouseEvent): void {
    const btn = event.target as HTMLElement;
    const container = btn.parentElement;
    container?.classList.toggle('collapsed');
    btn.textContent = container?.classList.contains('collapsed') ? 'See all' : 'See less';
  }

  toggleLike(event: MouseEvent): void {
    const button = event.target as HTMLElement;
    const icon = button.querySelector('i');
    button.classList.toggle('liked');

    if (button.classList.contains('liked')) {
      this.renderer.removeClass(icon, 'far');
      this.renderer.addClass(icon, 'fas');
    } else {
      this.renderer.removeClass(icon, 'fas');
      this.renderer.addClass(icon, 'far');
    }
  }
}

