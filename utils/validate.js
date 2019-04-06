function validate(object, sheet) {
  
  if (sheet === 'customers') {
    if (!object.name) {throw 'Please provide a name'}
    
    object.name = object.name.trim()
  }
  
  if (object === 'othersheet'){
    
  }
  
  return object
  
}
