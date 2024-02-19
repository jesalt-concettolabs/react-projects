import axios from "axios";
import { useState } from "react";

const AddData = () => {
  const [formData, setFormData] = useState({ title: "", body: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        formData
      );
      console.log("Post Created: ", response.data);
    } catch (error) {
      console.log("Error while posting: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Body:
        <textarea name="body" value={formData.body} onChange={handleChange} />
      </label>

      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddData;
