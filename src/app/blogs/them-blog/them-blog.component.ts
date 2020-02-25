import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BlogServiceService} from '../../service/blog-service.service';
import {CategoryServiceService} from '../../service/category-service.service';

@Component({
  selector: 'app-them-blog',
  templateUrl: './them-blog.component.html',
  styleUrls: ['./them-blog.component.scss']
})
export class ThemBlogComponent implements OnInit {
  blog: any[];
  message = '';
  isShow = false;
  isSuccess = true;
  formGroup = new FormGroup({
    author: new FormControl(),
    content: new FormControl(),
    id: new FormControl()
  });

  constructor(private  blogService: BlogServiceService, private categoryService: CategoryServiceService) {
  }

  ngOnInit() {
    this.categoryService.getCategory().subscribe(result => {
      this.blog = result;
    });
  }

  save() {
    const author = this.formGroup.get('author').value;
    const content = this.formGroup.get('content').value;
    const id = this.formGroup.get('id').value;
    this.blogService.addBlog(author, content, id).subscribe(result => { // status: 200
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
