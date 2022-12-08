import React from "react";
import { useDispatch, useSelector } from "react-redux";

import HobbyList from "../components/Home/HobbyList";
import { addNewHobby, setActiveHobby } from "../actions/hobby";

const randomNumber = () => {
    return 1000 + Math.trunc(Math.random() * 9000);
};

function HomePage(props) {
    const hobbyList = useSelector((state) => state.hobby.list);
    const activeId = useSelector((state) => state.hobby.activeId);
    const dispatch = useDispatch();

    const handleAddHobbyList = () => {
        //Random hobby object
        const newId = randomNumber();
        const newHobby = {
            id: newId,
            title: `Title ${newId}`,
        };

        //Dispatch action to add a new hobby to redux
        const action = addNewHobby(newHobby);
        dispatch(action);
    };

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    };

    return (
        <div>
            <button onClick={handleAddHobbyList}>Random hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            />
        </div>
    );
}

export default HomePage;
