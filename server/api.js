var Db  = require('./dboperations');
var Employee = require('./employee');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


router.use((request,response,next)=>{
   console.log('middleware');
   next();
})

router.route('/employees').get((request,response)=>{

    dboperations.getEmployees().then(result => {
       response.json(result[0]);
    })

})

router.route('/employees/:id').get((request,response)=>{

    dboperations.getEmployee(request.params.id).then(result => {
       response.json(result[0]);
    })

})

router.route('/employees').post((request,response)=>{

    let employee = {...request.body}
   
    dboperations.addEmployee(employee).then(result => {
       response.status(201).json(result);
    })

})

router.route('/employees').delete((request,response)=>{

   dboperations.deleteEmployees().then(result => {
      response.json(result[0]);
   })

})

router.route('/process').post((request,response)=>{

   let process = {...request.body}
  
   dboperations.addProcess(process).then(result => {
      response.status(201).json(result);
   })
})

// Działająca funkcjonalność

// router.route('/process').get((request,response)=>{

//    dboperations.getFilteringQuantity().then(result => {
//       response.json(result[0]);
//    })
// })

router.route('/process').get((request,response)=>{

   dboperations.getSumFilteringQuantity().then(result => {
      response.json(result[0]);
   })
})


var port = process.env.PORT || 8090;
app.listen(port);
console.log('Employees API is runnning at ' + port);