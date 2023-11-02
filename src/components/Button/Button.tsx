type Props = {
  name: string;
  className: string;
  style?: React.CSSProperties;
  onClick: () => void;
};

export default function Button({
  name,
  className,
  style,
  onClick,
  ...otherProps
}: Props) {
  return (
    <button
      className={className}
      onClick={onClick}
      style={style}
      {...otherProps}
    >
      {name}
    </button>
  );
}
