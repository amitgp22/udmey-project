import { useState } from "react";
import Listque from "./Listque";
import QueueForm from "./QueueForm";

export default function Formque() {
  const [queueList, setQueueList] = useState([]);

  const handleAdd = (formData) => {
    setQueueList((prev) => [
      ...prev,
      { id: Date.now(), serveStatus: "waiting", ...formData },
    ]);
  };

  const handleRemove = (id) => {
    setQueueList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleServe = (id) => {
    setQueueList((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, serveStatus: "completed" } : item,
      ),
    );
  };

  return (
    <section className="formque-wrap">
      <h2 className="formque-title">Queue Form</h2>
      <QueueForm onAdd={handleAdd} />

      <Listque
        items={queueList}
        onRemove={handleRemove}
        onServe={handleServe}
      />
    </section>
  );
}
