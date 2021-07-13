# A Blog example using Next.js and DatoCMS with Typescript and full typings

This example showcases a Next.js Blog using [DatoCMS](https://www.datocms.com/) as the data source. It fully supports [Preview Mode](https://www.datocms.com/docs/next-js/setting-up-next-js-preview-mode) with [DatoCMS real-time updates](https://www.datocms.com/docs/next-js/real-time-updates).

Additionally it has GraphQL-Codegen, Typescript and perfect typings and some other goodies!

The purpose of this repo is to have a quick start reference that can be set up with the "one-click" button below.

## Demo

Have a look at the end result live:

### [https://next-datocms-ts.vercel.app/](https://next-datocms-ts.vercel.app/)

## How to use

### Quick start

1. [Create an account on DatoCMS](https://datocms.com).

2. Make sure that you have set up the [Github integration on Vercel](https://vercel.com/docs/git/vercel-for-github).

3. Let DatoCMS set everything up for you clicking this button:

[![Deploy with DatoCMS](https://dashboard.datocms.com/deploy/button.svg)](https://dashboard.datocms.com/deploy?repo=benbender/next-datocms-ts)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fbenbender%2Fnext-datocms-ts&env=NEXT_CMS_DATOCMS_API_TOKEN&envDescription=NEXT_CMS_DATOCMS_API_TOKEN&envLink=https%3A%2F%2Fwww.datocms.com%2Fdocs%2Fcontent-management-api%2Fsetting-the-environment)

### Local setup

Once the setup of the project and repo is done, clone the repo locally.

#### Set up environment variables

In your DatoCMS' project, go to the **Settings** menu at the top and click **API tokens**.

Then click **Read-only API token** and copy the token.

Next, copy the `.env.example` file in this directory to `.env` (which will be ignored by Git):

```bash
cp .env.example .env
```

Then set each variable on `.env`:

- `NEXT_CMS_DATOCMS_API_TOKEN` should be the API token you just copied.
- `NEXT_CMS_DATOCMS_PREVIEW_SECRET` can be any random string (but avoid spaces), like `MY_SECRET` - this is used for the Preview Mode](https://www.datocms.com/docs/next-js/setting-up-next-js-preview-mode).

Your `.env` file should look like this:

```bash
NEXT_CMS_DATOCMS_API_TOKEN=...
NEXT_CMS_DATOCMS_PREVIEW_SECRET=...
```

#### Run your project locally

```bash
npm install
npm run dev
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)!

#### Try preview mode

On DatoCMS, go to one of the posts you've created and:

- **Update the title**. For example, you can add `[Draft]` in front of the title.
- Click **Save**, but **DO NOT** click **Publish**. By doing this, the post will be in the draft state.

(If it doesn't become draft, you need to go to the model settings for `Post`, go to **Additional Settings**, and turn on **Enable draft/published system**.)

Now, if you go to the post page on localhost, you won't see the updated title. However, if you use the **Preview Mode**, you'll be able to see the change ([Documentation](https://www.datocms.com/docs/next-js/setting-up-next-js-preview-mode)).

To enable the Preview Mode, go to this URL:

```
http://localhost:3000/api/preview?secret=<secret>
```

- `<secret>` should be the string you entered for `NEXT_CMS_DATOCMS_PREVIEW_SECRET`.
- `<slug>` should be the post's `slug` attribute (you can check on DatoCMS).

You should now be able to see the updated title. To exit the preview mode, you can click **Click here to exit preview mode** at the top.
