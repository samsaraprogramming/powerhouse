import { getGoogleRating } from '../data/googleRating';
import { llmsTxt } from '../lib/llms';

export const GET = async () => new Response(llmsTxt(await getGoogleRating()), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
