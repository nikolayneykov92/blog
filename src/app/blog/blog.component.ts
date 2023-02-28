import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less'],
})
export class BlogComponent {
  form = { title: '', description: '' };
  blogs: Observable<any[]>;
  constructor(private store: AngularFirestore) {}

  ngOnInit(): void {
    this.blogs = this.store.collection('blog').valueChanges({ idField: 'id' });
  }

  save() {
    this.store.collection('blog').add(this.form);
  }
}
