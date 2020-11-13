import {combineReducers} from 'redux';
import dashboard, {DashboardState} from "../../modules/main/modules/dashboard/reducers/dashboard.reducer";


export interface IRootState {
    readonly dashboard: DashboardState;
}

const rootReducer = combineReducers<IRootState>({
        dashboard
    })



export default rootReducer;