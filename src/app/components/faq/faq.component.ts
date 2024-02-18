import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent implements OnInit {
  panelOpenState: boolean = false;
  searchInput: string = '';
  faqData: any[] = [
    {
      title: "What is Lorem Ipsum?",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      title: "Why do we use it?",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    },
    {
      title: "Where does it come from?",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text."
    },
    {
      title: "Where can I get some?",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }
  ];
  showFaqData: any[] = [];
  constructor() {
    this.showFaqData = this.faqData;
  }

  ngOnInit(): void {
  }

  searchInputData() {
    this.filterFAQsAdvanced(this.searchInput);
  }

  filterFAQsAdvanced(inputString: string) {
    const regex = new RegExp(inputString.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
    this.showFaqData = this.faqData.map(item => {
      const titleMatches = item.title.match(regex) || [];
      const descriptionMatches = item.description.match(regex) || [];
      const score = titleMatches.length * 2 + descriptionMatches.length;

      return {
        item,
        score
      };
    }).filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item);
  }

  clearInput() {
    this.searchInput = '';
    this.showFaqData = this.faqData;
  }
}
