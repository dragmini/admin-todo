import { UpdateProfile } from "@/types/user.interface"

export interface Payment {
    id: number
    date: string
    sum: number
    user: UpdateProfile
}