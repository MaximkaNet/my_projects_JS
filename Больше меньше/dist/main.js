(()=>{"use strict";({isInitiolized:!1,controls:document.querySelector("#controls"),valueBlock:document.querySelector("#value"),min:0,max:100,value:50,init(){if(!this.isInitiolized){const i=this;i.reset(),this.controls.addEventListener("click",(function(e){switch(e.target.id){case"more":i.more();break;case"less":i.less()}i.print(),i.isWin()&&(alert("You win!!!!"),i.reset(),i.print())})),this.isInitiolized=!0}},more(){this.min=this.value,this.value+=parseInt((this.max-this.value)/2),console.log("more"),console.log(`min: ${this.min}`),console.log(`max: ${this.max}`),console.log(`value: ${this.value}`)},less(){this.max=this.value,this.value-=parseInt((this.value-this.min)/2),console.log("less"),console.log(`min: ${this.min}`),console.log(`max: ${this.max}`),console.log(`value: ${this.value}`)},isWin(){return this.value===this.min||this.value===this.max},reset(){this.value=50,this.min=0,this.max=100,console.clear()},print(){this.valueBlock.textContent=this.value}}).init()})();