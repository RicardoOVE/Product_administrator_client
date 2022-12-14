import {BrowserRouter, Route, Switch} from 'react-router-dom'
import NuevoProducto from './componentes/NuevoProducto';
import Producto from './componentes/Producto';
import TodosProductos from './componentes/TodosProductos';

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={()=> <TodosProductos />} />
          <Route path='/producto/:id' exact render={() => <Producto />} />
          <Route path='/nuevo' render={() => <NuevoProducto />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
