import { ILogger } from "./logger";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GalleryLoggerService implements ILogger {
  private _prefix = "Gallery Log";
  constructor() {}

  logMessage(msg: string): void {
    console.log(`${this._prefix} : ${msg}`);
  }
}
