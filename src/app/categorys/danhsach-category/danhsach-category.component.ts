import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BlogServiceService} from '../../service/blog-service.service';
import {CategoryServiceService} from '../../service/category-service.service';

@Component({
  selector: 'app-danhsach-category',
  templateUrl: './danhsach-category.component.html',
  styleUrls: ['./danhsach-category.component.scss']
})
export class DanhsachCategoryComponent implements OnInit {

  listCategory: any[];
  message = '';
  isShow = false;
  isSuccess = true;
  formGroup = new FormGroup({
    categoryId: new FormControl()
  });

  constructor(private categoryService: CategoryServiceService) {
  }


  ngOnInit() {
    this.categoryService.getCategory().subscribe(result => {
      this.listCategory = result;
    });
  }

  public delete(id: number) {
    this.categoryService.deleteCategory(id).subscribe(result => { // status: 200
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Xóa thành công!';
      this.formGroup.reset();
      this.categoryService.getCategory().subscribe(result1 => {
        this.listCategory = result1;
      });
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Xóa thất bại!';
      this.formGroup.reset();
    });
  }

  public update(id: number) {
    this.categoryService.findCategoryById(id).subscribe(result => {
      this.listCategory = result;
    });
  }

}
