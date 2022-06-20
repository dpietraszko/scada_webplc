var config = require('./dbconfig');
const sql = require('mssql');


async function getEmployees() {
    try {
        let pool = await sql.connect(config);
        let employees = await pool.request().query("SELECT * from employeesLoggedIn");
        return employees.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function getEmployee(employeeId) {
    try {
        let pool = await sql.connect(config);
        let employee = await pool.request()
            .input('input_parameter', sql.Int, employeeId)
            .query("SELECT * from employeesLoggedIn where Id = @input_parameter");
        return employee.recordsets;

    }
    catch (error) {
        console.log(error);
    }
}


async function addEmployee(employee) {

    try {
        let pool = await sql.connect(config);
        let insertEmployee = await pool.request()
            .input('Id', sql.Int, employee.Id)
            .input('firstName', sql.Text, employee.firstName)
            .input('lastName', sql.Text, employee.lastName)
            .input('email', sql.Text, employee.email)
            .input('password', sql.Text, employee.password)
            .input('dateTime', sql.DateTime, employee.dateTime)
            .execute('InsertEmployee');
        return insertEmployee.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}

async function deleteEmployees() {
    try {
        let pool = await sql.connect(config);
        let employees = await pool.request().query("DELETE from employeesLoggedIn where id < 10000000000");
        return employees.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}

async function addProcess(process) {

    try {
        let pool = await sql.connect(config);
        let insertProcess = await pool.request()
            .input('Id', sql.Int, process.Id)
            .input('filteringQuantity', sql.Int, process.filteringQuantity)
            .input('dateTime', sql.DateTime, process.dateTime)
            .input('date', sql.Date, process.date)
            // .input('time', sql.Time, process.time)
            .execute('InsertProcess');
        return insertProcess.recordsets;
    }
    catch (err) {
        console.log(err);
    }

}

// Działająca funkcjonalność

// async function getFilteringQuantity() {
//     try {
//         let pool = await sql.connect(config);
//         let filteringQuantity = await pool.request().query("SELECT * from processDone");
//         return filteringQuantity.recordsets;
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

async function getSumFilteringQuantity() {
    try {
        let pool = await sql.connect(config);
        let filteringQuantity = await pool.request().query("SELECT date, SUM(filteringQuantity) as filteringQuantity FROM [employeesDatabase].[dbo].[processDone] GROUP BY date");
        return filteringQuantity.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = {
    getEmployees : getEmployees,
    getEmployee : getEmployee,
    addEmployee : addEmployee,
    deleteEmployees : deleteEmployees,
    addProcess : addProcess,
    // getFilteringQuantity : getFilteringQuantity,
    getSumFilteringQuantity : getSumFilteringQuantity
}
