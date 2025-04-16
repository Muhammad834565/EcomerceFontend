import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [CommonModule,FormsModule,HttpClientModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})


  
export class ProductFormComponent {
  product: any = {};

  fields = [
    { name: 'title', label: 'Title', type: 'text', required: true },
    { name: 'category', label: 'Category', type: 'text', required: true },
    { name: 'subCategory', label: 'Sub Category', type: 'text', required: true },
    { name: 'price', label: 'Price', type: 'number', required: true },
    { name: 'rating', label: 'Rating', type: 'number', required: false },
    { name: 'material', label: 'Material', type: 'text', required: false },
    { name: 'design', label: 'Design', type: 'text', required: false },
    { name: 'customization', label: 'Customization', type: 'text', required: false },
    { name: 'protectionPolicy', label: 'Protection Policy', type: 'text', required: false },
    { name: 'warranty', label: 'Warranty', type: 'text', required: false },
    { name: 'description', label: 'Description', type: 'text', textarea: true, required: false },
    { name: 'model', label: 'Model', type: 'text', required: false },
    { name: 'style', label: 'Style', type: 'text', required: false },
    { name: 'certificate', label: 'Certificate', type: 'text', required: false },
    { name: 'size', label: 'Size', type: 'text', required: false },
    { name: 'memory', label: 'Memory', type: 'text', required: false },
    { name: 'discountPercent', label: 'Discount (%)', type: 'number', required: false },
    { name: 'subImagesUrl', label: 'Sub Images (comma separated URLs)', type: 'text', required: false },
    { name: 'image', label: 'Main Image URL', type: 'text', required: false }
  ];

  constructor(private http: HttpClient) {}

  submitForm() {
    const payload = { ...this.product };
    if (payload.subImagesUrl) {
      payload.subImagesUrl = payload.subImagesUrl.split(',').map((url: string) => url.trim());
    } 
    //test1
    
    this.http.post('http://localhost:5000/api/product-details', payload).subscribe({
      next: () => {
        alert('Product added successfully!');
        this.product = {};
      },
      error: (err) => {
        alert('Error adding product.');
        console.error(err);
      }
    });
    //test1
    this.http.post('http://localhost:5000/api/products', payload).subscribe({
      next: () => {
        alert('Product added successfully!');
        this.product = {};
      },
      error: (err) => {
        alert('Error adding product.');
        console.error(err);
      }
    });
  }
}
