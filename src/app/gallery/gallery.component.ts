import { GalleryLoggerService } from "./../gallery-logger.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gallery",
  template: `<div class="gallery-wrapper">
    <div class="gallery-title">
      <h1>Gallery Title</h1>
    </div>
    <div class="gallery-content">
      <ng-content></ng-content>
    </div>
  </div>`,
  providers: [GalleryLoggerService],
})
export class GalleryComponent implements OnInit {
  constructor(private _logger: GalleryLoggerService) {}

  ngOnInit() {
    this._logger.logMessage("Gallery Initialization");
  }
}
