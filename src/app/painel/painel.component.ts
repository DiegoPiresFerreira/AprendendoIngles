import { Component, OnInit,EventEmitter, Output, OnDestroy } from '@angular/core';

import Frase from '../shared/frase.model'
import {FRASES} from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {


  public frases: Array<Frase> = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''
  public rodada: number = 0
  public rodadaFrase: Frase = this.frases[0]
  public progresso: number =0
  public tentativas: number = 3
  @Output() public encerrarJogo: EventEmitter<string> =  new EventEmitter()

  constructor() {

   }
  ngOnInit(): void {
  }

  ngOnDestroy():void{
    console.log('Componente destruido!')
  }

  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta():void{
    if(this.rodadaFrase.frasePtBr  == this.resposta){
      if(this.rodada == 3){
        this.encerrarJogo.emit('vitoria')
        this.progresso = 100
      }
      this.atualizaRodada()
      this.progresso += (100 / this.frases.length)
    }
    else{ 
      this.tentativas--
      if(this.tentativas === -1){
          this.encerrarJogo.emit('derrota')
      }
    }

  }

  public atualizaRodada():void{
    this.rodada++
    this.rodadaFrase = this.frases[this.rodada]
    this.resposta = ''
  }
    
}
