import { useNode } from "@craftjs/core";

const HeadingSettings = () => {
  const {
    actions: { setProp },
    text,
  } = useNode((node) => ({
    text: node.data.props.text,
  }));

  return (
    <input
      className="border p-2 w-full"
      value={text}
      onChange={(e) =>
        setProp((props) => {
          props.text = e.target.value;
        }, 500)
      }
    />
  );
};

export default HeadingSettings;
