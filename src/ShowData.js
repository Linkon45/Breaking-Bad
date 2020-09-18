import React from 'react';

const ShowData = ({ name, nickname, img, birthday, status }) => {

    return (
        <div>
            <h1>Name: {name}</h1>
            <p>Nickname: {nickname}</p>
            <p>Birthday: {birthday}</p>
            <p>Status: {status}</p>
            <img src={img}></img>

        </div>
    );

}
export default ShowData;