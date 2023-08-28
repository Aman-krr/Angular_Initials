import { Component } from '@angular/core';

@Component({
  selector: '.data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  Server_Id:number=101;
  private Status:string='Active';
  PortsAllowed:number[]=[101,102,302];
  allowAdd:boolean=false;
  serverCreationStatus="No Server Created";
  serverName='';
  recordCreated='';
  emailData='';
  showEmail:boolean=false;
  newPort:number=0;
  constructor(){
    setTimeout(()=>{this.allowAdd=true},2000)
    
  }
  getStatus(){
    return this.Status;
  }
  onCreateServer(){
    this.serverCreationStatus=this.serverName+" server Created";
    
  }
  updateServerName(event:any){
    this.serverName=event.target.value;
  }
  onClickCreateRecord(){
    this.serverName=this.recordCreated;
  }
  onClickClearRecord(){
    this.serverName=this.recordCreated='';
  }
  onClickEmail(){
    this.emailData='';
  }
  enableButton():boolean{
    if(this.emailData !=''){
      return false;
    } else return true;
  }
  showEmailCondiion(){
    if(this.emailData.includes('@')){
     return true;
    } else {
     return false;
    }
  }
  getColorWhenValid(){
    var val=this.showEmailCondiion();
    if(val ==true){
      return 'green';
    } else return 'red';
  }
  addPorts(){
    this.PortsAllowed.push(this.newPort)
  }
}
