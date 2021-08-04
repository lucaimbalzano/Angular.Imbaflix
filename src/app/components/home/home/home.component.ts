import { Component, OnInit } from '@angular/core';
import { CardSlider } from 'src/app/cardSlider';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counterSlider = 0;
  cardSliderSupport:CardSlider[];

  constructor() { }
  
  ngOnInit(): void {
    this.getCardsSliders(this.cardsSlider);
  }

  getCardsSliders(cardsSlider:CardSlider[] ){
    for(let card of cardsSlider){
        this.counterSlider+=1;
        
        this.cardSliderSupport.push(card);
        if(this.counterSlider == 5)
          {return this.cardSliderSupport;}
    }
    return cardsSlider;
  }

  cardsSlider :CardSlider[] = [{
    id:1,
    name: 'NameMovie',
    url: "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527272/wallpapersden.com_iphone-xs-original_3840x2160_ga6rki.jpg",
  },
  {
    id:2,
    name: 'NameMovie',
    url: "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527251/hussain-faruhaan-XOEL0hNDub0-unsplash_mjgcg4.jpg",
  },
  {
    id:3,
    name: 'NameMovie',
    url: "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527256/jakob-owens-_SXxTHUkCwE-unsplash_noqdpv.jpg",
  },
  {
    id:4,
    name: 'NameMovie',
    url: "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527257/maxime-bui-ZZvnCHl_c6M-zakinthosGreece_ybhpnm.jpg",
  },
  {
    id:5,
    name: 'NameMovie',
    url: "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527248/andre-abreu-zanzibarTanzania-unsplash_slogis.jpg",
  },
  {
    id:6,
    name: 'NameMovie',
    url: "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527248/andre-abreu-zanzibarTanzania-unsplash_slogis.jpg",
  },
  {
    id:7,
    name:  'NameMovie',
    url:"https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527248/federico-rizzarelli-norway-unsplash_qrg3dt.jpg",
  },
  {
    id:8,
    name:  'NameMovie',
    url: "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527251/geran-de-klerk-WJkc3xZjSXw-unsplash_u7t8zd.jpg",
  },
  {
    id:9,
    name:  'NameMovie',
    url:  "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527244/eberhard-grossgasteiger-ECpIDNdmO7k-unsplash_idezfl.jpg"
  }
  ];


}
