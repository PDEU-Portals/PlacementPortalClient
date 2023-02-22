import React from "react";
import '../ResourcePageComponents/Css/Sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return ( 
        <>  
            <div className="sidebar-main">
            <div class="sidebar">
			<nav class="sidebar_menu">
				<button>
					<span>
                    {/* <FontAwesomeIcon icon="fa-duotone fa-list" /> */}
						<span>
                           <p>
                            
                           </p>
                            <Link to="/students/resource/process">Placement Process</Link>     
                        </span>
					</span>
				</button>
				<button>
					<span>
						{/* <i class="fa-solid fa-magnifying-glass"></i> */}
						<span>
                            <p>
                                
                            </p>
							<Link to ="/students/resource/interview">
								Facing an Interview
							</Link>
                        </span>
					</span>
				</button>
				<button>
					<span>
						{/* <i class="fa-solid fa-compass"></i> */}
						<span>
                            <p>
                            </p>
							<Link to="/students/resource/resume_info">
							Build Strong Resume
							</Link>
                            

                        </span>
					</span>
				</button>
				<button>
					<span>
						{/* <i class="fa-solid fa-location-arrow">
						</i> */}
						<span>
                            <p>
                            </p>
							<Link to="/students/resource/companies">
							Companies
							</Link>
                            

                        </span>
					</span>
				</button>
				<button>
					<span>
						{/* <i class="fa-regular fa-heart">
						</i> */}
						<span>
                            <p>
                            </p>
							<Link to="/students/resource/analytics">
							Analytics
							</Link>
                            

                        </span>
					</span>
				</button>
				{/* <button>
					<span>
						<i class="fa-solid fa-circle-plus"></i>
						<span>Create</span>
					</span>
				</button> */}
				<button>
					<span>
						{/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYzAqKERFeE4h-K3vnOWQSWJmxRTKTApVjEg&usqp=CAU"> */}
						<span>
							General Questions
						</span>
					</span>
				</button>
				<button>
					<span>
						<i class="fa-solid fa-bars"></i>
						<span>More</span>
					</span>
				</button>
			</nav>
		</div>
            </div>
        </>
     );
}
 
export default Sidebar;