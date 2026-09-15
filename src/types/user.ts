export interface User {
  id: string
  email: string
  name: string | null
  isEmailVerified: boolean
  phone: string | null
  createdAt: string
  updatedAt: string
}