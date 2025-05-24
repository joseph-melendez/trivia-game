import packageJson from '../../package.json';

export const GetFullPath = (path: string): string => {
    return `/${packageJson.name}${path}`;
}