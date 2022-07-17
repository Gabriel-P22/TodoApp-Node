const Task = require("./Task.js");
const TaskStatus = require("./TaskStatus.js");

describe("Task", () => {
    test("When the task has been added, the task has pending state.", () => {
        const task = new Task("Buy eggs in the market")
        expect(task.status).toBe(TaskStatus.PENDING)
    })
    
    test("Can provide a description", () => {
        const task = new Task("Buy the playstation 5 in the next weekend")
        expect(task.description).toBe("Buy the playstation 5 in the next weekend")
    }) 

    test("Can edit description", () => {
        const task = new Task("I need to buy bread")
        task.description = "I need to buy a Playstation 5"
        expect(task.description).toBe("I need to buy a Playstation 5")
    }) 

    test("Can change the status", () => {
        const task = new Task("Buy the playstation 5 in the next weekend")
        task.status = TaskStatus.COMPLETED
        expect(task.status).toBe(TaskStatus.COMPLETED)
    }) 
});
