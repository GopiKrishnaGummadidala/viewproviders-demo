import { ILogger } from "./logger";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class GallerySlideLoggerService implements ILogger {
  private _prefix = "Gallery Slide Logger";
  constructor() {}
  logMessage(msg: string): void {
    console.log(`${this._prefix} : ${msg}`);
  }
}
