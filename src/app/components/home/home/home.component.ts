import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cardsSlider : [{
    name: 'NameMovie',
    url: "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527272/wallpapersden.com_iphone-xs-original_3840x2160_ga6rki.jpg",
  },
  {
    name: 'NameMovie',
    url: "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527251/hussain-faruhaan-XOEL0hNDub0-unsplash_mjgcg4.jpg",
  },
  {
    name: 'NameMovie',
    url: "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527256/jakob-owens-_SXxTHUkCwE-unsplash_noqdpv.jpg",
  },
  {
    name: 'NameMovie',
    url: "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527257/maxime-bui-ZZvnCHl_c6M-zakinthosGreece_ybhpnm.jpg",
  },
  {
    name: 'NameMovie',
    url: "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527248/andre-abreu-zanzibarTanzania-unsplash_slogis.jpg",
  },
  {
    name: 'NameMovie',
    url: "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527248/andre-abreu-zanzibarTanzania-unsplash_slogis.jpg",
  },
  {
    name:  'NameMovie',
    url:"https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527248/federico-rizzarelli-norway-unsplash_qrg3dt.jpg",
  },
  {
    name:  'NameMovie',
    url: "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527251/geran-de-klerk-WJkc3xZjSXw-unsplash_u7t8zd.jpg",
  },
  {
    name:  'NameMovie',
    url:  "https://res.cloudinary.com/dp6zlazyt/image/upload/v1618527244/eberhard-grossgasteiger-ECpIDNdmO7k-unsplash_idezfl.jpg"
  }
  ];

  getBackground(){
    return 'green';
  }
}
