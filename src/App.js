import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home/HomePage';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Bucket from './components/Bucket';
import toast, { Toaster } from 'react-hot-toast'


function App() {
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [global, setGlobal] = useState({ skip: '0', limit: '0' });
  const [buckets, setBuckets] = useState([]);
  const { skip, limit } = global;

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

  useEffect(() => {
    getAllProductsAndCetgories();
  }, [])

  const getAllProductsAndCetgories = async () => {
    await fetch(`${process.env.REACT_APP_URI}?limit=${limit}&skip=${skip}`).then(data => data.json()).then(result => {
      setProducts(result);
    })
    await fetch(`${process.env.REACT_APP_URI}/categories`).then(data => data.json()).then(result => {
      setCategories(result);
    })
  }




  const getFiltredProduct = async (category) => {
    setCurrentPage(1)
    if (category == false) {
      getAllProductsAndCetgories();
      return;
    }
    fetch(`${process.env.REACT_APP_URI}/category/${category}?limit=${limit}`).then(data => data.json()).then(result => {
      setProducts(result);
    })
  }



  const getBucket = async (props) => {
    let exist = buckets.filter(s => s.id == props.id);
    if (exist.length) {
      return toast.error(`Bu ${props.title} mahsulot savatchada allaqachon mavjud`)
    }
    setBuckets([...buckets, props])
    toast.success('Done')
  }

  const getRemove = (id) => {
    let newMass = buckets.filter(s => s.id != id);
    setBuckets(newMass);
  }

  return (
    <div className="App">
      <Toaster />
      {
        modal &&
        <Bucket modal={modal} setModal={setModal} buckets={buckets} getRemove={getRemove} />
      }
      <Navbar categories={categories} getFiltredProduct={getFiltredProduct} />
      <i className='btn btn-outline-primary btn_bucket' onClick={() => setModal(!modal)}>Bucket {buckets?.length}</i>
      <HomePage
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
        products={products.products} total={products.total} getFiltredProduct={getFiltredProduct}
        getBucket={getBucket}
      />
    </div>
  );
}

export default App;
