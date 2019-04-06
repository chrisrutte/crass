function doGet(e) {
  
  var page = e.parameter.page
  Logger.log(page)
  if (!page) { page = 'view' }
  Logger.log(page)
  
  var sheet = 'customers'
  
  if (page === 'update') {
    
    var id = e.parameter.id
    
    var object = getById(sheet, id)
    object['sheet'] = sheet
    
    var t = HtmlService.createTemplateFromFile('views/update');
    t.object = object
    return t.evaluate();
  }
  
  if (page === 'new') {

    var object = {}
    object['sheet'] = sheet

    var t = HtmlService.createTemplateFromFile('views/new');
    t.object = object
    return t.evaluate();
  }
  
  if (page === 'view') {
    
    var object = getAll('customers')
    
    var t = HtmlService.createTemplateFromFile('views/view');
    t.object = object
    return t.evaluate();
  }
}
