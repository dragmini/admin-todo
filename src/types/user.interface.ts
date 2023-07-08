export interface User {
    id: number
    name:string
    email: string
    phone: string
    tasks: Task[]
}

export interface Task {
    id: number
    title: string
    content: string
    is_ready: boolean
}

export interface UpdateProfile {
    id: number
    email: string
    name: string
    phone: string
}