import db from '../db';
import path from 'path';
import { readdirSync } from 'fs';

export default async () => {
    try {
        const pathMigrations = path.resolve(__dirname, '../migrations');
        const arquivosMigration = readdirSync(pathMigrations).filter((file) => {
            return (/\.ts$/.test(file)) || (/\.js$/.test(file));
        });

        const versoes = arquivosMigration.map(pFile => Number(pFile.split('.')[0])).sort();
        const versoesDb = await db.models.versao.findAll({ order: [['versao', 'DESC']] });
        const versoesLimpasDb = versoesDb.map((pVer) => {
            return pVer.versao;
        });

        for (let i = 0; i < versoes.length; i += 1) {
            const versaoArquivo = versoes[i];
            if (versoesLimpasDb.includes(versaoArquivo) === true) {
                continue;
            }

            const arquivoImportar = path.resolve(pathMigrations, versaoArquivo.toString());
            const migracao = require(arquivoImportar);
            await migracao.default(db);

            const versaoNovaDb = await db.models.versao.create({ versao: versaoArquivo });
            versoesLimpasDb.push(versaoNovaDb.versao);
        }
        return Promise.resolve();
    } catch (error) {
        return Promise.reject(error);
    }
};
