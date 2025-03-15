import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { HomePage } from './pages/home';
import { CatalogPage } from './pages/catalog';
import { DealsPage } from './pages/deals';
import { DashboardPage } from './pages/dashboard';
import { LandlordDashboardPage } from './pages/landlord-dashboard';
import { AdminDashboardPage } from './pages/admin-dashboard';
import { PropertyPage } from './pages/property';
import { AuthPage } from './pages/auth';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route
            path="/auth"
            element={<AuthPage />}
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/catalog" element={<CatalogPage />} />
                    <Route path="/deals" element={<DealsPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/landlord" element={<LandlordDashboardPage />} />
                    <Route path="/admin" element={<AdminDashboardPage />} />
                    <Route path="/properties/:id" element={<PropertyPage />} />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}