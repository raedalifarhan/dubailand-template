type OrderCategory = {
    id: number;
    name: string;
    description: string;
};

type Order = {
    id: number;
    category: OrderCategory;
    amount: number;
    date: string;
    customerName: string;
};
