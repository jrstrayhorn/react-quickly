const Link = props => {
  return React.createElement(
    "a",
    { href: props.href, target: "_blank" },
    props.text
  );
};