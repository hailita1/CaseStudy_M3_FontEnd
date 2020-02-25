import {Component, OnInit} from '@angular/core';
import {BlogServiceService} from '../../service/blog-service.service';
import {CategoryServiceService} from '../../service/category-service.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {
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

}
