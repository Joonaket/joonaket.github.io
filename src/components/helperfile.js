import mammoth from 'mammoth';

export const readWordFile = async (filePath) => {
    try {
        const response = await fetch(filePath);
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.convertToHtml({ arrayBuffer });
        return result.value; // The HTML content
    } catch (error) {
        console.error('Error reading Word file:', error);
        return '';
    }
};