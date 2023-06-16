import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { URlService } from '../Services/url.service';

type NewType = number;

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent {
  constructor(private http:HttpClient,private url:URlService){}
  public registration:any={nom:""}
  EmpData:any=[] 
  static:any=
  {
    annee1: '',
    annee2: '',
  }
  empActif:number=0;
  empDesactif:number=0;
  x:number=0;
  staticForm=new FormGroup
  ({
    annee1:new FormControl('',[Validators.required]),
    annee2:new FormControl('',[Validators.required]),
  })
  affiche: boolean=false;
  get annee1(): FormControl { return this.staticForm.get('annee1') as FormControl; }
  get annee2(): FormControl { return this.staticForm.get('annee2') as FormControl; }  

  onSubmit()
  {
    this.affiche=true;
    this.static.annee1 =  this.staticForm.value.annee1
    this.static.annee2 = this.staticForm.value.annee2
    this.EmployeeActive()
    this.empActif=Number(sessionStorage.getItem("EmpActif"))
    this.empDesactif=Number(sessionStorage.getItem("Empdesactif"))
    this.updateChart(Number(sessionStorage.getItem("EmpActif")));
    this.getEmployeedata()
    if(Number(sessionStorage.getItem("Empdesactif"))+Number(sessionStorage.getItem("EmpActif"))==0)
    {this.x=0}
    else{this.x=this.empActif/this.empDesactif}
    this.x=this.empActif/this.empDesactif
  }
  getEmployeedata(){this.http.get<any>(this.url.EmployeeUrl,this.registration).subscribe(data=>{this.EmpData=data;})}
  view: [number,number] = [1000, 500];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';
  colorScheme = {domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']};
  single = 
  [
    {
      "name": "A=Employee Actif",
      "value": this.empActif
    },
    {
      "name": "B=Employee resignated",
      "value": this.empDesactif 
    },
    {
      "name": "A/B",
      "value": this.empActif/this.empDesactif
    }
  ];
  updateChart(empActif:any) 
  {
    this.single = 
    [
      {
        "name": "A=Employee Actif ",
        "value":  this.empActif
      },
      {
        "name": "B=Employee resignated",
        "value": this.empDesactif
      },
      {
        "name": "A/B",
        "value": this.empActif/this.empDesactif
      }
    ];
  }
  onSelect(event: any) {console.log(event);}
  EmployeeActive()
  {
    let activeEmployeeCount = 0;
    try 
    {
      this.http.get<any>(this.url.EmployeeUrl, this.registration).subscribe(data => 
        {
          this.EmpData = data;
          for (let employee of this.EmpData) 
          {
            if (employee.state)
            {
              var date = Number(employee.launchDate.substring(0, 4));
              if((date<Number(this.static.annee2))&&(date>Number(this.static.annee1)))
              {
                activeEmployeeCount++;
              }
            }
          }
          sessionStorage.setItem('EmpActif',activeEmployeeCount.toString()) 
        });
    } catch (error) {
        console.error(error);
    }
    let desEmp = 0;
    try 
    {
      this.http.get<any>(this.url.EmployeeUrl, this.registration).subscribe(data => 
        {
          this.EmpData = data;
          for (let employee of this.EmpData) 
          {
            if (employee.state==false)
            {
              var date = Number(employee.launchDate.substring(0, 4));
              if((date<Number(this.static.annee2))&&(date>Number(this.static.annee1)))
              {
                desEmp++;
              }
            }
          }
          sessionStorage.setItem('Empdesactif',desEmp.toString()) 
        });
      } catch (error) {
        console.error(error);
      }
  }

}
