import "./App.css";
import { Button, Form, Modal, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

const API_ROOT = "http://localhost:4000/products/";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [products, setProducts] = useState();
  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    inStock: false,
  });

  const fetchProducts = () => {
    axios.get(API_ROOT).then((response) => {
      console.log(response);
      setProducts(response.data);
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSave = () => {
    if (selectedProduct) {
      axios
        .put(API_ROOT + "/" + selectedProduct.id, formValues)
        .then((result) => {
          fetchProducts();
          setShowFormModal(false);
        });
    } else {
      axios.post(API_ROOT, formValues).then((result) => {
        fetchProducts();
        setShowFormModal(false);
      });
    }

    resetFormValues();
  };

  const resetFormValues = () => {
    setFormValues({
      name: "",
      description: "",
      price: "",
      category: "",
      inStock: false,
    });
  };

  const handleAdd = () => {
    resetFormValues();
    setSelectedProduct(null);
    setShowFormModal(true);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setFormValues(product);
    setShowFormModal(true);
  };

  const handleDelete = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const handleConfirmedDelete = () => {
    axios.delete(API_ROOT + "/" + selectedProduct.id).then((respose) => {
      fetchProducts();
      setShowDeleteModal(false);
      setSelectedProduct(null);
    });
  };

  const handleChange = (e) => {
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <h1>My Products</h1>
      <Table striped bordered hover>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>In Stock</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {products ? (
            products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>{p.inStock ? "Yes" : "No"}</td>
                <td>
                  <Button variant="primary" onClick={() => handleEdit(p)}>
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => handleDelete(p)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))
          ) : (
            <>Loading...</>
          )}
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleAdd}>
        Add Product
      </Button>

      <Modal show={showDeleteModal}>
        <Modal.Header>Confirm Delete</Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmedDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showFormModal}>
        <Modal.Header>Add Product</Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={formValues.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                value={formValues.price}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={formValues.category}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Check
                label="In Stock"
                type="checkbox"
                name="category"
                checked={formValues.inStock}
                onChange={(e) => {
                  setFormValues({ ...formValues, inStock: e.target.checked });
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowFormModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
