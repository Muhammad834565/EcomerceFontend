import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { Page1Component } from './ecomerce/page1/page1.component';
import { Page2Component } from './ecomerce/page2/page2.component';
import { Page3Component } from './ecomerce/page3/page3.component';
import { Page4Component } from './ecomerce/page4/page4.component';
import { Page5Component } from './ecomerce/page5/page5.component';
import { ProductFormComponent } from './product-form/product-form.component';



export const routes: Routes = [
    {path:"",redirectTo:"page1",pathMatch:"full"},
    {path:"userlist",component:UserListComponent},
    {path:"user/:id",component:UserDetailComponent},
    {path:"page1",component:Page1Component},
    {path:"page2",component:Page2Component},
     {path:"page3",component:Page3Component},
    {path:"page4",component:Page4Component},
    {path:"page5",component:Page5Component},
    {path:"admin",component:ProductFormComponent},

    
];
