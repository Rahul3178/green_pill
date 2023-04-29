// communing soon reducer

// initial State
const ComingSoonInitialState= false;

// reducer 

const ChangeComingSoonState=(state=ComingSoonInitialState,action)=>
{
        switch(action.type)
        {
                case 'COMINGSOON': return (state)?false:true;
                default: return state;
        }
}

export default ChangeComingSoonState;