import { useState, useEffect } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "./ui/modal";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";

export default function ProductForm({ isOpen, onClose, onSubmit, editProduct = null }) {
  const [formData, setFormData] = useState({
    name: "",
    licenseKey: "",
    buildNumber: "",
    version: "",
    category: "",
    vendor: "",
    platform: "",
    licenseType: "",
    supportedRegions: "",
    digitalTax: "",
    pricingModel: "",
    description: "",
  });

  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setImages(previews);
  };

  useEffect(() => {
    if (editProduct) {
      setFormData({ ...formData, ...editProduct });
    } else {
      resetForm();
    }
  }, [editProduct, isOpen]);

  const resetForm = () => {
    setFormData({
      name: "",
      licenseKey: "",
      buildNumber: "",
      version: "",
      category: "",
      vendor: "",
      platform: "",
      licenseType: "",
      supportedRegions: "",
      digitalTax: "",
      pricingModel: "",
      description: "",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editProduct ? { ...editProduct, ...formData } : formData);
    resetForm();
    onClose();
  };

  const handleDiscard = () => {
    resetForm();
    onClose();
  };

  const isEditMode = !!editProduct;

  return (
    <Modal isOpen={isOpen} onClose={handleDiscard} className="max-w-5xl">
      <form onSubmit={handleSubmit}>
        <ModalHeader>
          <h2 className="text-2xl font-bold">{isEditMode ? "Edit Product" : "New Product"}</h2>
        </ModalHeader>
        <ModalBody>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <InputField label="Product Name" name="name" value={formData.name} onChange={handleChange} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="License Key / Product Code" name="licenseKey" value={formData.licenseKey} onChange={handleChange} />
                <InputField label="Activation ID / Build Number" name="buildNumber" value={formData.buildNumber} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Version" name="version" value={formData.version} onChange={handleChange} />
                <InputField label="Software Category" name="category" value={formData.category} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Developer / Vendor" name="vendor" value={formData.vendor} onChange={handleChange} />
                <InputField label="Platform / Subcategory" name="platform" value={formData.platform} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="License Type" name="licenseType" value={formData.licenseType} onChange={handleChange} />
                <InputField label="Supported Regions" name="supportedRegions" value={formData.supportedRegions} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Digital Tax / VAT" name="digitalTax" value={formData.digitalTax} onChange={handleChange} />
                <InputField label="Pricing Model" name="pricingModel" value={formData.pricingModel} onChange={handleChange} />
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="border-2 border-dashed border-gray-300 rounded-md p-2 bg-gray-100">
                <label className="block text-sm font-medium mb-2">Upload Product Images</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="mb-2"
                />
                <div className="grid grid-cols-2 gap-2">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Upload Preview ${index + 1}`}
                      className="w-full h-24 object-cover rounded"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Product Description
            </label>
            <Textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              placeholder="Enter description..."
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button type="button" variant="outline" onClick={handleDiscard}>
            Discard
          </Button>
          <Button type="submit" className="bg-black text-white hover:bg-gray-800">
            Save
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
}

function InputField({ label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
      </label>
      <Input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={`Enter ${label.toLowerCase()}`}
      />
    </div>
  );
}
