export default (state = {}, action) => {
    switch(action.type){
        case "select_Contact":
        return { contact : action.payload };
        default : 
        return state;
    }
}