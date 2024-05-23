const Form = () => {
    return (
      <form className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-1">نص عادي:</label>
            <input
              type="text"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">نص رقمي:</label>
            <input
              type="number"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">تاريخ:</label>
            <input
              type="date"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">البريد الإلكتروني:</label>
            <input
              type="email"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">رقم الهاتف:</label>
            <input
              type="tel"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              className="h-5 w-5 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500"
            />
            <label className="ml-2 block text-gray-700 font-medium">اختيار صحيح/خطأ:</label>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">رفع ملف:</label>
            <input
              type="file"
              className="mt-1 block w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">كلمة المرور:</label>
            <input
              type="password"
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-1">نص طويل:</label>
            <textarea
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
              rows={4}
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">اختيار من قائمة منسدلة:</label>
            <select
              className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 text-base"
            >
              <option>الخيار 1</option>
              <option>الخيار 2</option>
              <option>الخيار 3</option>
            </select>
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
  };
  
  export default Form;
  