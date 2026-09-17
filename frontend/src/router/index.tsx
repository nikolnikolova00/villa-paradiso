import { Outlet, Route, Routes } from 'react-router-dom';
import { ThemedLayout } from '@refinedev/mui';
import App from '../App';
import { ResourceListPage } from '../admin/ResourceListPage';
import { adminResources } from '../admin/resources';
import { SidebarTitle } from '../components';
import { AdminHomePage, UserHomePage, AboutPage, GalleryPage, AccommondationPage } from '../pages';

export const AppRoutes = () => (
  <Routes>
    <Route element={<App />}>
      <Route index element={<UserHomePage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="gallery" element={<GalleryPage />} />
      <Route path="accommondation" element={<AccommondationPage />} />
    </Route>
    <Route
      path="/admin"
      element={
        <ThemedLayout Title={SidebarTitle}>
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
