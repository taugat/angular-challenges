import { inject } from '@angular/core';
import { UserRoleService } from './app/role/user-role.service';
import { CanMatchFn, Route, UrlSegment } from '@angular/router';
import { Role } from './app/user.model';
import { combineLatest } from 'rxjs';

export const HasAccessGuard: CanMatchFn = (route: Route) => {
  const requieredAdmin: boolean = route.data?.['isAdmin'] ?? false;
  const requieredRole: Role[] = route.data?.['roles'] ?? [];

  const userRoleService = inject(UserRoleService);
  return combineLatest(
    [
      userRoleService.matchAccess$(requieredAdmin),
      userRoleService.hasRole$(requieredRole),
    ],
    (o1, o2) => o1 && o2,
  );
};
