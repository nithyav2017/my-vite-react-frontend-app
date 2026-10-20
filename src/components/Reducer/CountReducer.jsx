const CountReducer= (state = 1, action) =>
{
    switch (action.type)
        {
            case "INC":               
                    return state + 1;                 
            case "DEC":
                    return state > 0 ? state -1 : state;
            default:
                return state;
        }
}

export default CountReducer;