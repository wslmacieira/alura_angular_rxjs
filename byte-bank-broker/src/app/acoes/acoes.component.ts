import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AcoesService } from './acoes.service';
import { Acoes } from './modelo/acoes';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.css'],
})
export class AcoesComponent implements OnInit, OnDestroy {
  acoesInput = new FormControl();
  acoes: Acoes;
  private subscription: Subscription;

  constructor(private acoesService: AcoesService) {}

  ngOnInit(): void {
    this.subscription = this.acoesService.getAcoes().subscribe((acoes) => {
      this.acoes = acoes;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
