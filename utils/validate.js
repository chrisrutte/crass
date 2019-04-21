function validate(object, sheet) {
  
  if (sheet === 'customers') {
    if (!object.name) {throw 'Please provide a name'}
    if (object.name.length < 5) {throw 'Make sure your name is more than 4 characters'}
    object.name = object.name.trim()
  }
  
  if (object === 'othersheet'){
    
  }
  
  return object
  
}
