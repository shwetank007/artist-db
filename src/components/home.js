import React, {Component} from 'react';

//component
import Banner from '../components/banner';
import ArtistsList from '../components/artistsList';

const URL_ARTISTS = "http://localhost:3004/artists";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists: ''
        }
    }

    componentDidMount() {
        fetch(URL_ARTISTS, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({
                artists: json
            });
        })
    }

    render() {
        return (
            <div>
                <Banner></Banner>
                <ArtistsList allArtist={this.state.artists}></ArtistsList>
            </div>
        )
    }
}

export default Home;