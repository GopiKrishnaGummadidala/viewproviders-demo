import { GalleryLoggerService } from "./../gallery-logger.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"],
  providers: [GalleryLoggerService],
})
export class GalleryComponent implements OnInit {
  constructor(private _logger: GalleryLoggerService) {}

  ngOnInit() {
    this._logger.logMessage("Gallery Initialization");
  }
}
