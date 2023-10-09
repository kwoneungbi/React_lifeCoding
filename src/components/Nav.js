function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topices.length; i++) {
    let t = props.topices[i];
    lis.push(
      <li key={t.id}>
        <a
          id={t.id}
          href={"/read/" + t.id}
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode(event.target.id);
          }}
        >
          {t.title}
        </a>
      </li>
    );
  }
  return <ol>{lis}</ol>;
}

export default Nav;
