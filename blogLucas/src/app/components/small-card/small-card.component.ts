import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover: string = "https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2022/09/jujutsu-kaisen-season-two-shibuya-incident-teaser-visual-scaled-e1664169559441.jpg"

  @Input()
  cardTitle: string = "Jujustu Kaisen: Incidente de Shibuya"

  @Input()
  cardLink: string = "https://br.ign.com/jujutsu-kaisen/113915/news/jujutsu-kaisen-abertura-do-arco-incidente-de-shibuya-esconde-pistas-sobre-o-que-pode-acontecerhttps://br.ign.com/jujutsu-kaisen/113915/news/jujutsu-kaisen-abertura-do-arco-incidente-de-shibuya-esconde-pistas-sobre-o-que-pode-acontecer"

  @Input()
  Id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
