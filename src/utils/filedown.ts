import { setting } from 'src/constants/setting';

export const fileDownload = (filename: string) => {
    window.open(`${setting.baseUrl}list/file/download?fileName=${filename}`)
};


