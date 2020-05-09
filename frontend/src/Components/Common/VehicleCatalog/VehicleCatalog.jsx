import React, { Component } from "react";
import "./VehicleCatalog.styles.css";
import VehicleCard from "../VehicleCard/VehicleCard";
import Constants from "../../../Utils/Constants";

import axios from "axios";

import Vehicles from "../../../DummyData/Vehicles";

class VehicleCatalog extends Component {
	state = {
		catalog: [],
		searchf: ""
	};
	componentWillMount() {
		const locationID = localStorage.getItem("locationId")
		// console.log()
		axios.get(`${Constants.BACKEND_SERVER.URL}/location`
			, {
				params: {
					_id: locationID
				}
			}
		).then((response) => {
			console.log(response.data.VEHICLES);
			this.setState({ catalog: response.data.VEHICLES })
		}).catch((error) => {
			console.log(error)
		});
	}
	render() {
		//const vehicleDetails = Vehicles;
		const { catalog, searchf } = this.state;
		const fillVehicles = catalog.filter(m => m.MAKE.toLowerCase().includes(searchf.toLowerCase()));
		return (
			<div className="catalogPage">
				<h2>
					Vehicles Available at location {localStorage.getItem("locationName")}
				</h2>
				<div>
					Search with Make<input type="search" placeholder="Vehicle search" onChange={e => this.setState({ searchf: e.target.value })}></input>
				</div>
				<div className="vehicleCatalog">
					{fillVehicles.map((details) => (
						<VehicleCard {...details} />
					))}
				</div>
			</div>
		);
	}
}

export default VehicleCatalog;
