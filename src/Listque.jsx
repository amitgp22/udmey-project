export default function Listque({ items, onRemove, onServe }) {
  return (
    <section className="listque-wrap">
      <h2 className="listque-title">Queue List</h2>

      {items?.length === 0 ? (
        <p className="listque-empty">No queue items yet.</p>
      ) : (
        <ul className="listque-list">
          {items.map((item) => (
            <li key={item.id} className="listque-item">
              <div className="listque-content">
                <p className="listque-name">{item.name}</p>
                <p className="listque-issue">{item.issueType}</p>
                <p
                  className={`listque-status ${
                    item.serveStatus === "completed"
                      ? "status-completed"
                      : "status-waiting"
                  }`}
                >
                  {item.serveStatus === "completed" ? "Completed" : "Waiting"}
                </p>
                <div className="listque-actions">
                  {item.serveStatus !== "completed" && (
                    <button
                      type="button"
                      className="listque-add"
                      onClick={() => onServe(item.id)}
                    >
                      Serve
                    </button>
                  )}
                  <button
                    type="button"
                    className="listque-remove"
                    onClick={() => onRemove(item.id)}
                  >
                    Remove
                  </button>
                  
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
