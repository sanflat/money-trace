export type Expense = {
    id: number;
    settingId: number;
    amount: number;
    createdDate: string;
    updatedDate: string;
    expenseSetting: {
        settingId: number;
        categoryName: string;
        createdDate: string;
        updatedDate: string;        
    }
};