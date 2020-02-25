import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BlogServiceService} from '../../service/blog-service.service';
import {ActivatedRoute} from '@angular/router';
import {CategoryServiceService} from '../../service/category-service.service';

@Component({
  selector: 'app-sua-blog',
  templateUrl: './sua-blog.component.html',
  styleUrls: ['./sua-blog.component.scss']
})
export class SuaBlogComponent implements OnInit {
  listBlog: any;
  category: any[];
  id: number;
  message = '';
  isShow = false;
  isSuccess = true;

  formGroup = new FormGroup({
    blogAuthor: new FormControl(),
    blogContent: new FormControl(),
    categoryName: new FormControl()
  });

  constructor(private blogService: BlogServiceService, private categoryService: CategoryServiceService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe(params => {
      console.log(params);
      const idSearch = params.get('id');
      this.blogService.findBlogById(idSearch).subscribe(
        blog => {
          this.listBlog = blog;
          console.log(this.listBlog);
          this.formGroup.controls.blogAuthor.setValue(this.listBlog.author);
          this.formGroup.controls.blogContent.setValue(this.listBlog.content);
          this.formGroup.controls.categoryName.setValue(this.listBlog.category.id);
          this.id = Number(idSearch);
        }
      );
    });
    this.categoryService.getCategory().subscribe(result => {
      this.category = result;
    });
  }
  edit() {
    const author = this.formGroup.get('blogAuthor').value;
    const content = this.formGroup.get('blogContent').value;
    const idCategory = this.formGroup.get('categoryName').value;
    this.blogService.editBlog(author, content, this.id, idCategory).subscribe(result => { // status: 200
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Sửa thành công!';
      this.formGroup.reset();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Sửa thất bại!';
      this.formGroup.reset();
    });
  }
}
