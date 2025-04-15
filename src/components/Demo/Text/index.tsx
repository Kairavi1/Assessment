import React from "react";
import ContentEditable from "react-contenteditable";
import { useNode, useEditor } from "@craftjs/core";
import { TextSettings } from "./TextSettings";
import { BaseComponent } from "../../BaseComponents/BaseModal";
import FloatingToolbar from "../../Toolbar/FloatingToolbar";

type TextProps = {
  content: string;
  className?: string;
  color?: Record<"r" | "g" | "b" | "a", number>;
  background?: Record<"r" | "g" | "b" | "a", number>;
  buttonStyle?: string;
  margin?: any[];
  padding?: any[];
  display?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  position?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  spacing?: string;
  align?: string;
  verticalAlign?: string;
  transform?: string;
  decoration?: string;
  opacity?: number;
  cursor?: string;
};

export const Text = ({ className, content, ...props }: TextProps) => {
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
        className={className}
        $buttonStyle={props.buttonStyle}
        $background={props.background}
        $color={props.color}
        $margin={props.margin}
        $padding={props.padding}
        $display={props.display}
        $width={props.width}
        $minWidth={props.minWidth}
        $maxWidth={props.maxWidth}
        $height={props.height}
        $minHeight={props.minHeight}
        $maxHeight={props.maxHeight}
        $position={props.position}
        $borderRadius={props.borderRadius}
        $borderWidth={props.borderWidth}
        $borderStyle={props.borderStyle}
        $borderColor={props.borderColor}
        $fontSize={props.fontSize}
        $fontWeight={props.fontWeight}
        $lineHeight={props.lineHeight}
        $spacing={props.spacing}
        $align={props.align}
        $verticalAlign={props.verticalAlign}
        $transform={props.transform}
        $decoration={props.decoration}
        $opacity={props.opacity}
        $cursor={props.cursor}
      >
        <ContentEditable
          innerRef={connect}
          html={content}
          disabled={!enabled}
          onChange={(e) => {
            setProp((prop: any) => (prop.content = e.target.value), 500);
          }}
          tagName="p"
        />
      </BaseComponent>
    </div>
  );
};

Text.craft = {
  displayName: "Text",
  props: {
    background: { r: 255, g: 255, b: 255, a: 0.5 },
    color: { r: 92, g: 90, b: 90, a: 1 },
    text: "Hello World",
    margin: ["5", "0", "5", "0"],
    padding: ["5", "0", "5", "0"],
    content: "Text",
    display: "inline-block",
    width: "auto",
    minWidth: "0",
    maxWidth: "100%",
    height: "auto",
    minHeight: "0",
    maxHeight: "none",
    position: "relative",
    borderRadius: "4px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "transparent",
    fontSize: "16px",
    fontWeight: "normal",
    lineHeight: "1.5",
    spacing: "0",
    align: "center",
    verticalAlign: "middle",
    transform: "none",
    decoration: "none",
    opacity: 1,
    cursor: "pointer",
  },
  related: {
    toolbar: TextSettings,
  },
};
