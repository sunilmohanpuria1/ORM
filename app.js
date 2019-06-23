var Sequelize = require('sequelize');
var model = require('./models');
var connection = new Sequelize('database_development', 'admin', 'password', {
	host: 'localhost',
	dialect: 'mysql'
});

/* connection.sync().then(function (){
    model.User.findAll().then(users => {
        console.log("All users:", JSON.stringify(users));
      });
}); */
/* connection.sync().then(function (){
    model.User.create({ firstName: "Rohit", lastName: "XYZ" ,classId:3}).then(temp => {
        console.log("New data's auto-generated ID:", temp.id);
      });
}); */
connection.sync().then(function(){
  model.User.findAll(
    {
      where:{
        id:2
      }
    }
).then(temp=>{
  console.log("All users:", JSON.stringify(temp));
  });
});

/* connection.sync().then(function(){
  model.User.update(
    {
      firstName:"Amit",
      lastName:"Sharma",
      where : {
      id:3
      }
    }).then(temp=>{
      console.log("All users:", JSON.stringify(temp));
      });
}); */

connection.sync().then(function(){
  model.User.destroy({
    where:{
      firstName:"sefi"
    }
  }).then(temp=>{
    console.log("users:", JSON.stringify(temp));
    });
});

connection.sync().then(function(){
  model.UserClass.findAll({
      include:[{
        model:model.User,
        require:false
      }]
  }
  ).then(temp=>{
    console.log("All users:", JSON.stringify(temp));
    });
});