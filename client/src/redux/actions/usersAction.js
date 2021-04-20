import * as api from '../../api/index';


export const getUsers = () => async(dispatch) => {
    try {
        const { data }  = await api.fetchUsers();
        console.log(data);

        dispatch({type: 'FETCH_ALL', payload:data});

    } catch (error) {
        console.log(error.message);
        
    }


}


