import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState, useRef } from 'react';
import Message from './Message';
import MessageForm from './MessageForm';

function Channel({ db, user }) {
  const [messages, setMessages] = useState([]);
  const bottomListRef = useRef();

  useEffect(() => {
    scrollToBottom();
    const unsub = onSnapshot(collection(db, 'messages'), (collection) => {
      const data = [];
      collection.forEach((item) => {
        data.push(item.data());
      });
      data.sort((i1, i2) => {
        return i1.createdAt - i2.createdAt;
      });
      setMessages(data);
    });
  }, [db]);

  function scrollToBottom() {
    bottomListRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="text-center ">
      <div className="mt-5">&nbsp;</div>
      <h1 className="mt-5">Welcome to Talker</h1>
      <h3 className="text-secondary mt-3 mb-5">
        This is the beginning of this chat.
      </h3>
      <hr className="text-secondary" />
      <ul className="list-group mx-2 scrollable">
        {messages.map((message) => {
          return (
            <Message
              key={message.id}
              createdAt={message.createdAt}
              text={message.text}
              displayName={message.displayName}
              photoURL={message.photoURL}
            ></Message>
          );
        })}
      </ul>
      <div ref={bottomListRef} />
      <MessageForm db={db} user={user} scroll={scrollToBottom}></MessageForm>
    </div>
  );
}

export default Channel;
