let colorsArr = ['red','green','yellow','blue','pink','brown','purple','orange']
let listOfObjTiles = []

let gameDone = false

let choiceCount = 0;

let firstTile = null;
let secondTile = null;

let pair0 = false
let pair1 = false
let pair2 = false
let pair3 = false
let pair4 = false
let pair5 = false
let pair6 = false
let pair7 = false



    let rCount=0;
    let gCount=0;
    let yCount=0;
    let bCount=0;
    let pCount=0;
    let broCount=0;
    let purCount=0;
    let oCount=0;





     //onload
    //create objects for every tile on index.html  

let targetedDivs = document.querySelectorAll('.tile')

for (let i = 0;i < targetedDivs.length ; i++){
    listOfObjTiles.push({
        'id': targetedDivs[i].id
    })

    console.log(listOfObjTiles[i].id)
}



function coverTiles(){
    for(let i =0; i < listOfObjTiles.length; i++){
        //  console.log(tiles[i].id)
         document.getElementById(listOfObjTiles[i].id).style.backgroundColor = 'black'  //set every card to deafult{black} color on load
    }
}




//give every tile a color property 

function giveColor(){
    
    for(let i =0; i < targetedDivs.length; i++){  
        

    let color = 8;
    while(color > 7){
        color = Math.floor(Math.random() *10)
    }


    let tileColor = document.getElementById(targetedDivs[i].id).style.backgroundColor = colorsArr[color]
        
    listOfObjTiles[i].color = colorsArr[color]  //allows to store the orignal color of the tile when rest back to deafult color,saves to the object tile related to the elem in html
    
    


        // console.log(listOfObjTiles[i].color)
        // document.getElementById(listOfObjTiles[i].id).addEventListener('click',flip(listOfObjTiles[i].color,listOfObjTiles[i].id))
    switch(tileColor){
        case colorsArr[0]:
            rCount++
            console.log(rCount)
            if( rCount >= 3){
                i--
                rCount--
            }
                // continue;

            break;

        case colorsArr[1]:
            gCount++
           
            if( gCount >= 3){                    
                i--
                gCount--
            }   
             break;


        case colorsArr[2]:
            yCount++
            if( yCount >= 3){
                i--
                yCount--
            }
            break;

        case colorsArr[3]:
            bCount++
            if( bCount >= 3){
                i--
                bCount--
            }
            break;

        case colorsArr[4]:
            pCount++
            if( pCount >= 3){
                i--
                pCount--
            }
            break;

        case colorsArr[5]:
            broCount++
            if( broCount >= 3){
                i--
                broCount--
            }
            break;


        case colorsArr[6]:
                purCount++
                if( purCount >= 3){
                    i--
                    purCount--
                }
            break;

        case colorsArr[7]:
            oCount++
            if( oCount >= 3){
                i--
                oCount--
            }
        break;


            default:
                break;
        
            }  //end of switch statement

        
            document.getElementById(listOfObjTiles[i].id).addEventListener('click',function(){
                console.log('clicked')
                
                document.getElementById(listOfObjTiles[i].id).style.backgroundColor = listOfObjTiles[i].color


                if (firstTile === null ) {
                firstTile = listOfObjTiles[i].color;  
                console.log('you choose ' + firstTile + " as your first tile")
                } 
                else if(secondTile == null){
                    secondTile = listOfObjTiles[i].color
                    console.log('you choose ' + secondTile + " as your second tile")
                }





             })



        }       //end of the for loop

 


}
   

     giveColor()   //invokes function to assign each tile a color
     coverTiles()  






     
        pair0 == true;
        console.log(pair0)
     
    
    for(let i = 0; i < listOfObjTiles.length; i++){   //this loop gives every tile a click function 
        
        console.log(listOfObjTiles[i].color)      //loop to figure out the color of each tile
        
    }

  
     do{
        
        //print out make your first choice
        if(choiceCount == 0){
            break;
        }
        else if (choiceCount == 1){
            
        }
        else {
            console.log('you made two choices')
            break;
        }


    } while(!gameDone)
    
        








     

     


    // document.getElementById(listOfObjTiles[i].id).addEventListener('dblclick',function(){
        //     console.log('clickedtwice')
        //     document.getElementById(listOfObjTiles[i].id).style.backgroundColor = 'black'
            
        //  })


    

    //if not clicked then set to deafult{black} color

        
    //if clicked then expose tile color until the a second click is made on another tile.



/*

if both tiles do not have matching property value (which is the name of the color in a string)
then invoke function that sets the color back to deafult.

if tiles do match,then leave the expose color until all other tiles are exposed (boolean for exposed)

*/