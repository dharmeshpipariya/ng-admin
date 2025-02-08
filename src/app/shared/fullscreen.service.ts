import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class FullscreenService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleFullscreen(): void {
    if (!this.document.fullscreenElement) {
      this.openFullscreen();
    } else {
      this.closeFullscreen();
    }
  }

  // Enter Fullscreen
  private openFullscreen(): void {
    const elem = this.document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if ((elem as any).webkitRequestFullscreen) {
      (elem as any).webkitRequestFullscreen();
    } else if ((elem as any).msRequestFullscreen) {
      (elem as any).msRequestFullscreen();
    }
  }

  // Exit Fullscreen
  private closeFullscreen(): void {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if ((this.document as any).webkitExitFullscreen) {
      (this.document as any).webkitExitFullscreen();
    } else if ((this.document as any).msExitFullscreen) {
      (this.document as any).msExitFullscreen();
    }
  }

  // Check if Fullscreen is Active
  isFullscreen(): boolean {
    return !!this.document.fullscreenElement;
  }
}
