import { promises as fs } from 'fs'
import path from 'path'
export async function GET(){
    try {

        const filepath = path.join(process.cwd(), 'utils', 'data');
        const data = await fs.readFile(path.join(filepath, 'questions.json'), 'utf-8');
        const parsedData = JSON.parse(data)

        return new Response(JSON.stringify(parsedData));
        } catch (error) {
          console.error('Error reading questions:', error);
          return new Response(JSON.stringify({ error: 'Internal Server Error' }));
        }
    
}