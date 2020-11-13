export interface IPlaylists {
    id: number,
    title: string,
    color: string,
    short_description: string
}

const initialState = {
    playlists: [] as Array<IPlaylists>,
    currentPlaylist: 1,

};


export type DashboardState = Readonly<typeof initialState>;

const dashboardReducer = (state:DashboardState = initialState, action:any) => {

    switch (action.type) {
        case  "GET_PLAYLISTS":
            return {...state, playlists: [...action.payload]}
        case  "SET_CURRENT_PLAYLIST":
            return {...state, currentPlaylist: action.payload}
        default:
            return state
    }
}

export const getPlayLists = (playlists:IPlaylists[]) => ({
    type: "GET_PLAYLISTS",
    payload: playlists
});

export const setCurrentPlaylist = (currentPlaylist: number) => ({
    type: "SET_CURRENT_PLAYLIST",
    payload: currentPlaylist
});


export default dashboardReducer