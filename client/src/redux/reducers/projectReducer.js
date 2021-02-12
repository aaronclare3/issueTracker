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
      console.log(newIssue);
      // const newProjects = state.projects.map((proj) => {
      //   return proj._id === newIssue.project
      //     ? { ...proj, issues: [...proj.issues, newIssue] }
      //     : proj;
      // });
      return {
        ...state,
        // projects: newProjects,
        project: {
          ...state.project,
          issues: [...state.project.issues, newIssue],
        },
      };
    default:
      return state;
  }
};
