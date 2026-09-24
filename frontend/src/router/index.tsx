import { Outlet, Route, Routes } from 'react-router-dom';
import { ThemedLayout } from '@refinedev/mui';
import { ResourceListPage, adminResources } from 'admin';
import { AdminHeader, SidebarTitle, SiteLayout } from 'components';
import { AboutPage, AdminHomePage, ComingSoonPage, GalleryPage, UserHomePage } from 'pages';

/* eslint-disable react-refresh/only-export-components */
export { navItems } from './navItems';
export type { NavKey } from './navItems';
/* eslint-enable react-refresh/only-export-components */

export const AppRoutes = () => (
  <Routes>
    <Route element={<SiteLayout />}>
      <Route index element={<UserHomePage />} />
      <Route path="accommodation" element={<ComingSoonPage />} />
      <Route path="gallery" element={<GalleryPage />} />
      <Route path="about" element={<AboutPage />} />
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
