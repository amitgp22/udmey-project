import { useState } from "react";
import "./App.css";
import Formopen from "./Formopen";

function App() {
  const [list, setlist] = useState([]);
  const [showForm, setShowForm] = useState(false);
  function handleOpenForm() {
    setShowForm(true);
  }
  const handleadditems = (data) => {
    setlist((pre) => [...pre, { id: Date.now(), ...data }]);
    setShowForm(false);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  const handleDelete = (id) => {
    setlist((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="button">
        <button onClick={handleOpenForm}>add more</button>
       {showForm && <button onClick={handleCloseForm}>cancel</button>}
      </div>
      {showForm && (
        <Formopen submit={handleadditems} onCancel={handleCloseForm} />
        
      )}
      {/* List */}
      {list.map((item) => (
        <div key={item.id}>
          {item.name} - {item.email}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
