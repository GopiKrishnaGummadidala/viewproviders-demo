import { GallerySlideLoggerService } from "./gallery-slide-logger.service";
import { GalleryLoggerService } from "./gallery-logger.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<main>
    <app-gallery>
      <app-gallery-slide></app-gallery-slide>
      <app-gallery-slide></app-gallery-slide>
    </app-gallery>
  </main>`,
  styleUrls: ["./app.component.scss"],
  providers: [
    { provide: GalleryLoggerService, useExisting: GallerySlideLoggerService },
  ],
})
export class AppComponent {
  title = "viewproviders-demo";
}
