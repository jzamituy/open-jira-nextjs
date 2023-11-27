import { FC, ReactNode, useReducer } from "react";
import { UIContext } from ".";
import {
  uiReducer,
  IS_ADDING_ENTRY_ACTION_TYPE,
  IS_DRAGGING_TASK_ACTION_TYPE,
} from "./uiReducer";

export interface UIState {
  sidemenuOpen: boolean;
  isAddingEntry: boolean;
  isDraggingTask: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDraggingTask: false,
};

export const UIProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  const toggleAddingEntry = () => {
    dispatch({ type: IS_ADDING_ENTRY_ACTION_TYPE });
  };

  const setIsDraggingTask = (isDraggingTask: boolean) => {
    dispatch({ type: IS_DRAGGING_TASK_ACTION_TYPE, payload: isDraggingTask });
  };

  return (
    <UIContext.Provider
      value={{ ...state, toggleSidebar, toggleAddingEntry, setIsDraggingTask }}
    >
      {children}
    </UIContext.Provider>
  );
};
