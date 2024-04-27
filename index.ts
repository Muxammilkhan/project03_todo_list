#!/urs/bin/env node


import inquirer from "inquirer";

let todolist = [];
let conditions = true;

console.log("\n \t Wellcome to CodewithMuzamil - Todo-List Appliction");

while (conditions){
    


       let addtask = await inquirer.prompt([
                 {
                     name:"task",
                     type : "input",
                     massaage :"Enter you  new task " 
                 },
                  
        
            ]);
            todolist.push (addtask.task);
        console.log(`${addtask.task} task added in todo - list successfully` )


        let addmoretask = await inquirer.prompt([
            {
                name:"addmore",
                type : "input",
                massaage :"do you want add more task ?" ,
                default:"False"
            },
                  
        
        ]);

        conditions = addmoretask.addmore

    }
    console.log(`your update todo-list :${todolist}`);