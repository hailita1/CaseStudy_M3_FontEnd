import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getCategory(): Observable<any[]> {
    return this.httpClient.get<any[]>(`http://localhost:8080/api/categories`);
  }

  findById(id): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/api/categories/` + id);
  }

  addCategory(name: string): Observable<any> {
    const category = {
      name
    };
    return this.httpClient.post<any>(`http://localhost:8080/api/categories`, category);
  }

  deleteCategory(id: number): Observable<any> {
    return this.httpClient.delete<any>(`http://localhost:8080/api/categories/` + id);
  }

  editCategory(name: string, id: number): Observable<any> {
    const category = {
      name,
      id
    };
    return this.httpClient.put<any>(`http://localhost:8080/api/categories/` + id, category);
  }
}
