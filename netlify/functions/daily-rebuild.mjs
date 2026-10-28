// Triggers a production build once a day so the Google rating and review count stay current.
// BUILD_HOOK_URL comes from Project configuration > Build & deploy > Build hooks.
export default async () => {
  const hook = process.env.BUILD_HOOK_URL;
  if (!hook) {
    console.log('BUILD_HOOK_URL is not set; skipping rebuild');
    return;
  }

  const response = await fetch(hook, { method: 'POST' });
  console.log(`Build hook responded ${response.status}`);
};

export const config = { schedule: '@daily' };
