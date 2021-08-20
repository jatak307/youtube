import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appItemBorderColor]',
})
export class ItemBorderColorDirective implements OnInit {
  @Input('appItemBorderColor') public publicationDateStr: string = '';

  public publicationDate?: Date;

  private currentDate: Date = new Date();

  constructor(private el: ElementRef, private r: Renderer2) {}

  public ngOnInit(): void {
    if (this.publicationDateStr) {
      this.publicationDate = new Date(this.publicationDateStr);
      if (this.el.nativeElement.className === 'detailed__back') {
        this.r.setStyle(
          this.el.nativeElement,
          'background',
          this.getColorByDate(this.publicationDate),
        );
      }
      this.r.setStyle(
        this.el.nativeElement,
        'borderBottomColor',
        this.getColorByDate(this.publicationDate),
      );
    }
  }

  private getColorByDate(date: Date): string {
    const { oneWeek: week, oneMoth: moth, sixMoth } = this.getPeriods();
    let color = '#EB5757';
    if (date > sixMoth) {
      if (date > week) {
        color = '#2F80ED';
      } else if (date < moth) {
        color = 'orange';
      } else {
        color = '#27AE60';
      }
    }
    return color;
  }

  private getPeriods() {
    const getOneWeekAgo = (): Date =>
      new Date(this.currentDate.getTime() - 1000 * 60 * 60 * 24 * 7);

    const getOneMonthAgo = (): Date =>
      new Date(this.currentDate.setMonth(this.currentDate.getMonth() - 1));

    const getSixMonthsAgo = (): Date =>
      new Date(this.currentDate.setMonth(this.currentDate.getMonth() - 6));

    return {
      oneWeek: getOneWeekAgo(),
      oneMoth: getOneMonthAgo(),
      sixMoth: getSixMonthsAgo(),
    };
  }
}
