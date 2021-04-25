import { Component, OnInit } from "@angular/core";
import { GalleryLoggerService } from "../gallery-logger.service";

@Component({
  selector: "app-gallery-slide",
  template: `<p>I'm a slide</p>`,
})
export class GallerySlideComponent implements OnInit {
  constructor(private _logger: GalleryLoggerService) {}

  ngOnInit() {
    this._logger.logMessage("Slide Initialization");
  }
}
