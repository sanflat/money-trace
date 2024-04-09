export type Income = {
    id: number;
    settingId: number;
    amount: number;
    createdDate: string;
    updatedDate: string;
    incomeSetting: {
        settingId: number;
        categoryName: string;
        createdDate: string;
        updatedDate: string;
    }
};