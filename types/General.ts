export interface Transaction {
    id: number;
    customerName: string;
    items: Item[];
    status: Status;
    issueDate: string;
    paymentDate: string;
    dueDate: string;
}

export type Status = 'paid' | 'unpaid';

export interface Item {
    description: string;
    quantity: number;
    price: Price;
}

export type Currency = 'EUR' | 'USD' | 'MDL' | 'RON';

export type Price = Record<Currency, number>;

export interface Option<T> {
    label: string;
    value: T;
}

export type Invoice = Transaction;
export type Payment = Transaction;
