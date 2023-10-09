function Header(props) {
  return (
    <h1>
      <a
        href="/real/"
        onClick={(event) => {
          event.preventDefault();
          props.onChangeMode();
        }}
      >
        {props.title}
      </a>
    </h1>
  );
}

export default Header;
