import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component'

export const userRoutes = [
    // The route will be /user/profile AND NOT /profile
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent }
]