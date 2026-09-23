import { Outlet, Route, Routes } from 'react-router-dom';
import { ThemedLayout } from '@refinedev/mui';
import { ResourceListPage } from '../admin/ResourceListPage';
import { adminResources } from '../admin/resources';
import { AdminHeader, SidebarTitle, SiteLayout } from '../components';
import { AdminHomePage, ComingSoonPage, UserHomePage } from '../pages';

export const AppRoutes = () => (
  <Routes>
    <Route element={<SiteLayout />}>
      <Route index element={<UserHomePage />} />
      <Route path="accommodation" element={<ComingSoonPage />} />
      <Route path="gallery" element={<ComingSoonPage />} />
      <Route path="about" element={<ComingSoonPage />} />
      <Route path="contact" element={<ComingSoonPage />} />
    </Route>
    <Route
      path="/admin"
      element={
        <ThemedLayout Title={SidebarTitle} Header={AdminHeader}>
          <Outlet />
        </ThemedLayout>
      }
    >
      <Route index element={<AdminHomePage />} />
      {adminResources.map(({ name }) => (
        <Route
          key={name}
          path={name}
          element={<ResourceListPage resource={name} />}
        />
      ))}
    </Route>
  </Routes>
);
