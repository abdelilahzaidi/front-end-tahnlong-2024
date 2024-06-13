import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LieuService } from "src/app/services/lieu/lieu.service";




export function programResolver(): ResolveFn<any> {
    return (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<any>|Promise<any>|any => {
        const lieuService = inject(LieuService)
        const lieuId = route.paramMap.get("id")

        return lieuService.getLieuById(lieuId)
      }
}
