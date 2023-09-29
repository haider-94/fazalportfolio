export const reducer = (state, action) => {
  switch (action) {
    case "about": {
      return {
        about: true,
        experience: false,
        projects: false,
      };
    }
    case "experience": {
      return {
        about: false,
        projects: false,
        experience: true,
      };
    }
    case "projects": {
      return {
        about: false,
        experience: false,
        projects: true,
      };
    }
  }
  return state;
};

