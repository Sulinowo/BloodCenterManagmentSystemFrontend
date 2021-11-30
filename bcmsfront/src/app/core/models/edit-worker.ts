export interface WorkerAccount {
    id: number;
    email: string;
    firstname: string;
    surname: string;
    role: string;
}

export interface EditWorker {
    id?: number;
    password?: string;
    email?: string;
    surname?: string;
}