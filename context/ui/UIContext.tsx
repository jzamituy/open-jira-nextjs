import { createContext } from "react";

interface ContextProps {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDraggingTask: boolean;
  toggleSidebar: () => void;
  toggleAddingEntry: () => void;
  setIsDraggingTask: (isDraggingTask: boolean) => void;
}

export const UIContext = createContext<ContextProps>({} as ContextProps);
