const TaskList = require("../../model/taskList/TaskList")

class TaskPersistence {
    constructor() {
        this._taskList = new TaskList()
    }

    save(...task) {
        this._taskList.add(...task)
    }

    find(description) {
        return this._taskList.search(description)
    }

    listAll() {
        return this._taskList.listAll()
    }
}

module.exports = TaskPersistence 