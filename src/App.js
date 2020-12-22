import React from 'react';
import Header from './shared/Header/Header';
import Login from './pages/Login/Login';
import Map from './pages/Map/Map';
import Profile from './pages/Profile/Profile';

const path = ['map', 'login', 'profile'];

class App extends React.Component {

	state = {
		currentPage: path[0]
	}
	
	changePage = (el)=> {
		this.setState({currentPage: el});
	}

	renderPage =(path)=> {
		switch (path) {
			case 'map':
					return <Map />
			case 'login':
					return <Login />
			case 'profile':
					return <Profile />
			default:
				return <Login />;
		}
	}

	render(){
		let currentPage = this.state.currentPage;
		return (
			<>
			<Header path={path} changePage={this.changePage}/>
			{this.renderPage(currentPage)}

			</>
		);
	}
  
}

export default App;
