import { Component, OnInit,Input,OnChanges } from '@angular/core';
import Coracao from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit,OnChanges {

  @Input('tentativas') public tentativas: number =0

  public coracoes: Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]

  constructor() { 
    console.log(this.coracoes)
   
    
  }

  ngOnChanges(): void {
    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas -1

        this.coracoes[indice].cheio = false
    }
    console.log(this.tentativas)
  }

  ngOnInit(): void {
    
  }


}
