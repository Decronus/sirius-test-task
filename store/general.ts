import type { Invoice, Payment } from '~/types/General';

interface State {
    invoices: Invoice[];
    payments: Payment[];
}

export const useGeneralStore = defineStore('generalStore', {
    state: (): State => ({
        invoices: [
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
                dueDate: '2024-12-15',
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
                paymentDate: '2024-06-30',
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
                paymentDate: '2024-04-28',
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
                status: 'unpaid',
                issueDate: '2024-02-01',
                paymentDate: '',
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
                dueDate: '2024-11-25',
            },
        ],
        payments: [
            {
                id: 1,
                customerName: 'Alice Smith',
                items: [
                    {
                        description: 'Consulting Service',
                        quantity: 3,
                        price: { EUR: 300, USD: 330, MDL: 5760, RON: 1470 },
                    },
                ],
                status: 'paid',
                issueDate: '2024-01-01',
                paymentDate: '2024-01-05',
                dueDate: '2024-01-15',
            },
            {
                id: 2,
                customerName: 'Bob Johnson',
                items: [
                    {
                        description: 'Web Development',
                        quantity: 2,
                        price: { EUR: 500, USD: 550, MDL: 9600, RON: 2450 },
                    },
                    { description: 'Hosting Service', quantity: 1, price: { EUR: 120, USD: 132, MDL: 2300, RON: 588 } },
                ],
                status: 'unpaid',
                issueDate: '2024-02-12',
                paymentDate: '',
                dueDate: '2024-03-01',
            },
            {
                id: 3,
                customerName: 'Charlie Brown',
                items: [
                    { description: 'Graphic Design', quantity: 4, price: { EUR: 150, USD: 165, MDL: 2880, RON: 735 } },
                ],
                status: 'paid',
                issueDate: '2024-03-05',
                paymentDate: '2024-03-10',
                dueDate: '2024-03-20',
            },
            {
                id: 4,
                customerName: 'Delta Corp.',
                items: [{ description: 'IT Support', quantity: 5, price: { EUR: 100, USD: 110, MDL: 1920, RON: 490 } }],
                status: 'unpaid',
                issueDate: '2024-04-10',
                paymentDate: '',
                dueDate: '2024-04-25',
            },
            {
                id: 5,
                customerName: 'Eve & Co.',
                items: [
                    {
                        description: 'Marketing Campaign',
                        quantity: 2,
                        price: { EUR: 400, USD: 440, MDL: 7680, RON: 1960 },
                    },
                    {
                        description: 'Social Media Content',
                        quantity: 1,
                        price: { EUR: 250, USD: 275, MDL: 4800, RON: 1225 },
                    },
                ],
                status: 'paid',
                issueDate: '2024-05-15',
                paymentDate: '2024-05-20',
                dueDate: '2024-06-01',
            },
            {
                id: 6,
                customerName: 'Foster LLC',
                items: [
                    { description: 'SEO Services', quantity: 3, price: { EUR: 180, USD: 198, MDL: 3456, RON: 882 } },
                ],
                status: 'unpaid',
                issueDate: '2024-06-08',
                paymentDate: '',
                dueDate: '2024-06-20',
            },
            {
                id: 7,
                customerName: 'Greenfield Inc.',
                items: [
                    { description: 'Consultation', quantity: 1, price: { EUR: 250, USD: 275, MDL: 4800, RON: 1225 } },
                    { description: 'Software License', quantity: 5, price: { EUR: 50, USD: 55, MDL: 960, RON: 245 } },
                ],
                status: 'paid',
                issueDate: '2024-07-10',
                paymentDate: '2024-07-15',
                dueDate: '2024-07-25',
            },
            {
                id: 8,
                customerName: 'Horizon Solutions',
                items: [
                    { description: 'Maintenance', quantity: 2, price: { EUR: 180, USD: 198, MDL: 3456, RON: 882 } },
                ],
                status: 'unpaid',
                issueDate: '2024-08-12',
                paymentDate: '',
                dueDate: '2024-08-30',
            },
            {
                id: 9,
                customerName: 'InnovateX',
                items: [
                    {
                        description: 'Project Management',
                        quantity: 4,
                        price: { EUR: 320, USD: 352, MDL: 6144, RON: 1568 },
                    },
                ],
                status: 'paid',
                issueDate: '2024-09-01',
                paymentDate: '2024-09-30',
                dueDate: '2024-09-20',
            },
            {
                id: 10,
                customerName: 'Jupiter Corp.',
                items: [
                    { description: 'UI/UX Design', quantity: 2, price: { EUR: 500, USD: 550, MDL: 9600, RON: 2450 } },
                ],
                status: 'unpaid',
                issueDate: '2024-10-01',
                paymentDate: '',
                dueDate: '2024-10-15',
            },
        ],
    }),
});
