function superbowlWin(arrayOfObjects) {
  const foundRecord =  arrayOfObjects.find(record=> record.result === "W")
 if(foundRecord){
    return foundRecord.year 
 } else{
    return undefined
 }


}

