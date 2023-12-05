import { Injectable } from '@angular/core';
import { Role } from '../user.model';
import { UserStore } from '../user.store';
import { Observable, combineLatest, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  private roles$: Observable<Role[]>;
  private admin$: Observable<boolean>;

  constructor(userStore: UserStore) {
    this.roles$ = userStore.user$.pipe(
      map((user) => {
        var roles: Role[] = [];
        if (undefined !== user) {
          roles.push(...user.roles);
        }
        return roles;
      }),
    );

    this.admin$ = userStore.user$.pipe(
      map((user) => undefined !== user && user.isAdmin),
    );
  }

  public hasRole$(requieredRole: Role | Role[]): Observable<boolean> {
    const requieredRoles = Array.isArray(requieredRole)
      ? requieredRole
      : [requieredRole];
    return this.roles$.pipe(
      map((roles) =>
        requieredRoles.length === 0
          ? true
          : requieredRoles.some((rr) => roles.includes(rr)),
      ),
    );
  }

  public hasRoleOrIsAdmin$(requieredRole: Role | Role[]) {
    return combineLatest(
      [this.hasRole$(requieredRole), this.admin$],
      (o1, o2) => o1 || o2,
    );
  }

  public matchAccess$(requieredAdmin: boolean) {
    return this.admin$.pipe(
      map((admin) => (requieredAdmin && admin) || (!requieredAdmin && !admin)),
    );
  }
}
