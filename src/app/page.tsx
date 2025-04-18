"use client";
import React from "react";
import "./globals.css";
import { Editor, Element, Frame } from "@craftjs/core";
import { Text } from "@/components/Demo/Text";
import { Button } from "@/components/Demo/Button";
import { Container } from "@/components/Demo/Container/ContainerComponent";
import { ViewPort } from "@/components/ViewPort";
import  Heading  from "@/components/Demo/Heading"; // Ensure this path is correct

export default function Home() {
  return (
    <div className="h-screen">
      <Editor resolver={{ Button, Container, Text, Heading }} enabled={true}>
        <ViewPort>
          <Frame>
            <Element canvas is="div" id="Base Container">
              <Text content="hii" />
            </Element>
          </Frame>
        </ViewPort>
      </Editor>
    </div>
  );
}
