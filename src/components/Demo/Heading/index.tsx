import { useNode, useEditor } from "@craftjs/core";
import ContentEditable from "react-contenteditable";
import { useRef, useEffect } from "react";
import { BaseComponent } from "../../BaseComponents/BaseModal";
import FloatingToolbar from "../../Toolbar/FloatingToolbar";

type HeadingProps = {
  text?: string;
  fontSize?: string;
  className?: string;
  color?: Record<"r" | "g" | "b" | "a", number>;
  background?: Record<"r" | "g" | "b" | "a", number>;
  margin?: any[];
  padding?: any[];
  [key: string]: any;
};

const Heading = ({
  text = "Heading Text",
  fontSize = "24px",
  className = "",
  ...props
}: HeadingProps) => {
  const {
    connectors: { connect },
    actions: { setProp },
    selected,
  } = useNode((node) => ({
    selected: node.events.selected,
  }));

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <div style={{ position: "relative" }}>
      {selected && enabled && <FloatingToolbar />}
      <BaseComponent
        ref={connect}
        className={className}
        {...props}
      >
        <ContentEditable
          html={text}
          disabled={!enabled}
          onChange={(e) => {
            setProp((props: any) => (props.text = e.target.value), 500);
          }}
          tagName="h1"
          style={{ fontSize }}
        />
      </BaseComponent>
    </div>
  );
};

Heading.craft = {
  displayName: "Heading",
  props: {
    text: "Heading Text",
    fontSize: "24px",
    background: { r: 255, g: 255, b: 255, a: 0 },
    color: { r: 0, g: 0, b: 0, a: 1 },
    margin: ["10", "0", "10", "0"],
    padding: ["10", "0", "10", "0"],
  },
};

export default Heading;
