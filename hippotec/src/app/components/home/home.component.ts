import {Component, OnInit} from '@angular/core';
import {FlowersServiceService} from "../../services/flowers-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  flowers: any[];
  flowersCopy: any[];
  translates: any[]; // whole translates object
  languages: any[]; // array of languages [en, ru, he]
  selectedLanguage: string; // selected language: en
  selectedLanguageEnum: number; // reference for Active class on selected language top bar

  constructor(private flowersService: FlowersServiceService) {
    this.flowers = [];
    this.flowersCopy = [];
    this.translates = [];
    this.selectedLanguageEnum = 0;
  }

  ngOnInit() {
    this.flowersService.getFlowersList().then(resp => {
      this.flowers = resp.data;
      this.flowersCopy = resp.data;
    }, err => {
      console.log(err);
    });

    this.flowersService.getTranslates().then(resp => {
      this.translates = resp.data;
      this.selectedLanguage = 'en';
      this.languages = Object.keys(resp.data);
    }, err => {
      console.log(err);
    });
  }

  filterFlowers(event) {
    this.flowers = event.target.value.length > 0 ? this.flowers.map(ele => ele.name && ele.name.includes(event.target.value) ? ele : '') : JSON.parse(JSON.stringify(this.flowersCopy));
  }

  changeLang(lang, index) {
    this.flowers = JSON.parse(JSON.stringify(this.flowersCopy));
    this.selectedLanguage = lang;
    this.selectedLanguageEnum = 0;
    if (lang !== 'en') {
      this.selectedLanguageEnum = index;
      this.flowers.forEach(ele => {
        for (let key in ele) {
          if (ele.hasOwnProperty(key)) {
            for (let langKey in this.translates[lang]) {
              if (this.translates[lang].hasOwnProperty(langKey)) {
                if (ele[key] === langKey) {
                  ele[key] = this.translates[lang][langKey];
                }
              }
            }
          }
        }
      })
    }
  }

}
