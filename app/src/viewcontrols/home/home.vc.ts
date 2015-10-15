import {register, controls} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');
    bigGreenBox: controls.INamedElement<HTMLDivElement, any>;
    randColor: controls.INamedElement<HTMLDivElement, any>;
    context: any = {
        greeting: '',
        someBool: true,
        someNumber: 4,
        getName: '',
        displayName: '',
        persons: ['Taylor','Zorro','Clark Kent','Conan of Cimmeria',
				'John Wayne','Bart Simpson']
    };
    
        postAlert() {
            console.log("I am inside postAlert")
            alert("Hey Howdy Buddy!");
        }
        postText(greetingText: string){
            console.log("I am inside postText");
            alert(greetingText);
            //alert(this.context.greeting);
        }
        hoverSquare(){
            console.log("I am inside hoverSquare");
           // this.addEventListener('mouseover', (ev: MouseEvent) => { });
           //this.addEventListener('toggle', (ev: ToggleEvent)=>{});
            if (this.context.someBool){
                this.bigGreenBox.element.style.backgroundColor='green';
                console.log("I am inside if");
            }else{
                this.bigGreenBox.element.style.backgroundColor='purple';
                //background-color: red;
                console.log("I am inside else");
            }
            	/*$("#chameleon").hover(function() {
		          console.log("I happened");
		          $(this).addClass("hover");
	            }, 
		              function() { 
			      $(this).removeClass("hover");
	           });*/
            
        }
        randomColor(){
            
            this.randColor.element.style.color ='rgb(' + (Math.floor(Math.random() * 256)) + ',' +
					 (Math.floor(Math.random() * 256)) + ',' +
					 (Math.floor(Math.random() * 256)) + ')';
 
                     console.log("I am under the random algorithm"); 
        }
        postName(getName: string){
            console.log("I am inside postNames");
			this.context.displayName = getName;
		}	
        
        
}


    

register.viewControl('home-vc', HomeViewControl);
