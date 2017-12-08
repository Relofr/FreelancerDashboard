import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Company 1', 'http://www.google.com', 'ROR', 150, 120, 15, 'test@test.com')
  proposalTwo: Proposal = new Proposal(25, 'Company 2', 'http://www.google.com', 'ROR', 150, 120, 15, 'test@test.com')
  proposalThree: Proposal = new Proposal(10, 'Company 3', 'http://www.google.com', 'ROR', 150, 120, 15, 'test@test.com')

  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree,
  ]
}