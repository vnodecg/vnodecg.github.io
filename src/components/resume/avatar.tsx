import classNames from "classnames";

export function Avatar(props: { image?: string; size: number, style?: React.CSSProperties, className?: string }) {
  return (
    <div
      className={classNames("bg-cover bg-no-repeat", props.className)}
      style={{
        ...props.style,
        width: props.size,
        height: props.size,
        backgroundImage: `url(${props.image})`,
      }}
    ></div>
  );
}