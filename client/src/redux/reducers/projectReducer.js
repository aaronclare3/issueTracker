const initialState = {
  projects: [],
  project: {},
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      return { ...state, projects: [...state.projects, action.payload] };
    default:
      return state;
  }
};
