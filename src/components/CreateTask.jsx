export default function CreateTaskForm() {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">
          Task name:
          <input className="form-control" type="text" name="taskName" />
        </label>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Task descripton:
          <input className="form-control" type="text" name="taskDescription" />
        </label>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Task priority:
          <input className="form-control" type="number" name="taskPriority" />
        </label>
      </div>
      <button className="btn btn-primary" type="submit">
        Записать
      </button>
    </form>
  );
}
