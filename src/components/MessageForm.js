import React, { useRef } from 'react';
import { addDoc, collection } from 'firebase/firestore';

import { Button } from 'react-bootstrap';

function MessageForm({ db, user, scroll }) {
  const messageRef = useRef();

  async function sendMessage(e) {
    e.preventDefault();

    await addDoc(collection(db, 'messages'), {
      createdAt: Date.now(),
      text: messageRef.current?.value,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });

    scroll();
  }

  return (
    <form onSubmit={sendMessage} className="input-group p-3 fixed-bottom">
      <input
        ref={messageRef}
        type="text"
        className="form-control"
        placeholder="Type message"
        aria-label="Type message"
        aria-describedby="basic-addon2"
        required
      />
      <Button type="submit">Send</Button>
    </form>
  );
}

export default MessageForm;
