export default function AppTitle(props) {
  const { title = 'Box Office', subtitle = ' Are you looking for a actor ?' } =
    props;

  return (
    <div>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  );
}
