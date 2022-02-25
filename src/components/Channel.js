import Message from './Message';

function Channel() {
  return (
    <div className="text-center ">
      <h1 className="mt-5">Welcome to Talker</h1>
      <h3 className="text-secondary mt-3 mb-5">
        This is the beginning of this chat.
      </h3>
      <hr className="text-secondary" />
      <ul>
        <li>
          <Message></Message>
        </li>
      </ul>
    </div>
  );
}

export default Channel;
