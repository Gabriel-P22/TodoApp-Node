const TaskList = require("./TaskList.js")
const Task = require("../task/Task")

describe("TaskList", () => {
    let taskList

    beforeEach(() => {
        taskList = new TaskList()
    })

    test("When creating a task list, it should have 0 tasks", () => {
        expect(taskList.length).toBe(0)
    }) 

    test("Can add a new Task object", () => {
        taskList.add(new Task("is it working?"))
        expect(taskList.length).toBe(1)
    }) 

    test("Can add a new task by description", () => {
        taskList.add("is it working?")
        expect(taskList.length).toBe(1)
    })

    test("Can not add anything that is not a Task object or string", () => {
        const operation = () => {
            taskList.add(4)
        }
        expect(operation).toThrow(TypeError);
    })

    test("Can get a task from the list when created with Task object", () => {
        const task = new Task("I need go to the MarketPlace.")
        taskList.add(task)
        const value = taskList.get("I need go to the MarketPlace.")
        expect(value).toBe(task)
    })

    test("Can get a task from the list when created with string", () => { 
        taskList.add("I need go to the MarketPlace.")
        const taskObject = taskList.get("I need go to the MarketPlace.")
        expect(taskObject.description).toBe("I need go to the MarketPlace.")
        expect(taskObject instanceof Task).toBe(true)
    })

    test("can delete a task by reference", () => {
        const task = new Task("I need go to the MarketPlace.")
        taskList.add(task)
        const itemRemoved = taskList.remove(task)
        expect(itemRemoved).toBe(task)
        expect(taskList.length).toBe(0)
    })

    test("can delete a task by description", () => {
        taskList.add("I need go to the medic.")
        const itemRemoved = taskList.remove("I need go to the medic.")
        expect(itemRemoved.description).toBe("I need go to the medic.")
        expect(taskList.length).toBe(0)
    })

    test("Can search a task by description", () => {
        taskList.add("I need to go rest")
        taskList.add("I need to the market")
        taskList.add("make potato")
        const list = taskList.search("I need to")
        expect(list[0].description).toBe("I need to go rest")
        expect(list[1].description).toBe("I need to the market")
        expect(list.length).toBe(2)
    })
})