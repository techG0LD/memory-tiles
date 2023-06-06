    let pattern = ['red','green','yellow','blue','pink','brown','purple','orange']
    //make each element in array into object  [{color:'red'},{color:'green'}]
    
    
    let found = false;

    let rCount=0;
    let gCount=0;
    let yCount=0;
    let bCount=0;
    let pCount=0;
    let broCount=0;
    let purCount=0;
    let oCount=0;

    let ran = false


   


   
    /* 

    Title: Matching tiles 

    how to play : match all tiles until no more pairs can be matched . 

    Rules: you are given 16 tiles all of which are the same color to disguise the real color,
     your job is to click on two tiles to reviel a match pair . 
     
     if not a matching set of tile color ,the tiles revert back to black color.
     if two tiles are matches, the tiles will stay exposed until game is done. 


   */




    // document.getElementById('1/1').addEventListener('click',flip)
    // document.getElementById('1/2').addEventListener('click',flip)
    // document.getElementById('1/3').addEventListener('click',flip)
    // document.getElementById('1/4').addEventListener('click',flip)
    // document.getElementById('2/1').addEventListener('click',flip)
    // document.getElementById('2/2').addEventListener('click',flip)
    // document.getElementById('2/3').addEventListener('click',flip)
    // document.getElementById('2/4').addEventListener('click',flip)
    // document.getElementById('3/1').addEventListener('click',flip)  line 20-24 does this work
    // document.getElementById('3/2').addEventListener('click',flip)
    // document.getElementById('3/3').addEventListener('click',flip)
    // document.getElementById('3/4').addEventListener('click',flip)
    // document.getElementById('4/1').addEventListener('click',flip)
    // document.getElementById('4/2').addEventListener('click',flip)
    // document.getElementById('4/3').addEventListener('click',flip)
    // document.getElementById('4/4').addEventListener('click',flip)





    // let tiles = document.getElementsByTagName('div')  //select div elements
    let tiles = document.querySelectorAll('.tile')  //makes array of the card tiles

    



    function coverTiles(){
        for(let i =0; i < tiles.length; i++){
            //  console.log(tiles[i].id)
             document.getElementById(tiles[i].id).style.backgroundColor = 'black'  //set every card to deafult{black} color on load
        }
    }

    coverTiles()

    


    function giveColor(ran){

        if(!ran){
            ran = true;
            for(let i =0; i < tiles.length; i++){  //adding function with a click to each Div
        

                let color = 8;
                while(color > 7){
                    color = Math.floor(Math.random() *10)
                }
        
        
                let tileColor = document.getElementById(tiles[i].id).style.backgroundColor = pattern[color]
        
        
                switch(tileColor){
                    case pattern[0]:
                        rCount++
                        
                        console.log(rCount)
                        if( rCount >= 3){
                            i--
                            rCount--
                        }
                        // continue;
        
                    break;
        
                    case pattern[1]:
                        gCount++
                        if( gCount >= 3){
                            i--
                            gCount--
                        }
        
                    break;
        
        
                    case pattern[2]:
                        yCount++
                        if( yCount >= 3){
                            i--
                            yCount--
                        }
                    break;
        
        
                    case pattern[3]:
                        bCount++
                        if( bCount >= 3){
                            i--
                            bCount--
                        }
                    break;
        
        
                    case pattern[4]:
                        pCount++
                        if( pCount >= 3){
                            i--
                            pCount--
                        }
                    break;
        
                    case pattern[5]:
                        broCount++
                        if( broCount >= 3){
                            i--
                            broCount--
                        }
                    break;
        
        
                    case pattern[6]:
                        purCount++
                        if( purCount >= 3){
                            i--
                            purCount--
                        }
                    break;
        
                    case pattern[7]:
                        oCount++
                        if( oCount >= 3){
                            i--
                            oCount--
                        }
                    break;
        
        
                    default:
                        break;
                }
        
              
        
            document.getElementById(tiles[i].id).addEventListener('click',flip)
            
            }

             
        }
        

        //if ran is true, do nothing
        
    }

    
    
   giveColor(ran)
   
    




    function cover(){
        console.log('covered')
    }



    function flip(){
        console.log('clicked');
        
        // console.log(color)
        
        // this.style.backgroundColor = pattern[color];  ///how did 'this' work
    }


    // function changeColor



    

    


