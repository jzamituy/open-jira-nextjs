import { UIState } from ".";

const toogleSidebar = "TOGGLE_SIDEBAR";

export const IS_ADDING_ENTRY_ACTION_TYPE = "IS_ADDING_ENTRY_ACTION_TYPE";
export const IS_DRAGGING_TASK_ACTION_TYPE = "IS_DRAGGING_TASK_ACTION_TYPE";

type UIActionType =
  | { type: typeof toogleSidebar }
  | { type: typeof IS_ADDING_ENTRY_ACTION_TYPE }
  | { type: typeof IS_DRAGGING_TASK_ACTION_TYPE; payload: boolean };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case toogleSidebar:
      return {
        ...state,
        sidemenuOpen: !state.sidemenuOpen,
      };

    case IS_ADDING_ENTRY_ACTION_TYPE:
      return {
        ...state,
        isAddingEntry: !state.isAddingEntry,
      };

    case IS_DRAGGING_TASK_ACTION_TYPE:
      return {
        ...state,
        isDraggingTask: action.payload,
      };

    default:
      return state;
  }
};
