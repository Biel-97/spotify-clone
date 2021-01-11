
export const initialState = {
    User: null,
    playLists: [],
    spotify: null,
    top_artists: null,
    playing: false,
    discover_weekly: null,
    item: null,
    Next_playlist: '',
    track: ''

}

export const ACTION = {
  SET_USER: "SET_USER",
  SET_DISCOVER_WEEKLY: "SET_DISCOVER_WEEKLY",
  SET_TOP_ARTISTS: "SET_TOP_ARTISTS",
  SET_TOKEN: "SET_TOKEN",
  SET_TRACK: "SET_TRACK",
  SET_PLAYLISTS: "SET_PLAYLISTS",
  NEXT_PLAYLIST: "NEXT_PLAYLIST"
}

const reducer = (state, action) => {
  // console.log(action);
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
      case ACTION.SET_TRACK:
        return{
          ...state,
          track: action.track
        }


    case ACTION.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };

      case ACTION.NEXT_PLAYLIST:
        return {
          ...state,
          Next_playlist: action.Next_playlist,
        };
    default:
      return state;
  }
};

export default reducer;