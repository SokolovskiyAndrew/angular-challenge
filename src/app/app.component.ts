import { Component } from '@angular/core';
import { AccordionItem } from './components/accordion/accordion-item.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-challenge';
  accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Expanded example 1',
      isExpanded: false
    },
    {
      title: 'Example 2',
      content: 'Expanded example 2',
      isExpanded: false
    },
  ]
}
