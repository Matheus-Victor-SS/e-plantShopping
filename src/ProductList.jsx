import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList({ onHomeClick }) {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Todas as plantas originais - traduzidas
  const plantsArray = [
    {
      category: "Plantas Purificadoras de Ar",
      plants: [
        {
          name: "Espada de São Jorge",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Produz oxigênio à noite, melhorando a qualidade do ar.",
          cost: "$15"
        },
        {
          name: "Clorofito",
          image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
          description: "Filtra formaldeído e xileno do ar.",
          cost: "$12"
        },
        {
          name: "Lírio da Paz",
          image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
          description: "Remove esporos de mofo e purifica o ar.",
          cost: "$18"
        },
        {
          name: "Samambaia Americana",
          image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/boston-fern-5114414_1280.jpg",
          description: "Adiciona umidade ao ar e remove toxinas.",
          cost: "$20"
        },
        {
          name: "Ficus Elástica",
          image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/flower-4850729_1280.jpg",
          description: "Fácil de cuidar e eficaz na remoção de toxinas.",
          cost: "$17"
        },
        {
          name: "Babosa",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Purifica o ar e tem propriedades curativas para a pele.",
          cost: "$14"
        }
      ]
    },
    {
      category: "Plantas Aromáticas e Fragrantes",
      plants: [
        {
          name: "Lavanda",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Aroma calmante, usado em aromaterapia.",
          cost: "$20"
        },
        {
          name: "Jasmim",
          image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Fragrância doce, promove relaxamento.",
          cost: "$18"
        },
        {
          name: "Alecrim",
          image: "https://cdn.pixabay.com/photo/2019/10/11/07/12/rosemary-4541241_1280.jpg",
          description: "Aroma revigorante, frequentemente usado na culinária.",
          cost: "$15"
        },
        {
          name: "Hortelã",
          image: "https://cdn.pixabay.com/photo/2016/01/07/18/16/mint-1126282_1280.jpg",
          description: "Aroma refrescante, usado em chás e culinária.",
          cost: "$12"
        },
        {
          name: "Erva Cidreira",
          image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
          description: "Aroma cítrico, alivia o estresse e promove o sono.",
          cost: "$14"
        },
        {
          name: "Jacinto",
          image: "https://cdn.pixabay.com/photo/2019/04/07/20/20/hyacinth-4110726_1280.jpg",
          description: "Planta florífera conhecida por sua fragrância marcante.",
          cost: "$22"
        }
      ]
    },
    {
      category: "Plantas Repelentes de Insetos",
      plants: [
        {
          name: "Orégano",
          image: "https://cdn.pixabay.com/photo/2015/05/30/21/20/oregano-790702_1280.jpg",
          description: "Contém compostos que podem repelir certos insetos.",
          cost: "$10"
        },
        {
          name: "Cravo-de-defunto",
          image: "https://cdn.pixabay.com/photo/2022/02/22/05/45/marigold-7028063_1280.jpg",
          description: "Repelente natural de insetos, também adiciona cor ao jardim.",
          cost: "$8"
        },
        {
          name: "Gerânios",
          image: "https://cdn.pixabay.com/photo/2012/04/26/21/51/flowerpot-43270_1280.jpg",
          description: "Conhecidos por suas propriedades repelentes de insetos.",
          cost: "$20"
        },
        {
          name: "Manjericão",
          image: "https://cdn.pixabay.com/photo/2016/07/24/20/48/tulsi-1539181_1280.jpg",
          description: "Repelente natural de moscas e mosquitos, usado na culinária.",
          cost: "$9"
        },
        {
          name: "Lavanda",
          image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Aroma calmante, usado em aromaterapia.",
          cost: "$20"
        },
        {
          name: "Erva-de-gato",
          image: "https://cdn.pixabay.com/photo/2015/07/02/21/55/cat-829681_1280.jpg",
          description: "Repelente natural de mosquitos e atrai gatos.",
          cost: "$13"
        }
      ]
    },
    {
      category: "Plantas Medicinais",
      plants: [
        {
          name: "Babosa",
          image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/leaf-3283175_1280.jpg",
          description: "Gel calmante usado para problemas de pele.",
          cost: "$14"
        },
        {
          name: "Equinácea",
          image: "https://cdn.pixabay.com/photo/2014/12/05/03/53/echinacea-557477_1280.jpg",
          description: "Fortalece o sistema imunológico, ajuda a combater resfriados.",
          cost: "$16"
        },
        {
          name: "Hortelã-pimenta",
          image: "https://cdn.pixabay.com/photo/2017/07/12/12/23/peppermint-2496773_1280.jpg",
          description: "Alivia problemas digestivos e dores de cabeça.",
          cost: "$13"
        },
        {
          name: "Erva Cidreira",
          image: "https://cdn.pixabay.com/photo/2019/09/16/07/41/balm-4480134_1280.jpg",
          description: "Acalma os nervos e promove relaxamento.",
          cost: "$14"
        },
        {
          name: "Camomila",
          image: "https://cdn.pixabay.com/photo/2016/08/19/19/48/flowers-1606041_1280.jpg",
          description: "Acalma a ansiedade e promove o sono.",
          cost: "$15"
        },
        {
          name: "Calêndula",
          image: "https://cdn.pixabay.com/photo/2019/07/15/18/28/flowers-4340127_1280.jpg",
          description: "Cura feridas e alivia irritações na pele.",
          cost: "$12"
        }
      ]
    },
    {
      category: "Plantas de Baixa Manutenção",
      plants: [
        {
          name: "Zamioculca",
          image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          description: "Cresce em pouca luz e requer regas mínimas.",
          cost: "$25"
        },
        {
          name: "Jiboia",
          image: "https://cdn.pixabay.com/photo/2018/11/15/10/32/plants-3816945_1280.jpg",
          description: "Tolerante e pode crescer em várias condições.",
          cost: "$10"
        },
        {
          name: "Espada de São Jorge",
          image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
          description: "Resistente à maioria das pragas e requer pouca água.",
          cost: "$15"
        },
        {
          name: "Planta de Ferro",
          image: "https://cdn.pixabay.com/photo/2017/02/16/18/04/cast-iron-plant-2072008_1280.jpg",
          description: "Planta resistente que tolera pouca luz e negligência.",
          cost: "$20"
        },
        {
          name: "Suculentas",
          image: "https://cdn.pixabay.com/photo/2016/11/21/16/05/cacti-1846147_1280.jpg",
          description: "Plantas resistentes à seca com formas e cores únicas.",
          cost: "$18"
        },
        {
          name: "Aglaonema",
          image: "https://cdn.pixabay.com/photo/2014/10/10/04/27/aglaonema-482915_1280.jpg",
          description: "Requer cuidados mínimos e adiciona cor a espaços internos.",
          cost: "$22"
        }
      ]
    }
  ];

  const getAllPlants = () => {
    return plantsArray.flatMap(category => 
      category.plants.map(plant => ({ ...plant, category: category.category }))
    );
  };

  const filteredPlants = getAllPlants().filter(plant => {
    const matchesSearch = plant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          plant.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || plant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['all', ...new Set(plantsArray.map(cat => cat.category))];

  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
    setTimeout(() => {
      setAddedToCart((prevState) => ({
        ...prevState,
        [product.name]: false,
      }));
    }, 1500);
  };

  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categoryNames = {
    'all': 'Todas as Categorias',
    'Plantas Purificadoras de Ar': 'Plantas Purificadoras de Ar',
    'Plantas Aromáticas e Fragrantes': 'Plantas Aromáticas e Fragrantes',
    'Plantas Repelentes de Insetos': 'Plantas Repelentes de Insetos',
    'Plantas Medicinais': 'Plantas Medicinais',
    'Plantas de Baixa Manutenção': 'Plantas de Baixa Manutenção'
  };

  return (
    <div className="product-list-page">
      <nav className="modern-navbar">
        <div className="nav-brand" onClick={onHomeClick}>
          <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="Logo" />
          <div>
            <h3>Paraíso Verde</h3>
            <span>Onde a natureza encontra seu lar</span>
          </div>
        </div>

        <div className="nav-links">
          <button className="nav-link" onClick={() => setShowCart(false)}>Plantas</button>
          <button className="nav-link-cart" onClick={() => setShowCart(true)}>
            Carrinho
            {calculateTotalQuantity() > 0 && (
              <span className="cart-badge">{calculateTotalQuantity()}</span>
            )}
          </button>
        </div>
      </nav>

      {!showCart ? (
        <>
          <div className="search-filter-bar">
            <input
              type="text"
              placeholder="Buscar plantas..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {categoryNames[cat] || cat}
                </option>
              ))}
            </select>
          </div>

          <div className="product-grid-modern">
            {filteredPlants.length === 0 ? (
              <div className="no-results">
                <p>Nenhuma planta encontrada</p>
              </div>
            ) : (
              filteredPlants.map((plant, index) => (
                <div className="product-card-modern" key={index}>
                  <div className="card-image">
                    <img src={plant.image} alt={plant.name} />
                    <span className="card-category">{plant.category}</span>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{plant.name}</h3>
                    <p className="card-description">{plant.description}</p>
                    <div className="card-footer">
                      <span className="card-price">{plant.cost}</span>
                      <button
                        className={`add-to-cart-btn ${addedToCart[plant.name] ? 'added' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={addedToCart[plant.name]}
                      >
                        {addedToCart[plant.name] ? '✓ Adicionado' : '+ Carrinho'}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {showBackToTop && (
            <button className="back-to-top" onClick={scrollToTop}>
              ↑ Topo
            </button>
          )}
        </>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;