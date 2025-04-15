// src/lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Existing utility functions
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Add the new save and load content API functions here

export const savePageContent = async (content: string) => {
  const base64Content = btoa(content); // Base64 encoding the content
  const response = await fetch('https://67f7183e42d6c71cca6403bd.mockapi.io/v1/api/pages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ pageContent: base64Content }),
  });
  return response.json(); // Returns the response after saving
};

export const loadPageContent = async (id: string) => {
  const response = await fetch(`https://67f7183e42d6c71cca6403bd.mockapi.io/v1/api/pages/${id}`);
  const data = await response.json();
  return atob(data.pageContent); // Decode the base64 content before returning
};
