import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function Landing() {
	return (
		<>
			<div className="w-100" style={{ maxWidth: '400px' }}>
				<div className="landing">
					<img
						src="./altcolors5.png"
						className="img-fluid"
						alt="WMIC Logo"
					></img>
				</div>
				<div className="mt-2 text-center">
				<div className="w-100" style={{ maxWidth: '100vw' }}>	
					<Link to="/userlogin">
						<Button
							variant="primary"
							type="link"
							size="lg"
							className="text-white font-medium rounded-lg mt-3 ms-2 me-2 w-40 "
							style={{ backgroundColor: '#EA3187', borderColor: '#EA3187' }}
							active
						>
							User Login
						</Button>
					</Link>
					<Link to="/vendorlogin">
						<Button
							variant="primary"
							type="link"
							size="lg"
							className="text-white font-medium rounded-lg mt-3 me-2 ms-2 w-40"
							style={{ backgroundColor: '#EA3187', borderColor: '#EA3187' }}
							onMouseOver={(e) => {
								e.target.style.backgroundColor = '#0066ff'; // Change to the desired color on hover
								e.target.style.borderColor = '#031f99'; // Change to the desired color on hover
							  }}
							  onMouseOut={(e) => {
								e.target.style.backgroundColor = '#EA3187'; // Revert back to original color on mouse out
								e.target.style.borderColor = '#EA3187'; // Revert back to original color on mouse out
							  }}
							active
						>
							Vendor Login
						</Button>
					</Link>
					</div>
				</div>
			</div>
		</>
	);
}
