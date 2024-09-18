import { Component } from '@angular/core';
import { DomaineService } from '../acceuil-formation/acceuil-formation-services/acceuil-formations-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription-formation-presentielle',
  templateUrl: './inscription-formation-presentielle.component.html',
  styleUrls: ['./inscription-formation-presentielle.component.css']
})
export class InscriptionFormationPresentielleComponent {

  cours_presentiel: any[] = [];

  constructor(private domaineService: DomaineService, private router: Router) { }
  
  ngOnInit(): void {
    this.loadDomaines();
  }
  
  loadDomaines(): void {
    this.domaineService.getCours_presentiel().subscribe(data => {
      this.cours_presentiel = data;
    });
  }
  
  onSelectDomaine(idcoursPresentiel: string): void {
    this.router.navigate([`/FormationPresentielle/${idcoursPresentiel}/coursPresentiel`]); // Redirection vers la page des matières du domaine sélectionné
  };


}
