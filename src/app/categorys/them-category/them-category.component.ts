import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BlogServiceService} from '../../service/blog-service.service';
import {CategoryServiceService} from '../../service/category-service.service';

@Component({
  selector: 'app-them-category',
  templateUrl: './them-category.component.html',
  styleUrls: ['./them-category.component.scss']
})
export class ThemCategoryComponent implements OnInit {

  category: any[];
  message = '';
  isShow = false;
  isSuccess = true;
  formGroup = new FormGroup({
    name: new FormControl(),
    id: new FormControl()
  });

  constructor(private categoryService: CategoryServiceService) {
  }

  ngOnInit() {
    this.categoryService.getCategory().subscribe(result => {
      this.category = result;
    });
  }

  save() {
    const name = this.formGroup.get('name').value;
    this.categoryService.addCategory(name).subscribe(result => { // status: 200
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Thêm thành công !';
      this.formGroup.reset();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Thêm thất bại !';
      this.formGroup.reset();
    });
  }

}
