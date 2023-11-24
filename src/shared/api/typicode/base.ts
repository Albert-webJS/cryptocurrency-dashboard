import axios from 'axios';
import configuration from './configuration.json';

export const domain = configuration.domain
export const key = configuration.key
export const srcImage = configuration.srcImage

export const instance = axios.create({
    baseURL: domain,
    headers: {
       Authorization: key
    }
})