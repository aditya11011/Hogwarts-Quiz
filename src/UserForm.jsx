import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const UserForm = () => {
    const { Name, setName } = useContext(UserContext);
     
    return (
        <div>
          <form>
            <input
                type="text"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                style={{height:'30px',marginRight:'20px',marginTop:'50px'}}
            />
            <button type='submit'  onClick={(e)=>{e.preventDefault();window.history.pushState({}, '', '/quiz'); 
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);}} style={{borderRadius:'20px',backgroundColor:'lightcoral'}}  >Start</button>
            </form>
        </div>
    );
};

export default UserForm;
