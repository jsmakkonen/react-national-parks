import parks from './parks.json';

export default class ParksService {
    static getParks() {
        return parks ? parks : [];
    }
}