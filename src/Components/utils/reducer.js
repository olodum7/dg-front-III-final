export const reducer = (state, action) => {
    switch (action.type) {
        case 'GET_DENTISTS':
            return {...state, dentists: action.payload }
        case 'GET_SOLO_DENTIST':
            return
        case 'ADD_FAVS':
            return {...state, favs: [...state.favs, action.payload] }
        case 'SWITCH_THEME':
            return {...state, theme: !state.theme }
        default:
            throw new Error()
    }
}

export default reducer