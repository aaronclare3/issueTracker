const initialState = {
  projects: [],
  project: {},
  loggedIn: undefined,
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
    case "CLEAR_PROJECTS":
      return { ...state, projects: [] };
    case "CREATE_ISSUE":
      const newIssue = action.payload;
      return {
        ...state,
        project: {
          ...state.project,
          issues: [...state.project.issues, newIssue],
        },
      };
    case "UPDATE_ISSUE":
      const updatedIssue = action.payload;
      const listUpdated = state.project.issues.map((issue) => {
        return issue._id === updatedIssue._id ? updatedIssue : issue;
      });
      return {
        ...state,
        project: { ...state.project, issues: listUpdated },
      };
    case "DELETE_ISSUE":
      const deletedIssue = action.payload;
      const listWithoutIssue = state.project.issues.filter((issue) => {
        return issue._id !== deletedIssue._id;
      });
      return {
        ...state,
        project: { ...state.project, issues: listWithoutIssue },
      };
    case "CHECK_LOGGED_IN":
      return { ...state, loggedIn: action.payload };
    case "LOGOUT_USER":
      return { ...state, loggedIn: action.payload };
    default:
      return state;
  }
};
