import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ThemBlogComponent} from './blogs/them-blog/them-blog.component';
import {SuaBlogComponent} from './blogs/sua-blog/sua-blog.component';
import {DanhsachBlogComponent} from './blogs/danhsach-blog/danhsach-blog.component';
import {ThemCategoryComponent} from './categorys/them-category/them-category.component';
import {DanhsachCategoryComponent} from './categorys/danhsach-category/danhsach-category.component';
import {ViewComponent} from './blogs/view/view.component';

const routes: Routes = [
  {
    path: '', component: DanhsachBlogComponent
  },
  {
    path: 'sua-blog/:id', component: SuaBlogComponent
  },
  {
    path: 'view-blog/:id', component: ViewComponent
  },
  {
    path: 'them-blog', component: ThemBlogComponent
  }, {
    path: 'danh-sach-category', component: DanhsachCategoryComponent
  }, {
    path: 'them-category', component: ThemCategoryComponent
  }]
;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ThemBlogComponent,
    SuaBlogComponent,
    DanhsachBlogComponent,
    ThemCategoryComponent,
    DanhsachCategoryComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
