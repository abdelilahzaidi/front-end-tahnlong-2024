import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ProgramService } from "src/app/services/program/program.service";



export function programResolver(): ResolveFn<any> {
    return (
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<any>|Promise<any>|any => {
        const programService = inject(ProgramService)
        const programId = route.paramMap.get("id")

        return programService.getprogramById(programId)
      }
}
