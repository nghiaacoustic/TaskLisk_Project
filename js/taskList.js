function TaskList() {
    this.arr = [];

    this.addTask = function(task) {
        this.arr.push(task);
    }

    this.FindTask = function(id) {
        return this.arr.find(function(item) {
            return item.id === id;
        });
    };
    this.IndexPosition = function(id) {
        return this.arr.findIndex(function(item) {
            return item.id === id
        });
    };
    this.updateTask = function(task) {
        var pos = this.IndexPosition(task.id);
        if (pos !== -1) {
            this.arr[pos] = task;
        }
    };
    this.deleteTask = function(id) {
        var pos = this.IndexPosition(id);
        if (pos !== -1) {
            this.arr.splice(pos, 1);
        }
    };
}