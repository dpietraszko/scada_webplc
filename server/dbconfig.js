const config = {
  user: "sa",
  password: "sa",
  server: "VM_DP",
  database: "employeesDatabase",
  options: {
    trustedconnection: true,
    enableArithAbort: true,
    instancename: "SQLEXPRESS",
  },
  port: 55892,
};

module.exports = config;
