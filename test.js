function testUpdate() {
  
  var updates = {
    "age": 21
  }
  
  var _id = 'abc123'
  
  var result = update( updates, 'customers', _id)
  
}

function testCreate() {
  
  var obj = {
    "name": "IJsbrand",
    "age": 20
  }
  
  create(obj, 'customers')
  
}


function testRemove(){
  
  var id = 'dd1fea16-f66a-4000-8710-1a256eadfce8'
  remove('customers', id)
  
}