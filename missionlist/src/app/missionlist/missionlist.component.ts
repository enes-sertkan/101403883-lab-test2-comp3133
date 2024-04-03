import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service'; // Adjust the path as needed

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: any[] = [];

  constructor(private SpacexService: SpacexService) { }

  ngOnInit(): void {
    this.getLaunches();
  }

  getLaunches(): void {
    this.SpacexService.getLaunches().subscribe(
      (data) => {
        this.missions = data;
      },
      (error) => {
        console.error('There was an error!', error);
      }
    );
  }
}
