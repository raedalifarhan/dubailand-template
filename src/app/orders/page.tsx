"use client"
import { useState, useEffect } from "react";

interface OrderCategory {
  id: number;
  name: string;
  description: string;
}

interface Order {
  id: number;
  category: OrderCategory;
  amount: number;
  date: string;
  customerName: string;
}

export default function OrdersPage() {
  const orderCategories: OrderCategory[] = [
    {
      id: 1,
      name: "إلكترونيات",
      description: "أجهزة وأدوات",
    },
    {
      id: 2,
      name: "ملابس",
      description: "ملابس وإكسسوارات",
    },
    {
      id: 3,
      name: "بقالة",
      description: "طعام ومشروبات",
    },
  ];

  const orders: Order[] = [
    {
      id: 1,
      category: orderCategories[0],
      amount: 299.99,
      date: "2023-05-01",
      customerName: "جون دو",
    },
    {
      id: 2,
      category: orderCategories[1],
      amount: 79.99,
      date: "2023-05-02",
      customerName: "جين سميث",
    },
    {
      id: 3,
      category: orderCategories[2],
      amount: 45.5,
      date: "2023-05-03",
      customerName: "أليس جونسون",
    },
    {
      id: 4,
      category: orderCategories[0],
      amount: 499.0,
      date: "2023-05-04",
      customerName: "بوب براون",
    },
    {
      id: 5,
      category: orderCategories[1],
      amount: 120.0,
      date: "2023-05-05",
      customerName: "تشارلي غرين",
    },
    {
      id: 6,
      category: orderCategories[0],
      amount: 299.99,
      date: "2023-05-01",
      customerName: "جون دو",
    },
    {
      id: 7,
      category: orderCategories[1],
      amount: 79.99,
      date: "2023-05-02",
      customerName: "جين سميث",
    },
    {
      id: 8,
      category: orderCategories[2],
      amount: 45.5,
      date: "2023-05-03",
      customerName: "أليس جونسون",
    },
    {
      id: 9,
      category: orderCategories[0],
      amount: 499.0,
      date: "2023-05-04",
      customerName: "بوب براون",
    },
    {
      id: 10,
      category: orderCategories[1],
      amount: 120.0,
      date: "2023-05-05",
      customerName: "تشارلي غرين",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState<OrderCategory | null>(null);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);

  const handleCategoryClick = (category: OrderCategory) => {
    setSelectedCategory(category);
    setFilteredOrders(orders.filter((order) => order.category.id === category.id));
  };

  return (
    <div className="grid gap-5 grid-cols-12 text-base">
      <div className="col-span-12 md:col-span-3 break-words py-3 rounded-md">
        <div className="flex flex-col gap-2">
          {orderCategories.map((category) => (
            <a
              key={category.id}
              className={`hover:bg-slate-200 rounded-md p-5 cursor-pointer ${selectedCategory?.id === category.id ? "bg-slate-300" : ""
                }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
      <div className="col-span-12 md:col-span-9 break-words grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-base">
        {filteredOrders && filteredOrders.map((order) => (
          <a
            key={order.id}
            href="#"
            className="m-3 group grid max-w-xs rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-slate-200 hover:ring-sky-500"
          >
            <div className="flex items-center space-x-3">
              <svg
                className="h-6 w-6 stroke-sky-500 group-hover:stroke-white"
                fill="none"
                viewBox="0 0 24 24"
              ></svg>
              <h3 className="text-slate-900 text-sm font-semibold">
                {order.customerName}
              </h3>
            </div>
            <p className="text-slate-500 text-sm">{order.category.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
