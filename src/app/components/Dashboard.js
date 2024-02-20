import SearchBar from "./SearchBar";
import PatientVisited from "./PatientVisited";
import Meetings from "./Meeting";
import Statistics from "./Statistics";
import Activepatients from "./Activepatients";
import TeamMeeting from "./TeamMeeting";
import Consultation from "./Consultation";
import Profile from "./Profile";

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row rounded-3xl bg-[#151c39] w-full lg:w-[1250px] mx-auto lg:ml-10 px-5 lg:px-10 py-5 gap-y-5 lg:gap-x-10">
      {/* Main Content */}
      <div className="w-full lg:w-2/3 px-2">
        <SearchBar />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="grid gap-5">
            <PatientVisited />
            <Meetings />
          </div>
          <Statistics />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-2">
          <div>
            <p className="text-white text-3xl font-bold my-3">
              Active Patients
            </p>
            <Activepatients />
          </div>

          <div>
            <p className="text-white text-3xl font-bold my-3">
              Upcoming Events
            </p>
            <TeamMeeting />
            <Consultation />
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="w-full lg:w-1/3 mt-5 lg:mt-0">
        <Profile />
      </div>
    </div>
  );
};

export default Dashboard;
