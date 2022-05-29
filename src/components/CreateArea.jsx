import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [Clicked, setClick] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function Expanded(){
    setClick(true);
  }

  return (
    <div>
      <form className="create-note">
        {Clicked&&<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          onClick={Expanded}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={Clicked?3:1}
        />
        <Zoom in = {Clicked?true:false} >
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom> 
      </form>
    </div>
  );
}

export default CreateArea;
