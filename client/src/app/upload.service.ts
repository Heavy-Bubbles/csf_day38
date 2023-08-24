import { HttpClient } from '@angular/common/http';
import { ElementRef, Injectable, inject } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  http = inject(HttpClient)

  upload(description: string, elemRef: ElementRef): Promise<any> {
    console.info('>>>> files: ', elemRef.nativeElement.files)

    // to create multipart
    const data = new FormData()
    data.set("description", description)
    data.set("myFile", elemRef.nativeElement.files[0])

    return firstValueFrom(
      this.http.post<any>('/upload', data)
    )
  }
}
