import { Modal, ModalHeader, ModalBody, ModalFooter } from "./ui/modal";
import { Button } from "./ui/button";
import Img1 from "../assets/img1.jpg";
import Img2 from "../assets/img2.jpg";
import Img3 from "../assets/img3.jpg";
import Img4 from "../assets/img4.jpg";

export default function ProductDetailsModal({ isOpen, onClose, product, onEdit }) {
    if (!product) return null;

    const productDetails = [
        { label: "License Key / Product Code", value: product.licenseKey || "ABC123-XYZ" },
        { label: "Activation ID / Build Number", value: product.buildNumber || "Build-001" },
        { label: "Version", value: product.version || "v1.0.0" },
        { label: "Software Category", value: product.category || "Productivity" },
        { label: "Developer / Vendor", value: product.vendor || "Company Name" },
        { label: "Platform / Subcategory", value: product.platform || "Web App" },
        { label: "License Type", value: product.licenseType || "Subscription" },
        { label: "Supported Regions", value: product.supportedRegions || "Global" },
        { label: "Digital Tax / VAT", value: product.digitalTax || "15%" },
        { label: "Pricing Model", value: product.pricingModel || "Monthly - Tax Inclusive" },
    ];

    const description =
        product.description ||
        "This software product streamlines workflows and improves productivity. Features include seamless integration, intuitive UI, and regular updates to ensure compatibility and security.";

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-4xl">
            <ModalHeader>
                <div className="text-center">
                    {/* Product Image */}
                    <div className="md:col-span-1">
                        <div className="grid grid-cols-4 gap-4">
                            {[Img1, Img2, Img3, Img4].map((imgSrc, index) => (
                                <img
                                    key={index}
                                    src={imgSrc}
                                    alt={`Product Image ${index + 1}`}
                                    className="w-60 h-40 object-cover rounded-lg shadow-sm"
                                />
                            ))}
                        </div>
                    </div>

                    {/* Product Title */}
                    <h2 className="text-2xl font-bold">{product.name}</h2>
                </div>
            </ModalHeader>

            <ModalBody>
                {/* Product Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-6">
                    {productDetails.map((detail, index) => (
                        <div key={index} className="flex items-center">
                            <span className="font-medium text-gray-700 w-48 flex-shrink-0">{detail.label}</span>
                            <span className="mx-3">-</span>
                            <span className="text-gray-900">{detail.value}</span>
                        </div>
                    ))}
                </div>

                {/* Description */}
                <div className="mt-6">
                    <p className="text-gray-700 leading-relaxed text-justify">{description}</p>
                </div>
            </ModalBody>

            <ModalFooter>
                <Button variant="outline" onClick={onClose}>
                    Discard
                </Button>
                <Button
                    className="bg-black text-white hover:bg-gray-800"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        if (onEdit) onEdit();
                    }}
                >
                    Edit
                </Button>
            </ModalFooter>
        </Modal>
    );
}
