const themeSetting = {
    theme:'light'
}

const ThemeReducer = ({state : themeSetting, action})=>
{
      switch (action.type = 'TOGGLE_THEME')
        {
            case 'light':
                return  state = 'light' 
            case 'dark':
                return state = 'dark'
            default:
                return state;
        }
};

