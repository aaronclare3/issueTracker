const initialState = {
  projects: [],
  project: {},
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return { ...state, projects: [...state.projects, action.payload] };
    case "GET_ALL_PROJECTS":
      return { ...state, projects: action.payload };
    case "GET_PROJECT":
      return { ...state, project: action.payload };
    case "CLEAR_PROJECT":
      return { ...state, project: {} };
    default:
      return state;
  }
};
