import type { Invoice } from '~/types/General';

export const invoices: Invoice[] = [
    {
        id: 1,
        customerName: 'John Doe',
        items: [
            {
                description: 'Web Development Services',
                quantity: 2,
                price: { EUR: 500, USD: 550, MDL: 9600, RON: 2450 },
            },
            {
                description: 'Hosting',
                quantity: 1,
                price: { EUR: 100, USD: 110, MDL: 1920, RON: 490 },
            },
        ],
        status: 'paid',
        issueDate: '2024-10-01',
        paymentDate: '2024-10-05',
        dueDate: '2024-10-15',
    },
    {
        id: 2,
        customerName: 'Acme Corp.',
        items: [
            {
                description: 'Consulting Services',
                quantity: 5,
                price: { EUR: 200, USD: 220, MDL: 3840, RON: 980 },
            },
            {
                description: 'Maintenance',
                quantity: 3,
                price: { EUR: 150, USD: 165, MDL: 2880, RON: 735 },
            },
        ],
        status: 'unpaid',
        issueDate: '2024-09-15',
        paymentDate: '',
        dueDate: '2024-10-15',
    },
    {
        id: 3,
        customerName: 'Mega Industries',
        items: [
            {
                description: 'Software License',
                quantity: 10,
                price: { EUR: 50, USD: 55, MDL: 960, RON: 245 },
            },
        ],
        status: 'paid',
        issueDate: '2024-08-10',
        paymentDate: '2024-08-15',
        dueDate: '2024-08-20',
    },
    {
        id: 4,
        customerName: 'Global Solutions',
        items: [
            {
                description: 'Design Consultation',
                quantity: 3,
                price: { EUR: 300, USD: 330, MDL: 5760, RON: 1470 },
            },
            {
                description: 'Logo Design',
                quantity: 1,
                price: { EUR: 400, USD: 440, MDL: 7680, RON: 1960 },
            },
        ],
        status: 'unpaid',
        issueDate: '2024-07-01',
        paymentDate: '',
        dueDate: '2024-07-15',
    },
    {
        id: 5,
        customerName: 'Tech Innovators',
        items: [
            {
                description: 'App Development',
                quantity: 4,
                price: { EUR: 750, USD: 825, MDL: 14400, RON: 3675 },
            },
        ],
        status: 'paid',
        issueDate: '2024-06-20',
        paymentDate: '2024-06-25',
        dueDate: '2024-07-05',
    },
    {
        id: 6,
        customerName: 'Bright Media',
        items: [
            {
                description: 'Social Media Management',
                quantity: 1,
                price: { EUR: 250, USD: 275, MDL: 4800, RON: 1225 },
            },
            {
                description: 'SEO Services',
                quantity: 2,
                price: { EUR: 180, USD: 198, MDL: 3456, RON: 882 },
            },
        ],
        status: 'unpaid',
        issueDate: '2024-05-10',
        paymentDate: '',
        dueDate: '2024-05-25',
    },
    {
        id: 7,
        customerName: 'NextGen AI',
        items: [
            {
                description: 'Machine Learning Model',
                quantity: 3,
                price: { EUR: 1000, USD: 1100, MDL: 19200, RON: 4900 },
            },
        ],
        status: 'paid',
        issueDate: '2024-04-05',
        paymentDate: '2024-04-10',
        dueDate: '2024-04-20',
    },
    {
        id: 8,
        customerName: 'Eco Solutions',
        items: [
            {
                description: 'Energy Audit',
                quantity: 1,
                price: { EUR: 300, USD: 330, MDL: 5760, RON: 1470 },
            },
            {
                description: 'Solar Panel Installation',
                quantity: 2,
                price: { EUR: 1200, USD: 1320, MDL: 23040, RON: 5880 },
            },
        ],
        status: 'unpaid',
        issueDate: '2024-03-15',
        paymentDate: '',
        dueDate: '2024-03-30',
    },
    {
        id: 9,
        customerName: 'Smart Homes Inc.',
        items: [
            {
                description: 'Smart Home Setup',
                quantity: 2,
                price: { EUR: 1500, USD: 1650, MDL: 28800, RON: 7350 },
            },
        ],
        status: 'paid',
        issueDate: '2024-02-01',
        paymentDate: '2024-02-05',
        dueDate: '2024-02-15',
    },
    {
        id: 10,
        customerName: 'Global Logistics',
        items: [
            {
                description: 'Logistics Consulting',
                quantity: 5,
                price: { EUR: 200, USD: 220, MDL: 3840, RON: 980 },
            },
            {
                description: 'Fleet Management Software',
                quantity: 3,
                price: { EUR: 800, USD: 880, MDL: 15360, RON: 3920 },
            },
        ],
        status: 'unpaid',
        issueDate: '2024-01-10',
        paymentDate: '',
        dueDate: '2024-01-25',
    },
];
