<script lang="ts">
    import type { ITodo } from "../../type/type";

  let projectName = "";
  let projectUrl = "";
  let todos = [
    { id: "1", projectName: "Todo 1", projectUrl: "amaxon", completed: false },
    { id: "2", projectName: "Todo 2", projectUrl: "amaxon", completed: false },
    { id: "3", projectName: "Todo 3", projectUrl: "amaxon", completed: false },
    { id: "4", projectName: "Todo 4", projectUrl: "amaxon", completed: false },
  ];

  let editingTodoId: string | null = null;
  let isPopupVisible = false;
  let isEditPopupVisible = false;
 function togglePopup(){
  isPopupVisible=!isPopupVisible;
 }
  // Add a new todo
  function Onsubmit() {
    if (projectName.trim() && projectUrl.trim()) {
      const newTodo = {
        id: `${todos.length + 1}`, // Unique ID
        projectName,
        projectUrl,
        completed: false,
      };

      todos = [...todos, newTodo];
      projectName = "";
      projectUrl = "";
      isPopupVisible = false;
    } else {
      alert("Please fill out both fields.");
    }
  }

  // Delete a todo
  function deleteTodo(id: string): void {
    todos = todos.filter((todo) => todo.id !== id);
  }

  // Show the edit popup with selected todo details
  function showEditPopup(todo: ITodo) {
    editingTodoId = todo.id;
    projectName = todo.projectName;
    projectUrl = todo.projectUrl;
    isEditPopupVisible = true;
  }

  // Update the todo
  function updateTodo() {
    if (projectName.trim() && projectUrl.trim()) {
      todos = todos.map((todo) =>
        todo.id === editingTodoId
          ? { ...todo, projectName, projectUrl }
          : todo
      );

      editingTodoId = null;
      projectName = "";
      projectUrl = "";
      isEditPopupVisible = false;
    } else {
      alert("Please fill out both fields.");
    }
  }
</script>

<main>
  <div class="container">
    <section class="main">
      <section class="attendance">
        <div class="attendance-list">
          <div class="tag">
            <h2 >Dashboard</h2>
            <button class="open-popup" onclick={togglePopup}>Create</button>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Project Name</th>
                <th>Project Url</th>
                <th>Actions</th>
              </tr>
            </thead>
            {#each todos as todo (todo.id)}
              <tbody>
                <tr>
                  <td>{todo.id}</td>
                  <td>{todo.projectName}</td>
                  <td>{todo.projectUrl}</td>
                  <td>
                    <button onclick={() => deleteTodo(todo.id)}>Delete</button>
                    <button onclick={() => showEditPopup(todo)}>Edit</button>
                  </td>
                </tr>
              </tbody>
            {/each}
          </table>
        </div>
      </section>
    </section>
  </div>

  <!-- Create Popup -->
  {#if isPopupVisible}
    <div class="popup-overlay visible" onclick={togglePopup}>
      <div class="popup-content" onclick={(event) => event.stopPropagation()}>
       
        <h2>Create Todo</h2>
        <form>
          <input
            type="text"
            bind:value={projectName}
            placeholder="Your Project"
            required
          />
          <input
            type="text"
            bind:value={projectUrl}
            placeholder="Project URL"
            required
          />
          <button type="button" onclick={Onsubmit}>Submit</button>
          <button onclick={togglePopup}>Cancel</button>
        </form>
      </div>
    </div>
  {/if}

  <!-- Edit Popup -->
  {#if isEditPopupVisible}
    <div class="popup-overlay visible" onclick={() => (isEditPopupVisible = false)}>
      <div class="popup-content" onclick={(event) => event.stopPropagation()}>
        <!-- <button onclick={() => (isEditPopupVisible = false)}>X</button> -->
        <h2>Edit Todo</h2>
        <form>
          <input
            type="text"
            bind:value={projectName}
            placeholder="Your Project"
            required
          />
          <input
            type="text"
            bind:value={projectUrl}
            placeholder="Project URL"
            required
          />
          <button type="button" onclick={updateTodo}>Update</button>
          <button onclick={() => (isEditPopupVisible = false)}>Cancel</button>
        </form>
      </div>
    </div>
  {/if}
</main>

<style>
  * {
    margin: 0;
    padding: 0;
    outline: none;
    border: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
  /* body{
  background: rgb(226, 226, 226);
} */

  .container {
    display: flex;
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
    margin: auto;
  }

  /* MAin Section */
  .main {
    position: relative;
    padding: 20px;
    width: 100%;
  }

  /*Attendance List serction  */
  .attendance {
    margin-top: 20px;
    text-transform: capitalize;
  }
  .attendance-list {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.1);
  }
  .table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 15px;
    min-width: 100%;
    overflow: hidden;
    border-radius: 5px 5px 0 0;
  }
  table thead tr {
    color: #fff;
    background: #34af6d;
    text-align: left;
    font-weight: bold;
  }
  .table th,
  .table td {
    padding: 12px 15px;
  }
  .table tbody tr {
    border-bottom: 1px solid #ddd;
  }
  .table tbody tr:nth-of-type(odd) {
    background: #f3f3f3;
  }
  /* .table tbody tr.active{
  font-weight: bold;
  color: #4AD489;
} */
  .table tbody tr:last-of-type {
    border-bottom: 2px solid #4ad489;
  }
  .table button {
    padding: 6px 20px;
    border-radius: 10px;
    cursor: pointer;
    background: transparent;
    border: 1px solid #4ad489;
  }
  .table button:hover {
    background: #4ad489;
    color: #fff;
    transition: 0.5rem;
  }
  .tag {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /* {
    background-color: #34AF6D;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: 500;
    font-size: large;
    cursor: pointer;
} */
  /* Button Styling */
  .open-popup {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
  }

  /* Overlay Styling */
  .popup-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  /* Popup Content Styling */
  .popup-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    width: 350px;
    text-align: center;
  }

  .popup-content h2 {
    margin: 0 0 10px;
  }

  .popup-content input {
    display: block;
    width: 90%;
    margin: 10px auto;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .popup-content button {
    padding: 10px 20px;
    display: inline-block;
    margin: 10px;
    font-size: 16px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
  }

  /* Display the popup when visible */
  .popup-overlay.visible {
    display: flex;
  }
  .popup {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup-form {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
  }

  .popup-form input {
    margin-bottom: 10px;
  }
  h2{
    font-size: 30px;
    font-weight: 600;
    
  }
</style>
