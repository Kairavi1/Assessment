import { useNode } from "@craftjs/core";
import { useRef, useEffect } from "react";

const Heading = ({ text }: { text: string }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current) {
      connect(drag(ref.current));
    }
  }, [ref]);

  return (
    <h1 ref={ref} className="text-3xl font-bold">
      {text}
    </h1>
  );
};

Heading.craft = {
  props: {
    text: "Heading Text",
  },
  related: {
    settings: require("./HeadingSettings").default,
  },
};

export default Heading;
