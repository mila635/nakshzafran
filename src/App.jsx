import { useState, useEffect } from 'react';
import { products, reviews, blogPosts, healthBenefits, faqs, timeline, WHATSAPP_NUMBER } from './data/products';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProductGrid from './components/ProductGrid';
import StorySection from './components/StorySection';
import FeaturesGrid from './components/FeaturesGrid';
import HealthPreview from './components/HealthPreview';
import ReviewsGrid from './components/ReviewsGrid';
import BlogGrid from './components/BlogGrid';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import OrderModal from './components/OrderModal';
import Notification from './components/Notification';
import ProductDetail from './components/ProductDetail';
import BlogDetail from './components/BlogDetail';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import HealthPage from './pages/HealthPage';
import BlogPage from './pages/BlogPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [notification, setNotification] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [currentLang, setCurrentLang] = useState('en');
  const [currentFilter, setCurrentFilter] = useState('all');

  const currencies = {
    en: { symbol: 'Rs.', rate: 1 },
    ur: { symbol: 'Rs.', rate: 1 },
    zh: { symbol: '¥', rate: 0.026 }
  };

  const formatPrice = (pkrPrice) => {
    const c = currencies[currentLang];
    return c.symbol + ' ' + Math.round(pkrPrice * c.rate).toLocaleString();
  };

  const showNotif = (text) => {
    setNotification(text);
    setTimeout(() => setNotification(''), 3000);
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === product.id);
      if (existing) {
        return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    showNotif(`${product.name} added to cart`);
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQty = (id, delta) => {
    setCart(prev => {
      const item = prev.find(i => i.id === id);
      if (!item) return prev;
      const newQty = item.qty + delta;
      if (newQty < 1) return prev.filter(i => i.id !== id);
      return prev.map(i => i.id === id ? { ...i, qty: newQty } : i);
    });
  };

  const showPage = (page) => {
    setCurrentPage(page);
    setSelectedProduct(null);
    setSelectedBlog(null);
    window.scrollTo(0, 0);
  };

  const showProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
    window.scrollTo(0, 0);
  };

  const showBlog = (post) => {
    setSelectedBlog(post);
    setCurrentPage('blog-detail');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    if (selectedProduct) {
      return (
        <ProductDetail
          product={selectedProduct}
          formatPrice={formatPrice}
          addToCart={addToCart}
          openOrderModal={() => setOrderModalOpen(true)}
          showPage={showPage}
        />
      );
    }

    if (selectedBlog) {
      return <BlogDetail post={selectedBlog} showPage={showPage} />;
    }

    switch (currentPage) {
      case 'shop':
        return (
          <ShopPage
            products={products}
            formatPrice={formatPrice}
            showProduct={showProduct}
            addToCart={addToCart}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
        );
      case 'about':
        return <AboutPage timeline={timeline} />;
      case 'health':
        return <HealthPage healthBenefits={healthBenefits} />;
      case 'blog':
        return <BlogPage blogPosts={blogPosts} showBlog={showBlog} />;
      case 'faq':
        return <FAQPage faqs={faqs} />;
      case 'contact':
        return <ContactPage showNotif={showNotif} />;
      default:
        return (
          <>
            <Hero showPage={showPage} />
            <TrustBar />
            <ProductGrid
              products={products.slice(0, 4)}
              formatPrice={formatPrice}
              showProduct={showProduct}
              addToCart={addToCart}
              showPage={showPage}
            />
            <StorySection showPage={showPage} />
            <FeaturesGrid />
            <HealthPreview showPage={showPage} />
            <ReviewsGrid reviews={reviews} />
            <BlogGrid blogPosts={blogPosts.slice(0, 3)} showBlog={showBlog} showPage={showPage} />
          </>
        );
    }
  };

  return (
    <div className="app">
      <Header
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        toggleCart={() => setCartOpen(!cartOpen)}
        showPage={showPage}
        currentLang={currentLang}
        setCurrentLang={setCurrentLang}
        currentPage={currentPage}
      />
      <main>{renderPage()}</main>
      <Footer showPage={showPage} />

      <CartSidebar
        cart={cart}
        isOpen={cartOpen}
        toggleCart={() => setCartOpen(!cartOpen)}
        removeFromCart={removeFromCart}
        updateQty={updateQty}
        formatPrice={formatPrice}
        openOrderModal={() => { setCartOpen(false); setOrderModalOpen(true); }}
      />

      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        cart={cart}
        formatPrice={formatPrice}
        whatsappNumber={WHATSAPP_NUMBER}
        showNotif={showNotif}
      />

      <Notification text={notification} />

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          zIndex: 2500,
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: '#25D366',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 8px 32px rgba(37,211,102,0.5)',
          transition: 'transform 0.3s ease',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}

export default App;
