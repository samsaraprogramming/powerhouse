import { getGoogleRating } from '../../data/googleRating';
import { llmsFullTxt } from '../../lib/llms';

export const GET = async () => new Response(llmsFullTxt(await getGoogleRating(), 'es'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
