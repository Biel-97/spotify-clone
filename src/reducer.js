
export const initialState = {
    User: null,
    playLists: [],
    spotify: null,
    top_artists: null,
    playing: false,
    discover_weekly: null,
    item: null,
    Next_playlist: '',
    SET_CURRENT_PLAYLIST: '',
    Recently_Played: null,
    Set_Page_View: true,
    track: ''

}

export const ACTION = {
  SET_USER: "SET_USER",
  SET_DISCOVER_WEEKLY: "SET_DISCOVER_WEEKLY",
  SET_TOP_ARTISTS: "SET_TOP_ARTISTS",
  SET_TOKEN: "SET_TOKEN",
  SET_TRACK: "SET_TRACK",
  SET_PLAYLISTS: "SET_PLAYLISTS",
  SET_CURRENT_PLAYLIST: "SET_CURRENT_PLAYLIST",
  NEXT_PLAYLIST: "NEXT_PLAYLIST",
  RECENTLY_PLAYED: "RECENTLY_PLAYED",
  SET_PAGE_VIEW: "SET_PAGE_VIEW"
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

      case ACTION.SET_CURRENT_PLAYLIST:
        return {
          ...state,
          Set_Current_PlayList: action.Set_Current_PlayList,
        };

      case ACTION.RECENTLY_PLAYED:
        return {
          ...state,
          Recently_Played: action.Recently_Played,
        };

      case ACTION.SET_PAGE_VIEW:
        return {
          ...state,
          Set_Page_View: action.Set_Page_View
        };
    default:
      return state;
  }
};

export default reducer;