import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';
import { verifyStoredToken } from './store/actions/clientActions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyStoredToken());
  }, [dispatch]);

  return (
    <div className="w-full min-h-screen bg-white text-neutral-900">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;