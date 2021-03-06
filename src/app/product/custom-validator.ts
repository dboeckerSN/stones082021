import { AbstractControl } from "@angular/forms";

export class CustomValidators {
  static alphaNum(ctrl: AbstractControl): {[key: string]: boolean } | null {
    let pattern: RegExp = /^[a-zA-Z0-9]+$/;
    return pattern.test(ctrl.value) ? null : {alphaNum: true}
  }

  static positiv(ctrl: AbstractControl): {[key: string]: boolean } | null {
    let value = Number(ctrl.value);
    return value >= 0 ? null : {positiv: true}
  }
}
