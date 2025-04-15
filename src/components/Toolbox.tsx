import { useEditor } from "@craftjs/core";
import { useState } from "react";
import { Button } from "./Demo/Button";
import { Text } from "./Demo/Text";
import Heading from "@/components/Demo/Heading";
import { ToolboxButton } from "./BaseComponents/ToolboxButton";
import { ButtonIcon } from "./Icons/ButtonIcon";
import { TextIcon } from "./Icons/TextIcon";
import { HeadingIcon } from "./Icons/HeadingIcon";
import { Sidebar, SidebarBody } from "./ui/sidebar";
import { createDefaultContainer } from "./Demo/Container";
import { savePageContent, loadPageContent } from "@/lib/utils";

export const toolboxItems = [
  {
    name: "Button",
    component: <Button>Hey there</Button>,
    icon: <ButtonIcon className="w-10 h-10" />,
  },
  {
    name: "Text",
    component: <Text content="Hi world" />,
    icon: <TextIcon className="w-10 h-10" />,
  },
  {
    name: "Container",
    component: createDefaultContainer(),
    dataCy: "toolbox-container",
  },
  {
    name: "Heading",
    component: <Heading text="Heading Text" />,
    icon: <HeadingIcon className="w-10 h-10" />,
  },
];

export const Toolbox = () => {
  const { connectors, actions, query } = useEditor();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = toolboxItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSave = async () => {
    const json = query.serialize();
    const res = await savePageContent(json);
    if (res.id) {
      localStorage.setItem("saved-page-id", res.id);
      alert("Page saved!");
    }
  };

  const handleLoad = async () => {
    const id = localStorage.getItem("saved-page-id");
    if (!id) {
      alert("No saved page found");
      return;
    }
    const content = await loadPageContent(id);
    actions.deserialize(content);
  };

  return (
    <Sidebar open={open} setOpen={setOpen} animate={false}>
      <SidebarBody className="gap-2 toolbox bg-gray-900 text-white">
        <div className="px-2">
          <h3 className="text-lg font-semibold mb-4">Drag to add</h3>
          <input
            type="text"
            placeholder="Search Component..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="mb-4 p-2 w-full bg-transparent border border-gray-600 rounded"
          />

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded mb-2 w-full"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded w-full"
            onClick={handleLoad}
          >
            Load
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2 overflow-y-auto px-2">
          {filteredItems.map((item, index) => (
            <ToolboxButton
              key={index}
              props={{
                ref: (ref: HTMLDivElement | null) => {
                  if (ref) connectors.create(ref, item.component);
                },
                ...(item.dataCy && { "data-cy": item.dataCy }),
              }}
            >
              {item.icon}
              {item.name}
            </ToolboxButton>
          ))}
        </div>
      </SidebarBody>
    </Sidebar>
  );
};
