// Write a function that reads data from multiple sources (files, APIs) and merges them into a single JSON object.

import { readFile } from 'fs/promises';
import fetch from 'node-fetch';

async function mergeDataFromSources(filePaths, apiUrls) {
    try {
        let data = {};

        const filePromises = filePaths.map(async (filePath) => {
            const fileContent = await readFile(filePath, 'utf-8');
            data[filePath] = fileContent;
        });

        const apiPromises = apiUrls.map(async (apiUrl) => {
            const response = await fetch(apiUrl);
            const jsonData = await response.json();
            data[apiUrl] = jsonData;
        });

        await Promise.all([...filePromises, ...apiPromises]);

        return data;
    } catch (error) {
        console.error('Error merging data:', error);
        throw error;
    }
}

const filePaths = ['data1.txt', 'data2.txt']; 
const apiUrls = ['https://dogapi.dog/api/v2/breeds']; 

mergeDataFromSources(filePaths, apiUrls)
    .then(mergedData => {
        console.log('Merged Data:', mergedData);
    })
    .catch(error => {
        console.error('Error:', error);
    });