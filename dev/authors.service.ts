
import {iAuthorsService} from './authors.interface';

export class AuthorsService implements iAuthorsService {
    getAuthors(): string[] {
        return ['A1', 'A2', 'A3'];
    }
}