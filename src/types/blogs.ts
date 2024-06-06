




export interface blog {
    id: number,
    author: string,
    url: string,
    title: string,
    likes: number
}

export let blogs: [blog]


export interface User {
    id: Number,
    username: string,
    name: string,
    role: Role
}

export interface Admin {

}


export interface Role {
    USER: User
    ADMIN: Admin
  }
  