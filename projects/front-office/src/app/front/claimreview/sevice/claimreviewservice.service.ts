import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClaimSav } from 'Models/ClaimSav';
import { Product } from 'Models/Product';
import { Review } from 'Models/Review';
import { User } from 'Models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaimreviewserviceService {

  private addclaim = 'http://localhost:8081/claims/AddClaim?idProductQuantity=';
  private addreview='http://localhost:8081/Review/AddReview?id=';

getClaims(): Observable<ClaimSav[]> {
  const options={withCredentials:true};
  return this.http.get<ClaimSav[]>('http://localhost:8081/claims/GetAllClaims',options);
}
  constructor(private http: HttpClient) {}

  addClaim(claim: ClaimSav,idProductuantity:number): Observable<ClaimSav> {
    const options={withCredentials:true};
    return this.http.post<ClaimSav>(this.addclaim+`${idProductuantity}`, claim,options);
  }

  updateClaim(claim: ClaimSav): Observable<ClaimSav> {
    const options = { withCredentials: true };
    return this.http.put<ClaimSav>('http://localhost:8081/claims/UpdateClaim', claim, options);
  }
  private deleteclaim = 'http://localhost:8081/claims/DeleteClaim?id=';
  private getClaimsById='http://localhost:8081/claims/GetClaimsById';
  private getreviews='http://localhost:8081/Review/GetAllReviews';

  getClaimById(id: number): Observable<ClaimSav> {
    const options = { withCredentials: true };
    const url = 'http://localhost:8081/claims/GetClaimsById?id=';
    return this.http.get<ClaimSav>(url+`${id}`,options);
  }

  deleteClaim(id: number): Observable<any> {
    const options = { withCredentials: true };
    const url = `${this.deleteclaim}${id}`;
    return this.http.delete(url, options);
  }

  getAllReviews(): Observable<Review[]> {

    const options = { withCredentials: true };

    return this.http.get<Review[]>('http://localhost:8081/Review/GetAllReviews', options);

  }

  addReview(review:Review,idProduct:number,rate:number): Observable<Review> {
    const options={withCredentials:true};
    return this.http.post<Review>(this.addreview+`${idProduct}`+'&rating='+`${rate}`,review,options);
  }

  GetProductById = 'http://localhost:8081/order/GetProductById?id=';

  getProductById(idp: number): Observable<Product> {
    const options={withCredentials:true};
    return this.http.get<Product>(this.GetProductById + `${idp}`,options);
  }

  getSession='http://localhost:8081/Review/Getsession'

  getUserSession(): Observable<User>
  {
    const options={withCredentials:true};

    return this.http.get<User>(this.getSession,options);
  }

  deleteRev='http://localhost:8081/Review/DeleteReview?id='
  deleteReview(id :number)
  {
  const options={withCredentials:true};
  return this.http.delete(this.deleteRev+`${id}`,options)
  }   

  Upload="http://localhost:8081/claims/upload"
  upload(image: File | null | undefined)
  {
    const options={withCredentials:true};

    const formData = new FormData();
    // @ts-ignore
    formData.append('file', image, image.name);
    return this.http.post(this.Upload,formData,options);
  }
}
    