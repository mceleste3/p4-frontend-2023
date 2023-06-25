interface Comic {
    description: string;
    id: number;
    isbn: string;
    pageCount: number;
    path: string;
    extension: string;
    title: string;
    creators: Array<Creators>;
}

interface Creators {
    resourceURI: string;
    role: string;
    name: string;
}

export default Comic;