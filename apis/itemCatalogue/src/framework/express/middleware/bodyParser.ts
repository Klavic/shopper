import { json, OptionsUrlencoded, urlencoded } from 'body-parser';

export const bodyParserJson = () => {
    return json({ limit: '5mb' });
};

export const bodyParserUrlencoded = () => {
    const options: OptionsUrlencoded = {
        extended: true,
    };
    return urlencoded(options);
};
