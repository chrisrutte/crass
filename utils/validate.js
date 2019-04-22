var errors = [];

function validate(object, sheet) {
  
  if (sheet === 'customers') {
    if (!object.name) {errors.push('Please provide a name')}
    if (object.name.length < 5) {errors.push('Make sure your name is more than 4 characters')}
    object.name = object.name.trim()
  }
  
  if (object === 'othersheet'){
    
  }

  if (errors.length > 0) {
    Logger.log('throws errors')
    throw errors
  }
  
  return object
  
}
