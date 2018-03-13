var rover ={
  direction: "N",
  y:0,
  x:0,
  travelLog: []
};




var grid = [
  [rover,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  ["S",null,null,null,null,null,null,null,null,null],
  [null,null,null,null,"S",null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,null,null,null,"S",null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,null,null,"S",null,null,null,null,null,null],
  [null,null,null,null,null,null,null,null,null,null],
  [null,"S",null,null,null,null,null,null,null,null],
];

for (var i = 0; i < grid.length; i++){
  
  var y = grid[i];
  
  for (var j = 0; j < y.length; j++){
    var x = y[j];
    
  }
}


function turnLeft(){
  switch(rover.direction){
      
    case "N":
    rover.direction="W";
    break;
      
    case "E":
    rover.direction="N";
    break;
      
    case "S":
    rover.direction="E";
    break;
      
    case "W":
    rover.direction="S";
    break;
  }
  console.log("Current direction of Rover is " + rover.direction);
};



function turnRight(){
  switch(rover.direction){
  
    case "N":
    rover.direction="E";
    break;
    
    case "E":
    rover.direction="S";
    break;
    
    case "S":
    rover.direction="W";
    break;
    
    case "W":
    rover.direction="N";
    break;
  }
  console.log("Current direction of Rover is " + rover.direction);
              };



function moveForward(rover){
  switch (rover.direction){
      
    case "N":
    if (rover.y >=1){
      if (grid[rover.y - 1][rover.x]=== null){
    rover.y -=1, rover.x;
      rover.travelLog.push("["+rover.y,rover.x+"]");
      }
      else
      {
       console.log("Obstacle!!!Cannot proceed"); 
    }
    }
    else
    {
      rover.travelLog.push("["+rover.y,rover.x+"]");
      console.log("Danger. off the map");
    
    };
    break;
      
    case "E":
    if (rover.x <=8){
      if (grid[rover.y][rover.x + 1]=== null){
    rover.x += 1, rover.y;
      rover.travelLog.push("["+rover.y,rover.x+"]");
      }
      else
        {
          console.log("Obstacle!!!Cannot proceed");
        }
    }
    else
    {
      rover.travelLog.push("["+rover.y,rover.x+"]");
      console.log("DANGER!!! Off the map");
    }
    break;
      
    case "S":
    if(rover.y <= 8){
      if (grid[rover.y + 1][rover.x]=== null){
    rover.x, rover.y += 1;
      rover.travelLog.push("["+rover.y,rover.x+"]");
      }
      else
        {
          console.log("Obstacle!!!Cannot procee");
    }
    }
    else
    {
      rover.travelLog.push("["+rover.y,rover.x+"]");
      console.log("DANGER!!! Off the map");
    }
    break;
      
    case "W":
    if (rover.x >= 1){
      if (grid[rover.y][rover.x - 1]=== null){
    rover.x -= 1, rover.y;
      rover.travelLog.push("["+rover.y,rover.x+"]");
      }
      else
        {
          console.log("Obstacle!!!Cannot proceed");
        }
    }
    else
    {
      rover.travelLog.push("["+rover.y,rover.x+"]");
      console.log("DANGER!!! Off the map");
    } 
    break;
  }
  console.log("Rover position is: " + rover.travelLog);
};



function moveBackward (rover){
  switch (rover.direction){
      
    case "N":
      if (rover.y <= 8){
        if (grid[rover.y + 1][rover.x]=== null){
        rover.y += 1, rover.x;
      rover.travelLog.push("["+rover.y,rover.x+"]");
        
      }
      else
        {
          console.log("Obstacle!!!Cannot proceed");
        }
      }
      else
    {
      rover.travelLog.push("["+rover.y,rover.x+"]");
      console.log("Danger! Off the map");
    }
        break;
      
    case "E":
      if (rover.x >= 1){
        if (grid[rover.y][rover.x - 1]=== null){
    rover.x -= 1, rover.y;
      rover.travelLog.push("["+rover.y,rover.x+"]");
        }
        else
          {
            console.log("Obstacle!!!Cannot proceed");
          }
      }
      else
    {
      rover.travelLog.push("["+rover.y,rover.x+"]");
      console.log("DANGER!!! Off the map");
    }
    break;
      
    case "S":
      if (rover.y >= 1){
        if (grid[rover.y - 1][rover.x]=== null){
    rover.x, rover.y -= 1;
      rover.travelLog.push("["+rover.y,rover.x+"]");
        }
        else
          {
            console.log("Cannot proceed");
          }
      }
      else
    {
      rover.travelLog.push("["+rover.y,rover.x+"]");
      console.log("DANGER!!! Off the map");
    }
    break;
      
    case "W":
      if (rover.x <= 8){
        if (grid[rover.y][rover.x + 1]=== null){
    rover.x += 1, rover.y;
      rover.travelLog.push("["+rover.y,rover.x+"]");
        }
        else
          {
            console.log("Obstacle!!!Cannot proceed");
          }
      }
      else
    {
      rover.travelLog.push("["+rover.y,rover.x+"]");
      console.log("DANGER!!! Off the map");
    }
    break;
  }
  console.log("Rover position is: " + rover.travelLog);
};



function commandList(orders){
  for(var i = 0; i < orders.length; i++){
    var orderCode = orders[i];
    switch(orderCode){
      case 'f':
        moveForward(rover);
      break;
      case 'b':
        moveBackward(rover);
      break;
      case 'r':
        turnRight(rover);
      break;
      case 'l':
        turnLeft(rover);
      break;
      default : 
      console.log("Invalid order. Please use only r, l, f and b");
      break;
      
    }
  }
}

//commandList("bbbrrrfffrf");
