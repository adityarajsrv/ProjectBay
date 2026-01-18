import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import UserNavbar from "../components/UserNavbar";
import { useState } from "react";
import ProjectOverview from "../components/ProjectOverview";
import ProjectRoadmap from "../components/ProjectRoadmap";
import ProjectInsights from "../components/ProjectInsights";
import ProjectExecution from "../components/ProjectExecution";
import ProjectChat from "../components/ProjectChat";

const DashboardPage = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeView, setActiveView] = useState("dashboard");
 
  const renderMainContent = () => {
    if(!activeProject) return <Dashboard/>

    switch(activeView){
      case "overview":
        return <ProjectOverview project={activeProject}/>
      case "roadmap":
        return <ProjectRoadmap project={activeProject}/>
      case "execution":
        return <ProjectExecution project={activeProject}/>
      case "insights":
        return <ProjectInsights project={activeProject}/>
      case "chat":
        return <ProjectChat project = {activeProject}/>
      default:
        return <Dashboard/>  
    }
  }
  return (
    <div className="min-h-screen bg-[#0b0f1a] text-white">
      <UserNavbar />
      <Sidebar 
        activeProject={activeProject}
        setActiveProject={setActiveProject}
        activeView={activeView}
        setActiveView={setActiveView}
      />
      {renderMainContent()}
    </div>
  );
};

export default DashboardPage;
