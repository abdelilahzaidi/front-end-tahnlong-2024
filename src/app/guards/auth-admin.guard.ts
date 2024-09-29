import { Injectable, inject } from "@angular/core";
import { CanActivate, CanActivateChildFn, CanActivateFn, Router } from "@angular/router";
import { catchError, map, of } from "rxjs";
import { AuthService } from "../auth/services/auth.service";
import { SessionService } from "../services/session.service";



// export class AuthGuardAdmin implements CanActivate {
//     constructor(private authService: AuthService,
//         private router: Router
//         ) {}

//         //Verifier que le user est un admin
//         isLoggedIn() {
//             console.log("pass")
//             let token: any = window.localStorage.getItem('token')
//                 return this.authService.verifiedUser(token).pipe(
//                     map(({user}) => {
//                         console.log(user)
//                         if (user.status === "admin") {
//                             return true
//                         } else {
//                             this.router.navigate(['/auth/login'])
//                             return false
//                         }
//                     }),
//                     catchError((err) => {
//                         return of(false)
//                     })
//                 )
//         }

//     canActivate() {
//       return this.isLoggedIn()
//     }

export function authAdminGuard(): CanActivateChildFn {
    return () => {
        const $router = inject(Router)
        const $session = inject(SessionService)

        return $session.User$.pipe(
            map(user => {
                console.log("ADMIN_GUARD", user)
                if (!user) {
                    return $router.createUrlTree(["/auth/login"]);
                }

                return user.status === 'admin'
            })
        )
    }
}

