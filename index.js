#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t <<<======================================================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<============>>>  ${chalk.bold.hex("#0ff")("Welcome To The Todo-List --- Created By Falak Sher Khan")} <<<============>>> `));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<======================================================>>>`));
// while(conditions){
//     let addTask = await inquirer.prompt([
//         {
//             name: "task",
//             type: "inpput",
//             message: chalk.green.bold( "Enter your new task :")
//         }
//     ]);
//     todoList.push(addTask.task);
//     console.log(`${addTask.task} Task added in todo list`);
//     let addMoreTask = await inquirer.prompt([
//         {
//             name: "addmore",
//             type: "confirm",
//             default:"False",
//             message: "Do you want to add more task?"
//         }
//     ]);
//     conditions = addMoreTask.addmore
// }
// console.log(chalk.blue.bold(`Your Updated Todo-List: ${todoList}`));
let index = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do: ",
                choices: [
                    "Add Task",
                    "Delete Task",
                    "Update Task",
                    "View Todo-List",
                    "Exit",
                ],
            },
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "View Todo-List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task:",
        },
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfully in Todo-list`);
};
let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
};
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no.' of the task you want to delete:",
        }
    ]);
    let deleteTask = todoList.splice(taskIndex.index, 1);
    console.log(`\n ${deleteTask} this task has been deleted successfully`);
};
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the 'index no' of the task you want to update: "
        },
        {
            name: "new_task",
            type: "input",
            message: "Now enter the new task name"
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no.  ${update_task_index.index - 1} updated successfully`);
};
index();
