import { OpaqueToken } from '@angular/core';

// In Caps becuase it a Convension of using OpaqueToken
export let TOASTR_TOKEN = new OpaqueToken('toastr');

export interface IToastr {
  success(msg: string, title?: string): void;
  info(msg: string, title?: string): void;
  warning(msg: string, title?: string): void;
  error(msg: string, title?: string): void;
}