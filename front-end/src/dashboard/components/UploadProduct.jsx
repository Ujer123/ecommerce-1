import { useState } from 'react';

export default function UploadProduct() {
    const [formData, setFormData] = useState({
        name: '', title: '', size: '', price: '', discount: '',
        description: '', color: '', material: '', application: '',
        gender: '', season: '', pattern: '', occasion: '',
        type: '', businesstype: '', images: [], hoverimage: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData({ ...formData, images: files });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const fields = [
        'Product name', 'title', 'description', 'material',
        'application', 'pattern', 'occasion', 'businesstype'
    ];

    const dropdowns = ['size', 'color', 'gender', 'season', 'type'];

    return (
        <div className="min-h-screen bg-gray-800 p-8">
            <div className="max-w-full mx-auto p-8 rounded-2xl shadow-2xl bg-gray-50">
                <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Add Product Details</h1>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                    {fields.map((field) => (
                        <div key={field} className="flex flex-col">
                            <label className="text-base font-medium text-gray-700 capitalize">{field}</label>
                            <input
                                type="text"
                                name={field}
                                onChange={handleChange}
                                placeholder={`Enter ${field}`}
                                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                    ))}

                    {dropdowns.map((field) => (
                        <div key={field} className="flex flex-col">
                            <label className="text-base font-medium text-gray-700 capitalize">{field}</label>
                            <select name={field} onChange={handleChange} className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-300">
                                <option value="">Select {field}</option>
                                <option value="Option 1">Option 1</option>
                                <option value="Option 2">Option 2</option>
                            </select>
                        </div>
                    ))}

                    <label className="col-span-2 font-semibold">Upload Images:
                        <input type="file" multiple accept="image/*" onChange={handleImageChange} className="mt-2 p-3 border rounded-xl w-full" />
                    </label>

                    <label className="col-span-2 font-semibold">Upload Hover Image:
                        <input type="file" accept="image/*" name="hoverimage" onChange={handleChange} className="mt-2 p-3 border rounded-xl w-full" />
                    </label>

                    <button type="submit" className="col-span-2 py-3 mt-4 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all">
                        Submit Product
                    </button>
                </form>
            </div>
        </div>
    );
}
