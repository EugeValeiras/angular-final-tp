import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Role, RoleService} from '../service/role.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import {Subscription} from 'rxjs/Subscription';

@Directive({
  selector: '[ifRole]'
})
export class IfRoleDirective implements OnInit, OnDestroy {

  role$: Subscription;
  @Input('ifRole') ifRole: Role;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private roleService: RoleService) {
  }

  ngOnInit(): void {
    this.roleService.role$
      .do(() => this.viewContainer.clear())
      .filter(role => role === this.ifRole)
      .subscribe(() => {
        this.viewContainer.createEmbeddedView(this.templateRef);
      });
  }

  ngOnDestroy(): void {
    this.role$.unsubscribe();
  }

}
