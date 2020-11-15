
export const ACTION_TYPES = {
    GET_PLAYLISTS: 'dashboard/GET_PLAYLISTS',
    SET_CURRENT_PLAYLIST: 'dashboard/SET_CURRENT_PLAYLIST',
    SET_LESSON: 'dashboard/SET_LESSON',

};

export interface IPlaylists {
    id: number,
    title: string,
    color: string,
    short_description: string
}

export interface ILesson {
    id: number,
    play_list: string,
    title: string,
    description: string,
    youtube_id: string,
    result_url: string,
    yandex_disk: string,
    number_lesson: number
}


const initialState = {
    playlists: [] as Array<IPlaylists>,
    currentPlaylist: 1,
    lesson: [] as Array<ILesson>,
};


export type DashboardState = Readonly<typeof initialState>;

const dashboardReducer = (state:DashboardState = initialState, action:any):DashboardState  => {

    switch (action.type) {
        case  ACTION_TYPES.GET_PLAYLISTS:
            return {...state, playlists: [...action.payload]}
        case  ACTION_TYPES.SET_CURRENT_PLAYLIST:
            return {...state, currentPlaylist: action.payload}
        case  ACTION_TYPES.SET_LESSON:

            const isLesson = state.lesson.find((i)=>i.id === action.payload.id)
            if (isLesson) {
                return state
            } else {
                return {...state, lesson: [...state.lesson, action.payload]}
            }

        default:
            return state
    }
}

export const getPlayLists = (playlists:IPlaylists[]) => ({
    type: ACTION_TYPES.GET_PLAYLISTS,
    payload: playlists
});

export const setCurrentPlaylist = (currentPlaylist: number) => ({
    type: ACTION_TYPES.SET_CURRENT_PLAYLIST,
    payload: currentPlaylist
});

export const setLesson = (lesson: ILesson) => ({
    type: ACTION_TYPES.SET_LESSON,
    payload: lesson
});


export default dashboardReducer