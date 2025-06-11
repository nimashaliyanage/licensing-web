import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Plus, Star } from "lucide-react"
import { mockProducts } from "../data/mockData"
import Image from "../assets/img.jpg"
import ProductForm from "./ProductForm";
import ProductDetailsModal from "./ProductDetailsModal";

export default function ProductManagement() {

  const [favorites, setFavorites] = useState({});
  const [products, setProducts] = useState(mockProducts)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [editingProduct, setEditingProduct] = useState(null)

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleAddProduct = (newProduct) => {
    // Generate a new product ID
    const newId = `PROD-${String(products.length + 1).padStart(3, "0")}`

    // Create the new product object with default values for missing fields
    const productToAdd = {
      id: newId,
      name: newProduct.name,
      version: "1.0.0",
      licenses: 0,
      revenue: 0,
      ...newProduct,
    }

    // Add the new product to the list
    setProducts([...products, productToAdd])
  }


  const handleUpdateProduct = (updatedProduct) => {
    setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)))
  }

  const handleProductSubmit = (productData) => {
    if (editingProduct) {
      handleUpdateProduct(productData)
    } else {
      handleAddProduct(productData)
    }
  }

  const handleViewVersions = (product) => {
    setSelectedProduct(product)
    setIsDetailsOpen(true)
  }

  const handleEditProduct = (product) => {
    setEditingProduct(product)
    setIsFormOpen(true)
  }

   const handleEditFromDetails = () => {
    // Use the currently selected product for editing
    if (selectedProduct) {
      setEditingProduct(selectedProduct)
      setIsDetailsOpen(false) // Close details modal
      setIsFormOpen(true) // Open edit form
    }
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setEditingProduct(null)
  }

  const handleAddNewProduct = () => {
    setEditingProduct(null)
    setIsFormOpen(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-medium">Product Management</h3>
          <p className="text-sm text-muted-foreground">Manage your software products and versions</p>
        </div>
       <Button onClick={handleAddNewProduct}>
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <div className="flex justify-center mb-2">
                <img
                  src={Image}
                  alt="Product"
                  className="w-24 h-24 object-cover rounded-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <button onClick={() => toggleFavorite(product.id)}>
                  <Star
                    className={`w-5 h-5 transition-colors ${favorites[product.id]
                      ? "fill-blue-500 text-blue-500"
                      : "text-gray-400"
                      }`}
                  />
                </button>
              </div>
              <CardDescription>Product ID: {product.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Total Price</span>
                  <span className="font-medium">${product.revenue.toLocaleString()}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => handleEditProduct(product)}>
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1" onClick={() => handleViewVersions(product)}>
                    View
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Product Form Modal */}
      <ProductForm
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        onSubmit={handleProductSubmit}
        editProduct={editingProduct}
      />
      <ProductDetailsModal
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        product={selectedProduct}
        onEdit={handleEditFromDetails}
      />
    </div>
  )
}
