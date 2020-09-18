import React from 'react';

const ShowData = ({ name, nickname, img, birthday, status,portrayed }) => {

    return (
        <div className="card">
            <div className="card-inner">
                <div className="card-front">
                    <img src={img}></img>
                </div>

                <div className="card-back">
                    <h1>Name: {name}</h1>
                    <ul>
                        <li><strong>Actor:</strong> {portrayed}</li>
                        <li><strong>Nickname:</strong> {nickname}</li>
                        <li><strong>Birthday:</strong> {birthday}</li>
                        <li><strong>Status:</strong> {status}</li>
                    </ul>

                </div>


            </div>

        </div>
    );

}
export default ShowData;