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
      const updatedIssueList = state.project.issues.map((issue) => {
        return issue._id === updatedIssue._id ? updatedIssue : issue;
      });
      return {
        ...state,
        project: { ...state.project, issues: updatedIssueList },
      };
    default:
      return state;
  }
};
