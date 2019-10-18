import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'calculateBonus'
})
export class CalculateBonusPipe implements PipeTransform {

  bonus:number;
  transform(value: any, ...args: any[]): any {
  
    if(value>45000 ){
      this.bonus=500;
    }
    else if( value===30000){
      this.bonus=400;
    }
    else {
      this.bonus=300;
    }
    return this.bonus;
  }

}
