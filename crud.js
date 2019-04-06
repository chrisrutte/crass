// Setting up basic functions to identify your database and database values --------------

// getAll
// getById
// update
// create
// remove

// getAll gets all your records in an array. The sheet is the name of the sheet
function getAll(sheet) {

  var config = getConfig()
  
  var ss = SpreadsheetApp.openById(config.dbid)  
  var sh = ss.getSheetByName(sheet)  
  var alldata = sh.getDataRange().getValues()
  var fields = alldata[0]
  
  // Setup Array with each row as an Object ---------------------------------------
  var dataobj = []
  for (i = 1 ; i < alldata.length ; i++){
    var obj = {}
    for (j in fields) {
      obj[fields[j]] = alldata[i][j]
    }
    dataobj.push(obj)
  }
  return dataobj
}

function getById(sheet, _id){
 
  var data = getAll(sheet)
  var dataobj = {}
  
  for (i in data){
    if (data[i]._id == _id){
      dataobj = data[i]
    }
  }
  
  if (!dataobj) { throw 'No _id found: ' + _id }
  
  return dataobj  
}

function update(updates, sheet, _id){
  
  // Get sheet and id from the html form if update is ran from the form
  if (!sheet) { sheet = updates.sheet }
  if (!_id) { _id = updates._id }
  
  var result = {}
  var config = getConfig() 
  
  var ss = SpreadsheetApp.openById(config.dbid)
  try { var sh = ss.getSheetByName(sheet) } catch (e) { throw 'Sheet ' + sheet + 'not found' }
  var alldata = sh.getDataRange().getValues()
  var fields = alldata[0]
  
  var obj = {}

  // Get object from database
  for (i in alldata) {
    if (alldata[i][fields.indexOf('_id')] === _id ) {
      for (j in fields) {
        obj[fields[j]] = alldata[i][j]
        var row = i
      }
    }
  }
  
  if (row) {
    // Update object
    for (key in updates) {
      obj[key] = updates[key]
    }
    
    obj = validate(obj, sheet)
    
    // Write back to array
    var array = []
    for (h in fields){
      array.push(obj[fields[h]])
    }
    sh.getRange(row - - 1, 1, 1, array.length).setValues([array])
    
    result['result'] = 'Success'
    result['data'] = obj 
    
  } else { throw 'No document found with  _id ' + _id }

  return result  
}

function create(obj, sheet){

  var result = {}
  var config = getConfig()
  
  if (!sheet) { sheet = obj['sheet'] }
  
  try {
   
    var ss = SpreadsheetApp.openById(config.dbid)  
    var sh = ss.getSheetByName(sheet)  
    var alldata = sh.getDataRange().getValues()
    var fields = alldata[0]
    
    var row = alldata.length
    obj['_id'] = Utilities.getUuid() 
    
    obj = validate(obj, sheet)
    
    // Write back to array
    var array = []
    for (h in fields){
      array.push(obj[fields[h]])
    }

    result['result'] = 'Success'
    result['data'] = obj

    sh.getRange(row - - 1, 1, 1, array.length).setValues([array])
   
  } catch (e) { throw e.toString() }

  return result  
}

function remove(sheet, id){
  
  var result = {}
  var config = getConfig() 
  
  var ss = SpreadsheetApp.openById(config.dbid)  
  var sh = ss.getSheetByName(sheet)  
  var alldata = sh.getDataRange().getValues()
  var fields = alldata[0]
  
  var obj = {}

  // Get object from database
  for (i in alldata) {
    if (alldata[i][fields.indexOf('_id')] === id ) {
      for (j in fields) {
        obj[fields[j]] = alldata[i][j]
        var row = i - - 1
      }
    }
  }
  
  if (row) {
    // Delete row
    sh.deleteRow(row)
    
    result['result'] = 'Success'
    result['data'] = obj
    
  } else { throw 'No document found with  _id ' + id }

  return result  
}  