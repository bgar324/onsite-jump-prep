import { TaskManager } from "./main"

test("adds, completes and deletes", () => {
  const tm = new TaskManager([]);
  const t = tm.addTask("read");

  expect(tm.getTask(t.id)?.completed).toBe(false);

  tm.completeTask(t.id);

  expect(tm.getTask(t.id)?.completed).toBe(true);
  
  tm.deleteTask(t.id);
  expect(tm.getTask(t.id)).toBeUndefined()
})