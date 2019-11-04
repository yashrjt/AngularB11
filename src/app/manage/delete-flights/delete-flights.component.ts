import { Component, OnInit } from '@angular/core';
import {CreateService} from '../services/create.service';
import {Router} from '@angular/router';

@Component({
selector: 'app-delete-flights',
templateUrl: './delete-flights.component.html',
styleUrls: ['./delete-flights.component.css']
})

export class DeleteFlightsComponent implements OnInit {

flyArr: Array<Object>=[];

constructor( private flights:CreateService, private router:Router)  { }

ngOnInit() {
this.getFlightList();
}

getFlightList(){
this.flights.getFlightDetails().subscribe((res=>{
    console.log(res);
    console.log(Object.prototype.toString.call(res));
    this.flyArr = JSON.parse(JSON.stringify(res));
// for(let i in res){
// this.flyArr.push(res[i]);
// }
}),
(err)=>{
console.log("array parsing error", err)
});
}

submit(x:string) {
this.flights.deleteFlight(x)
    .subscribe(
    (val) => {
        this.getFlightList();
        console.log("DELETE call successful value returned in body", val);
        //this.router.navigate(['/manage/delete-flights']);
    },
    response => {
        console.log("DELETE call in error", response);
    },
    () => {
        console.log("The DELETE observable is now completed.");
    });

}

}
