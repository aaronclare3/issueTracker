let initialState = {
  projects: [],
  project: {},
  loggedIn: false,
  username: "",
};

export const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };
    case "GET_ALL_PROJECTS":
      return { ...state, projects: action.payload };
    case "GET_PROJECT":
      return { ...state, project: action.payload };
    case "DELETE_PROJECT":
      const deletedProject = action.payload;
      const listWithoutProject = state.projects.filter((proj) => {
        return proj._id !== deletedProject._id;
      });
      return { ...state, projects: listWithoutProject };
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
      return {
        ...state,
        loggedIn: action.payload.isLoggedIn,
        username: action.payload.username,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        loggedIn: false,
        username: "",
      };
    case "LOGIN_USER":
      return {
        ...state,
        loggedIn: true,
        username: action.payload,
      };
    case "REGISTER_USER":
      return {
        ...state,
        loggedIn: true,
        username: action.payload,
      };
    case "CREATE_COMMENT":
      const newComment = action.payload;
      const issueToUpdate = state.project.issues.find(
        (issue) => issue._id === newComment.issue
      );
      const issueUpdated = {
        ...issueToUpdate,
        comments: [...issueToUpdate.comments, newComment],
      };
      const newIssueList = state.project.issues.map((issue) => {
        return issue._id == newComment.issue ? issueUpdated : issue;
      });
      return {
        ...state,
        project: {
          ...state.project,
          issues: newIssueList,
        },
      };
    default:
      return state;
  }
};
