import { llmsFullTxt } from '../../lib/llms';

export const GET = () => new Response(llmsFullTxt('es'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
