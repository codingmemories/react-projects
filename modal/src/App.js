import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./index.scss";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="modal-btn">
        Open modal window
      </button>
      {open && (
        <div className={`overlay animated ${open ? "show" : ""}`}>
          <div className="modal">
            <div onClick={() => setOpen(false)} className="modal-close">
              <AiOutlineClose />
            </div>
            <iframe
              title="gif"
              src="https://gifer.com/embed/Fh5"
              width="480"
              height="374.684"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
