# Firebase Setup Instructions

## Getting Your Firebase Credentials

1. Go to your [Firebase Console](https://console.firebase.google.com/project/upstate-pinoy)
2. Click on the **gear icon** ⚙️ next to "Project Overview"
3. Select **Project settings**
4. Scroll down to **Your apps** section
5. If you don't have a web app yet, click **Add app** and select the web icon `</>`
6. Copy the Firebase configuration object

## Configuring the Environment Files

Replace the placeholder values in these files with your actual Firebase credentials:

### `src/environments/environment.ts` (Development)
### `src/environments/environment.prod.ts` (Production)

Update these fields:
- `apiKey` - Your Firebase API key
- `messagingSenderId` - Your messaging sender ID
- `appId` - Your Firebase app ID

The `projectId`, `authDomain`, and `storageBucket` are already configured based on your project.

## Example Configuration

```typescript
export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyB...',  // Replace with your actual API key
    authDomain: 'upstate-pinoy.firebaseapp.com',
    projectId: 'upstate-pinoy',
    storageBucket: 'upstate-pinoy.firebasestorage.app',
    messagingSenderId: '123456789012',  // Replace with your actual sender ID
    appId: '1:123456789012:web:abcdef123456'  // Replace with your actual app ID
  }
};
```

## Firestore Collection Structure

Your events should be stored in the `events` collection with the following fields:

- `title` (string) - Event title
- `description` (string) - Event description
- `date` (timestamp) - Event date
- `time` (string) - Event time (e.g., "2:00 PM")
- `location` (string) - Event location
- `tags` (array of strings) - Event tags (e.g., ["Cultural", "Food"])

## Security Note

⚠️ The environment files are added to `.gitignore` to prevent accidentally committing your Firebase credentials to version control.
