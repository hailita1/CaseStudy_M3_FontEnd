import {Component, OnInit} from '@angular/core';
import {BlogServiceService} from '../../service/blog-service.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-danhsach-blog',
  templateUrl: './danhsach-blog.component.html',
  styleUrls: ['./danhsach-blog.component.scss']
})
export class DanhsachBlogComponent implements OnInit {

  listBlog: any[];
  message = '';
  isShow = false;
  isSuccess = true;
  formGroup = new FormGroup({
    authorName: new FormControl()
  });

  constructor(private blogService: BlogServiceService) {
  }


  ngOnInit() {
    this.blogService.getBlog().subscribe(result => {
      this.listBlog = result;
    });
  }

  public delete(id: number) {
    this.blogService.deleteBlog(id).subscribe(result => { // status: 200
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Xóa thành công!';
      this.formGroup.reset();
      this.blogService.getBlog().subscribe(result1 => {
        this.listBlog = result1;
      });
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Xóa thất bại!';
      this.formGroup.reset();
    });
  }

  public update(id: number) {
    this.blogService.findBlogById(id).subscribe(result => {
      this.listBlog = result;
    });
  }

  public search() {
    const name = this.formGroup.get('authorName').value;
    this.blogService.findAllByAuthor(name).subscribe(result => { // status: 200
      this.listBlog = result;
    });
  }
}
