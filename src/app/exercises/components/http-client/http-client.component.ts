import { HttpClient } from '@angular/common/http'
import { Component } from '@angular/core'
import { lastValueFrom } from 'rxjs'

interface Post {
  id: number
  title: string
  body: string
  userId: number
}

type createPost = Omit<Post, 'id'>

@Component({
  selector: 'app-http-client',
  standalone: true,
  template: `
    <button (click)="getPosts()">Get posts</button>
    <div>
      @for (post of posts; track post.id) {
        <p>{{ post.title }}</p>
      }
      <button (click)="createPost()">Post posts</button>
      <div>Resultado: {{ resultadoPost.id }} - {{ resultadoPost.title }}</div>
    </div>
  `,
})
export class HttpClientComponent {
  posts: Post[] = []

  newPost: createPost = { title: 'titulo', body: 'body', userId: 1 }
  resultadoPost: Post = {
    id: 0,
    title: '',
    body: '',
    userId: 0,
  }
  constructor(private readonly httpClient: HttpClient) {}

  // peticion get https://jsonplaceholder.typicode.com/post

  async getPosts() {
    console.log('peticion get')
    // se convierte a promesa
    const result = await lastValueFrom(this.httpClient.get<Post[]>('posts'))
    this.posts = result
    console.log(result)
  }

  // peticion post
  async createPost() {
    console.log('peticion post')
    const result = await lastValueFrom(this.httpClient.post<Post>('posts', this.newPost))
    this.resultadoPost = result

    console.log(result)
  }
}
