import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  fullname:string
  email:string
  biography:string
  instagram:string
  facebook:string
  twitter:string
  avatar:string

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL:Observable<any>

  constructor(private router:Router, private profileService:ProfileService, private afStorage: AngularFireStorage) { }

  ngOnInit(): void {
    if (!localStorage.getItem('user'))
      this.router.navigate(['/login'])

    this.profileService.get().subscribe(data => {
      this.fullname = data['fullname']
      this.email = data['username']
      this.biography = data['biography']
      this.instagram = data['instagram']
      this.facebook = data['facebook']
      this.twitter = data['twitter']
      this.avatar = data['avatar']
    })
  }

  edit() {
    this.profileService.edit(this.email, {
      fullname:this.fullname,
      biography:this.biography,
      instagram:this.instagram,
      facebook:this.facebook,
      twitter:this.twitter,
      username:this.email,
      avatar:this.avatar
    }).subscribe(data => this.router.navigate(['/profile']))
  }

  uploadPicture(event) {
    // create a random id
    const randomId = Math.random().toString(36).substring(2);
    // create a reference to the storage bucket location
    this.ref = this.afStorage.ref('/images/' + randomId);
    // the put method creates an AngularFireUploadTask
    // and kicks off the upload
    this.task = this.ref.put(event.target.files[0]);

    this.task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = this.ref.getDownloadURL())
    )
    .subscribe(
      data => console.log(data), 
      error => console.log(error), 
      () => {
        alert('Image uploaded!')
        this.ref.getDownloadURL().subscribe(downloadURL => {
          this.avatar = downloadURL
          this.edit()
        }
        )
      }
    );
  }

}
