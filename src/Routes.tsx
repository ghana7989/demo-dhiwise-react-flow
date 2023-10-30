import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const DashboardScreenAlerts = React.lazy(
  () => import("pages/DashboardScreenAlerts"),
);
const DashboardScreenCharts = React.lazy(
  () => import("pages/DashboardScreenCharts"),
);
const DashboardScreenWidgets = React.lazy(
  () => import("pages/DashboardScreenWidgets"),
);
const DashboardScreenPricing = React.lazy(
  () => import("pages/DashboardScreenPricing"),
);
const DashboardScreenProjectsTimeline = React.lazy(
  () => import("pages/DashboardScreenProjectsTimeline"),
);
const DashboardScreenProjectsGeneral = React.lazy(
  () => import("pages/DashboardScreenProjectsGeneral"),
);
const DashboardScreenAccountInvoice = React.lazy(
  () => import("pages/DashboardScreenAccountInvoice"),
);
const DashboardScreenAccountBilling = React.lazy(
  () => import("pages/DashboardScreenAccountBilling"),
);
const DashboardScreenNewUser = React.lazy(
  () => import("pages/DashboardScreenNewUser"),
);
const DashboardScreenReports = React.lazy(
  () => import("pages/DashboardScreenReports"),
);
const DashboardScreenAllProjects = React.lazy(
  () => import("pages/DashboardScreenAllProjects"),
);
const DashboardScreenTeams = React.lazy(
  () => import("pages/DashboardScreenTeams"),
);
const DashboardScreenProfileOverview = React.lazy(
  () => import("pages/DashboardScreenProfileOverview"),
);
const DashboardScreenCRM = React.lazy(() => import("pages/DashboardScreenCRM"));
const DashboardScreenDefault = React.lazy(
  () => import("pages/DashboardScreenDefault"),
);
const SoftUIDashboardPROThumbnail = React.lazy(
  () => import("pages/SoftUIDashboardPROThumbnail"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/softuidashboardprothumbnail"
            element={<SoftUIDashboardPROThumbnail />}
          />
          <Route
            path="/dashboardscreendefault"
            element={<DashboardScreenDefault />}
          />
          <Route path="/dashboardscreencrm" element={<DashboardScreenCRM />} />
          <Route
            path="/dashboardscreenprofileoverview"
            element={<DashboardScreenProfileOverview />}
          />
          <Route
            path="/dashboardscreenteams"
            element={<DashboardScreenTeams />}
          />
          <Route
            path="/dashboardscreenallprojects"
            element={<DashboardScreenAllProjects />}
          />
          <Route
            path="/dashboardscreenreports"
            element={<DashboardScreenReports />}
          />
          <Route
            path="/dashboardscreennewuser"
            element={<DashboardScreenNewUser />}
          />
          <Route
            path="/dashboardscreenaccountbilling"
            element={<DashboardScreenAccountBilling />}
          />
          <Route
            path="/dashboardscreenaccountinvoice"
            element={<DashboardScreenAccountInvoice />}
          />
          <Route
            path="/dashboardscreenprojectsgeneral"
            element={<DashboardScreenProjectsGeneral />}
          />
          <Route
            path="/dashboardscreenprojectstimeline"
            element={<DashboardScreenProjectsTimeline />}
          />
          <Route
            path="/dashboardscreenpricing"
            element={<DashboardScreenPricing />}
          />
          <Route
            path="/dashboardscreenwidgets"
            element={<DashboardScreenWidgets />}
          />
          <Route
            path="/dashboardscreencharts"
            element={<DashboardScreenCharts />}
          />
          <Route
            path="/dashboardscreenalerts"
            element={<DashboardScreenAlerts />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
