import { Component } from '@angular/core';

@Component({
  selector: 'app-fetch-data',
  standalone: true,
  imports: [],
  templateUrl: './fetch-data.component.html',
  styleUrl: './fetch-data.component.css'
})
export class FetchDataComponent {

  data: any='';

  constructor() { }

  ngOnInit(): void {
    
  }
  fetchData() {
    fetch('https://swapi.dev/api/people/1')
      .then(response => response.json())
      .then(data => {
        this.data = JSON.stringify(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
}
