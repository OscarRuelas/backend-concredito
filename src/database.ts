import { createPool } from 'mysql2/promise';

export async function connect(){

    const connection = await createPool({
          host: 'localhost',
          user: 'root',
          password: 'oscar123',
          database: 'bd_concredito',
          connectionLimit: 10
    });
    return connection;
}