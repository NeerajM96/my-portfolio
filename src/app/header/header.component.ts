import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  typewriterText = '';
  dataText = ["Frontend Engineer","","Backend Engineer","","Full Stack Engineer"];
  constructor() { }

  ngOnInit(): void {
    this.typewriter();
  }

  // Modify this function for typewriter effect
  typewriter(){
    // for(let j=0;j<this.dataText.length;j++){
    //   for(let i = 0;i<this.dataText.length;i++){
    //     setTimeout(()=>{
    //       console.log(i)
    //       this.typewriterText = this.dataText[i]
    //     },2000)
    //   }
    // }

    let i = 0;
    var te= setInterval(()=>{
      this.typewriterText = this.dataText[i]
      i+=1;
      if(i== this.dataText.length){
        clearInterval(te);
      }
    },1500)

  }
}
