import axios from 'axios';
import configuration from './configuration.json';

const { key, domain} = configuration;

export const instance = axios.create({
    baseURL: domain,
    headers: {
       Authorization: key
    }
})