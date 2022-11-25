class TaskManager {
    static id = localStorage.getItem("latestId") >= 0 ? localStorage.getItem("latestId") : 0
    static tasks = []
    constructor(title, description, assignedTo, dueDate, status){
        this.id = TaskManager.id++;
        this.title = title;
        this.description = description;
        this.assignedTo = assignedTo;
        this.dueDate = dueDate;
        this.status = status;
        
    }

    static getAllTasks(){
        let tasks = {...localStorage}
        return tasks
    }

    static saveToLocal(obj){
        TaskManager.tasks.push(JSON.stringify(obj))
        TaskManager.tasks.map(task => localStorage.setItem(task.id, JSON.stringify(task)))
    }


}

export default TaskManager