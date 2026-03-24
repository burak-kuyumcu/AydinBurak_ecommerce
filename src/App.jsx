import Header from './layout/Header';
import PageContent from './layout/PageContent';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900">
      <Header />
      <PageContent />
      <Footer />
    </div>
  );
}

export default App;