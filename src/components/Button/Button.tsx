type Props = {
  name: string;
  className: string;
  onClick: () => unknown;
};

export default function Button({ name, className, onClick }: Props) {
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
}
