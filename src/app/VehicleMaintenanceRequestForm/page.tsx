import React from 'react';

const VehicleMaintenanceRequestForm = () => {
    return (
        <form className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">رقم الطلب:</label>
                    <input
                        type="text"
                        className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">عنوان الطلب:</label>
                    <input
                        type="text"
                        className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">نوع المركبة:</label>
                    <select
                        className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
                    >
                        <option value="vehicle_type_1">نوع المركبة 1</option>
                        <option value="vehicle_type_2">نوع المركبة 2</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">وصف العطل:</label>
                    <textarea
                        className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
                        rows={4}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">رقم اللوحة:</label>
                    <input
                        type="text"
                        className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-gray-700 font-medium mb-1">ملاحظات:</label>
                    <textarea
                        className="mt-1 block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
                        rows={4}
                    />
                </div>
            </div>
            <div className="flex justify-between">
                <button
                    type="submit"
                    className="px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 text-base"
                >
                    تأكيد
                </button>
                <button
                    type="button"
                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 text-base"
                >
                    إلغاء
                </button>
            </div>
        </form>
    );
}

export default VehicleMaintenanceRequestForm;
