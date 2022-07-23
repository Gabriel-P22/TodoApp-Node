const Task = require("../../model/task/Task.js")

const TaskPersistence = require("./TaskPersistence.js")

describe("TaskPersistence", () => {
    let taskPersistence

    beforeEach(() => {
        taskPersistence = new TaskPersistence()
    })

    test("When a task is recovered from the database, its data must be the same as when it was saved.", () => {
        const task = new Task("I'm studying")
        taskPersistence.save(task)
        let taskResponse = taskPersistence.find("I'm studying")
        expect(task).toBe(taskResponse[0])
    })
    
    test("Can list all tasks in the database.", () => {
        const firstTask = new Task("Take the dog to the vet")
        const secondTask = new Task("Read one chapter of the clean architecture book")
        taskPersistence.save(firstTask, secondTask)
        let list = taskPersistence.listAll()
        expect([firstTask, secondTask]).toStrictEqual(list)
    })
});
