import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router";
import HomePage from "./pages/homePage";
import TvSeriesPage from "./pages/tvSeriesPage"
import TvDetailsPage from "./pages/tvDetailsPage"
import MoviePage from "./pages/movieDetailsPage";
import UpcomingPage from "./pages/upcomingPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ActorsPage from "./pages/actorsPage";
import ActorsDetailPage from "./pages/actorsDetailPage";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const theme = createTheme({
  palette: {
    primary: { main: "#9c27b0" },  
    secondary: { main: "#f5b301" },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <MoviesContextProvider>
          <Routes>
            <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
            <Route path="/movies/upcoming" element={<UpcomingPage />} />
            <Route path="/reviews/:id" element={<MovieReviewPage />} />
            <Route path="/movies/:id" element={<MoviePage />} />
            <Route path="/tv/:id" element={<TvDetailsPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/tv" element={<TvSeriesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/reviews/form" element={ <AddMovieReviewPage /> } />
            <Route path="/actors" element={ <ActorsPage /> } />
            <Route path="/actors/:id" element={ <ActorsDetailPage /> } />



          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </ThemeProvider>
  );
};



const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);
