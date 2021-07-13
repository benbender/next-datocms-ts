//@ts-check

/**
 * https://github.com/iamvishnusankar/next-sitemap/blob/f2f1cacd6a9b1ea57e863031e70c530224ec7ba1/packages/next-sitemap/src/interface.ts#L12-L27
 *
 * @type {import("next-sitemap").IConfig}
 */
module.exports = {
  siteUrl: "https://" + process.env.VERCEL_URL,
};
