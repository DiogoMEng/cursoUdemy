export class Database {
    private static database: Database;

    // obrigatorio
    private constructor (
        private host: string,
        private user: string,
        private password: string
    ) {}

    connect(): void {
        console.log(`Conectado: ${this.host}, ${this.user}, ${this.password}`)
    }

    // factory mathod
    static getDatabase(host: string, user: string, password: string): Database {
        if(Database.database) return Database.database;
        Database.database = new Database(host, user, password);
        return Database.database;
    }
}

const db1 = Database.getDatabase('localhost', 'root', '12345');
db1.connect();

const db2 = Database.getDatabase('localhost', 'finances', '12345');
db2.connect();
