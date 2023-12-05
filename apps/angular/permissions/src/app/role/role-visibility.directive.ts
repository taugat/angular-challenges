import { NgIf } from '@angular/common';
import { Directive, Input } from '@angular/core';
import { Role } from '../user.model';
import { UserRoleService } from './user-role.service';

@Directive({
  standalone: true,
  selector: '[hasRole], [adminAccess]',
  hostDirectives: [NgIf],
})
export class RoleVisibilityDirective {
  constructor(
    private ngIf: NgIf,
    private userRoleService: UserRoleService,
  ) {}

  @Input() set hasRole(role: Role | Role[]) {
    this.userRoleService
      .hasRoleOrIsAdmin$(role)
      .subscribe((hasRole) => (this.ngIf.ngIf = hasRole));
  }

  @Input() set adminAccess(requieredAdmin: boolean) {
    this.userRoleService
      .matchAccess$(requieredAdmin)
      .subscribe((match) => (this.ngIf.ngIf = match));
  }
}
