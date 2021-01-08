
export const initialState = {
    User: null,
    playLists: [],
    spotify: null,
    top_artists: null,
    playing: false,
    discover_weekly: null,
    item: null

}

export const ACTION = {
  SET_USER: "SET_USER",
  SET_DISCOVER_WEEKLY: "SET_DISCOVER_WEEKLY",
  SET_TOP_ARTISTS: "SET_TOP_ARTISTS",
  SET_TOKEN: "SET_TOKEN",
  SET_PLAYLISTS: "SET_PLAYLISTS"
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ACTION.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case ACTION.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case ACTION.SET_TOP_ARTISTS:
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case ACTION.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };


    case ACTION.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;