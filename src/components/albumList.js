import React from 'react';

const AlbumList = (props) => {

    const showList = ({albumList}) => {
        if(albumList) {
            return albumList.map((item, index)=>{
                return(
                    <img key={index} src={`/images/albums/${item.cover}.jpg`}/>
                )
            })
        }
    }

    return (
        <div className="albums-list">
            {showList(props)}
        </div>
    )
}

export default AlbumList;