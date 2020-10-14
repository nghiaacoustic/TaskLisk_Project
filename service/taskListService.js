function TaskListService() {
    this.getTaskListService = function() {
        return axios({
            url: "https://5f826f430695720016433512.mockapi.io/api/taskList",
            method: "GET"
        });
    };
    this.addTaskService = function() {
        var input = getEle("newTask").value;
        var id = Math.random();
        return axios({
            url: "https://5f826f430695720016433512.mockapi.io/api/taskList",
            method: "POST",
            data: {
                id: `${id}`,
                name: `${input}`,
                status: "todo",
            },
        });
    }
    this.deleteTaskService = function(_id) {
        return axios({
            url: `https://5f826f430695720016433512.mockapi.io/api/taskList/${_id}`,
            method: "DELETE"
        });
    }
    this.changeStatusService = function(_id) {
        return axios({
            url: `https://5f826f430695720016433512.mockapi.io/api/taskList/${_id}`,
            method: "PUT",
            data: {
                status: "completed",
            },
        });
    }
}