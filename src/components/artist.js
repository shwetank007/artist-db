import React,  { Component } from 'react';

//component
import Header from './header';
import AlbumList from './albumList';

const REQ_URL = `http://localhost:3004/artists`;

class Artist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artist: ''
        }
    }

    componentDidMount() {
        fetch(`${REQ_URL}/${this.props.match.params.artistId}`, {
            method: 'GET'
        }).then(response => response.json())
        .then(json => {
            this.setState({
                artist:json
            });
        })
    }

    render() {
        return(
            <div>
                <Header/>
                <div className="artist-bio">
                    <div className="avatar">
                        <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`}}></span>
                    </div>
                    <div className="bio">
                        <h3>{this.state.artist.name}</h3>
                        <div className="bio-text">
                            {this.state.artist.bio}
                        </div>
                    </div>
                    <AlbumList albumList={this.state.artist.albums}/>
                </div>
            </div>
        )
    }
}

export default Artist;