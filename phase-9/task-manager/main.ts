interface Task {
  id: string;
  title: string;
  completed: boolean;
}

//test commit

export class TaskManager {
  private _tasks: Task[];
  constructor(_tasks: Task[]) {
    this._tasks = _tasks;
  }

  addTask(title: string): Task {
    const UUID = crypto.randomUUID().toString();
    const newTask: Task = {
      id: UUID,
      title: title,
      completed: false,
    };
    this._tasks.push(newTask);
    return newTask;
  }

  getTask(id: string): Task | undefined {
    const val = this._tasks.find((o) => o.id === id);
    if (val) {
      return val;
    } else {
      return undefined;
    }
  }

  completeTask(id: string): boolean {
    // find the value
    const val = this._tasks.find((o) => o.id === id);
    if (val) {
      val.completed = true;
      return true;
    } else {
      return false;
    }
  }

  deleteTask(id: string): boolean {
    const val = this._tasks.some((o) => o.id === id);
    if (val) {
      this._tasks = this._tasks.filter((o) => o.id !== id)
      return true;
    } else {
      return false;
    }
  }
  
  listTasks() : Task[] {
    return this._tasks;
  }
}
