import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://t2.tudocdn.net/660617?w=1200&h=1200"
  contentTitle: string = "Chegou o aclamado remake de Naruto!"
  contentDescription: string = "Naruto uma obra de Masashi Kishimoto. "
  private id:string | null = "0"

  constructor(
    //private route:ActivatedRoute ->
  ) { }

  ngOnInit(): void {
   //this.route.paramMap.subscribe( value => this.id = value.get("id")) ->
   //this.setValuesTocComponent(this.id)
  }

  //setValuesToComponent(id:string | null){ const result = dataFake.filter(article => article.id == id) console.log(result)}

}
