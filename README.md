# About Eport
Production site: [eport.site](https://eport.site) (code on `main` branch)\
Development site: [eport-dev.vercel.app](https://eport-dev.vercel.app/) (code on `dev` branch)

**Eport** is an easy website builder for job seekers who need to build a website as quickly and easily as possible to show their works and information. Eport can be seen as an advanced version of the [About Me site](https://about.me) that gives users more customization.

# Development
## Set up developement environment
To set up your development environment, run:

```
git clone https://github.com/toanhminh0412/eport.git    # Clone the repo
npm install     # Install all packages
```
After that, please ask **@toanhminh0412** for the `.env.local` file. the file should include:
```
# Firebase
NEXT_PUBLIC_FIREBASE_API_KEY=<Firebase API key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<Firebase auth domain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<Firebase project ID>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<Firebase storage bucket>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<Firebase message sender id>
NEXT_PUBLIC_FIREBASE_APP_ID=<Firebase app ID>

# App settings
NEXT_PUBLIC_APP_DOMAIN=http://localhost:3000

# React secure storage
NEXT_PUBLIC_SECURE_LOCAL_STORAGE_HASH_KEY=<Any string length 9>
NEXT_PUBLIC_SECURE_LOCAL_STORAGE_PREFIX=<Any string length 7>

# TinyMCE editor
NEXT_PUBLIC_TINY_MCE_API_KEY=<Text editor Tiny MCE API key>
```
Paste the `.env.local` file in the root directory and run:
```
npm run dev     # Start up the development server
```

Your development server should now be available at `http://localhost:3000`

## Contribute
To contribute:

1. Select an issue from the [issue list](https://github.com/toanhminh0412/eport/issues) and put on an **in progress** tag.
2. Run:
```
git checkout -b issue-[issue number]        # Create a new branch 'issue-[issue number]'

# Do your dev work here

git push origin issue-[issue number]        # Push to 'issue-[issue number]' branch
```

Please **DO NOT** push code to `main`. When you think your code is ready, feel free to create a Pull Request to the `dev` branch and set **toanhminh0412** as a reviewer.