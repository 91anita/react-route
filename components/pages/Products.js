import {Link} from 'react-router-dom'

const Products = () => {
    return <section>
      <h1>The Product Page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>Books
            </Link></li>
            <li>
            <Link to='/products/p2'>Carpet
            </Link></li>
            <li>
            <Link to='/products/p3'>Online course
            </Link></li>
      </ul>
      </section>
  };
  
  export default Products;
  