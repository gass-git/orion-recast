/**
 * VALIDATION 1
 * 
 * symbols "I", "X", "C" and "M" can be repeated three 
 * times in succession, but no more.
 */
function validation1(arr){
  let count = 1
  let pass = true

 	arr.forEach((current, i) => {
    let next = arr[i+1]
      
    if(i + 1 < arr.length){
      if(current === 'I' || current === 'X' || current === 'C' || current === 'M'){
        if(current === next) count++
        else count = 1
      }
    }

    if(count >= 4) pass = false  
  })

  return pass
}

/**
 * VALIDATION 2
 * 
 * "D", "L", and "V" can never be repeated. 
 */
function validation2(arr){
  let count = 1
  let pass = true
  
 	arr.forEach((current, i) => {
    let next = arr[i+1]
    
    if(i + 1 < arr.length){
      if(current === 'D' || current === 'L' || current === 'V'){
        if(current === next) count++
        else count = 1
      }
    }

    if(count >= 2) pass = false  
  })
  
  return pass
}

/**
 * VALIDATION 3 
 * 
 * "I" can be subtracted from "V" and "X" only. 
 */
function validation3(arr){
  let pass = true
  
 	arr.forEach((current, i) => {
  	let next = arr[i+1]
    
    if(i + 1 < arr.length){
    	if(current === 'I'){
      	if(next !== 'V' && next !== 'X' && next !== current){
        	pass = false
        }
      }
    }
  })

  return pass
}

/**
 * VALIDATION 4 
 * 
 * "X" can be subtracted from "L" and "C" only. 
 */
function validation4(arr){
  let pass = true
  
 	arr.forEach((current, i) => {
  	let next = arr[i+1]
    
    if(i + 1 < arr.length){
    	if(current === 'X'){
      	if(next === 'D' || next === 'M'){
        	pass = false
        }
      }
    }
  })

  return pass
}

/**
 * VALIDATION 5
 * 
 * "V", "L", and "D" can never be subtracted.
 */
function validation5(arr){
  let pass = true
  
 	arr.forEach((current, i) => {
  	let next = arr[i+1]
    
    if(i + 1 < arr.length){
    
    	// in case of "V"
    	if(current === 'V'){
      	if(next !== 'I' && next !== current){
        	pass = false
        }
      }

     	// in case of "L" 
      if(current === 'L'){
        if(next !== 'X' && next !== 'V' && next !== 'I' && next !== current){
          pass = false
        }
    	}
      
      // in case of "D"
      if(current === 'D'){
        if(next === 'M' && next !== current){
          pass = false
        }
    	}
    }
  })

  return pass
}

/**
 * VALIDATION 6
 * 
 * "C" can be subtracted from "D" and "M" only.
 * 
 * Note: needs no validation.
 */

export{
  validation1, 
  validation2,
  validation3, 
  validation4,
  validation5
}
