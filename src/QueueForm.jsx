import { useState } from "react";

const initialForm = {
  name: "",
  issueType: "",
};

export default function QueueForm({ onAdd }) {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(formData);
    setFormData(initialForm);
  };

  return (
    <form className="formque-form" onSubmit={handleSubmit}>
      <label htmlFor="name" className="formque-label">
        Name
      </label>
      <input
        id="name"
        name="name"
        type="text"
        className="formque-input"
        placeholder="Enter your name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="issueType" className="formque-label">
        Select Issue
      </label>
      <select
        id="issueType"
        name="issueType"
        className="formque-select"
        value={formData.issueType}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select issue
        </option>
        <option value="billing">Billing</option>
        <option value="technical">Technical</option>
        <option value="general">General Query</option>
      </select>

      <button type="submit" className="formque-submit">
        ADD
      </button>
    </form>
  );
}
