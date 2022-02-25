function Message({
  createdAt,
  key,
  text = '',
  displayName = '',
  photoURL = '',
}) {
  const formattedDate = new Date(createdAt).toLocaleTimeString();

  return (
    <li
      key={key}
      className="d-flex align-items-center list-group-item border mt-2"
    >
      <img
        src={photoURL}
        alt="Avatar"
        className="rounded-circle"
        width={45}
        height={45}
      />
      <div className="d-flex flex-column align-items-start">
        <div>
          <span className="h6 ms-3 me-2">{displayName}</span>
          <small className="text-secondary">{formattedDate}</small>
        </div>
        <span className="d-block ms-3">{text}</span>
      </div>
    </li>
  );
}

export default Message;
