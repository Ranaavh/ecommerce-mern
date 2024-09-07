const ProductList = () => {
  return (
    <div className="container-fluid">
      <h1 className="mt-4">Manage Products</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through products here */}
          <tr>
            <td>Product 1</td>
            <td>$10</td>
            <td>
              <button className="btn btn-warning btn-sm">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
