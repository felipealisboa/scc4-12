import { Component, OnInit } from '@angular/core';
import { UploadService} from "./upload.service";

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  providers: [UploadService],
  styleUrls: [
    '../styles/bootstrap-4.0.0-dist/css/bootstrap.css',
    './upload.component.css'
  ]
})
export class UploadComponent {
  message: string;

  constructor(private uploadService: UploadService) { }

  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      this.uploadService.upload(file).subscribe(
        msg => {
          input.value = null;
          this.message = msg;
        }
      );
    }
  }
}
