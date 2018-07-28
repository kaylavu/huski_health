import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import PetProfile from './PetProfile.jsx';
import Timeline from './Timeline.jsx';
import PetChart from './PetChart.jsx';
import StatusBar from './StatusBar.jsx';
import NewPetForm from './NewPetForm.jsx';
// import PetActivity from 'PetActivity.jsx';

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                < NavBar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                            <PetProfile pet={this.props.pet} />
                        </div>
                        <div className="col-sm-9">
                            <div className="col-sm-8">
                                < PetChart pet={this.props.pet} />
                                < Timeline pet={this.props.pet} />
                            </div>
                                < StatusBar pet={this.props.pet}/> 
                            <div className="col-sm-4">
                                < NewPetForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;