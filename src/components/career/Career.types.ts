export interface CareerDetail {
    title: string;
    period: string;
}

export interface CareerData {
    logo: string;
    company: string;
    period: string;
    description: string;
    tags: string[];
    details: CareerDetail[];
}

export interface CareerPresenterProps {
    careers: CareerData[];
}
