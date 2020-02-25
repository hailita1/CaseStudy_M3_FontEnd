import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getBlog(): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8080/api/blogs`);
  }

  findBlogById(id): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/api/blogs/` + id);
  }

  addBlog(author: string, content: string, categoryId: number): Observable<any> {
    const blog = {
        author,
        content,
        category: {
          id: categoryId
        }
      }
    ;
    return this.httpClient.post<any>(`http://localhost:8080/api/blogs`, blog);
  }

  deleteBlog(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/api/blogs/` + id);
  }

  editBlog(author: string, content: string, id: number, categoryId: number): Observable<any> {
    const blog = {
      author,
      content,
      id,
      category: {
        id: categoryId
      }
    };
    return this.httpClient.put<any>(`http://localhost:8080/api/blogs/` + id, blog);
  }
}
