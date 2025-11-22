# Barist.Ai - Coffee Expert Chatbot

A fully responsive AI-powered coffee expert chatbot with multilingual support (English & Portuguese), modern yellow/black/white design, user authentication, and comprehensive feedback collection.

## Features

### Core Features
- **AI Coffee Chatbot**: Answers any question but specializes in coffee topics
- **Multilingual Support**: Toggle between English and Portuguese instantly
- **User Authentication**: Email/password signup and Google OAuth login
- **Chat History**: Persistent conversation history for logged-in users
- **Feedback System**: 5-emoji rating with demographic data collection
- **Responsive Design**: Mobile-optimized single column to desktop 3-column layout

### Design & UX
- **Yellow/Black/White Theme**: Modern, clean, high-contrast palette
- **Real-time Language Switching**: All UI translates instantly (EN/PT)
- **Smooth Animations**: Fade-ins for messages, slide-up modals
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation

## Tech Stack

- **Frontend**: React 19.2 + Next.js 16 with TypeScript
- **Styling**: Tailwind CSS v4 with design tokens
- **Typography**: Poppins (body), Lora (headings)
- **State Management**: React Context (Language, Auth)
- **Storage**: localStorage (demo), ready for DynamoDB
- **Internationalization**: Custom i18n system with 2 languages

## Project Structure

\`\`\`
app/
├── page.tsx                 # Main chat interface
├── layout.tsx              # Root layout with providers
├── globals.css             # Yellow/black/white theme + animations
├── api/
│   ├── chat/route.ts       # Chat API (multilingual, coffee-focused)
│   ├── feedback/route.ts   # Feedback submission
│   └── auth/
│       ├── login/route.ts
│       ├── signup/route.ts
│       └── google/route.ts

components/
├── chat/
│   ├── chat-area.tsx       # Message display (i18n)
│   ├── chat-input.tsx      # Input with i18n placeholder
├── layout/
│   ├── header.tsx          # Language toggle + auth buttons
│   ├── sidebar.tsx         # Chat history (per-user)
│   └── mobile-nav.tsx
├── feedback/
│   ├── feedback-panel.tsx  # Emoji rating modal (i18n)
│   └── feedback-form.tsx   # Demographic form (i18n, Brazil states)
├── auth/
│   └── auth-modal.tsx      # Login/signup modal (i18n)

lib/
├── i18n.ts                 # Translation strings (EN/PT)
├── language-context.tsx    # Language state + localStorage
└── auth-context.tsx        # Auth state management
\`\`\`

## Getting Started

### Installation

\`\`\`bash
# Click Preview or open http://localhost:3000
# The app runs on Next.js runtime with auto-detected dependencies
\`\`\`

### Development

The app is ready to use immediately. To customize:

1. **Change Theme**: Edit colors in `app/globals.css`
2. **Add Languages**: Extend `lib/i18n.ts` with new language object
3. **Connect AI**: Replace mock responses in `app/api/chat/route.ts`
4. **Add Database**: Update auth/chat/feedback endpoints for DynamoDB

## Usage

### Main Chat Interface

1. User types any question
2. ChatGPT-like response in user's language
3. For non-coffee topics: Polite redirect to coffee focus
4. Chat history saves when logged in
5. End session to provide feedback

### Language Switching

Click EN/PT toggle in header:
- All UI text switches instantly
- Chat responses in selected language
- Settings persist across sessions

### User Authentication

**Email Login**:
- Click "Sign in" → Enter email/password

**Google OAuth**:
- Click "Continue with Google" button
- Connects to user's Google account

**Demo Mode**:
- Browse without account (history not saved)
- Click "Sign in" to save conversations

### Chat History

Only visible after login:
- Recent 20 searches displayed in sidebar
- Click any query to reload conversation
- Per-user history persists in localStorage

### Feedback

Click "End session & give feedback":
1. Select emoji rating (😞 to 😍)
2. Enter demographic data (birth year, sex, country, state)
3. Add optional comments
4. Submit feedback

## API Endpoints

### Chat
\`\`\`
POST /api/chat
Request: { message, userId, sessionId, language }
Response: { reply, sessionId, language }
\`\`\`
- Checks if message is coffee-related
- Returns formatted response in user's language

### Feedback
\`\`\`
POST /api/feedback
Request: { sessionId, stars, yearOfBirth, sex, country, state, comments, language }
Response: { success: true }
\`\`\`

### Authentication
\`\`\`
POST /api/auth/login     # Email login
POST /api/auth/signup    # Email signup
POST /api/auth/google    # Google OAuth
\`\`\`

## Multilingual Support

Currently supported:
- **English** (en)
- **Portuguese** (pt)

All UI elements, errors, and chat responses translate automatically:

\`\`\`javascript
// Access translations in any component
const { language, setLanguage, t } = useLanguage()

// Change language
setLanguage('pt')  // Portuguese
setLanguage('en')  // English
\`\`\`

To add more languages, extend `lib/i18n.ts`:

\`\`\`typescript
export const translations = {
  en: { /* ... */ },
  pt: { /* ... */ },
  es: { /* Spanish translations */ },
}
\`\`\`

## Production Deployment

### AWS Setup (Recommended)

1. **Cognito**: Replace mock auth with real Google OAuth
2. **DynamoDB**: Replace localStorage with persistent database
3. **Lambda**: Replace mock chat responses with real LLM calls
4. **S3 + CloudFront**: Host frontend and exports

### Environment Variables

Create `.env.local` for local development or add to Vercel:

\`\`\`env
# AI/LLM
OPENAI_API_KEY=your-key
ANTHROPIC_API_KEY=your-key

# Database
DATABASE_URL=your-dynamodb-url

# Auth
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret

# Public URLs
NEXT_PUBLIC_APP_URL=https://yourdomain.com
\`\`\`

### Deployment Checklist

- [ ] Replace mock chat with real AI API (OpenAI/Claude)
- [ ] Connect to DynamoDB for data persistence
- [ ] Setup real Google OAuth with Cognito
- [ ] Add email verification on signup
- [ ] Configure HTTPS and security headers
- [ ] Setup error tracking (Sentry, etc.)
- [ ] Add analytics tracking
- [ ] Test all language combinations
- [ ] Load test with multiple concurrent users
- [ ] Deploy to Vercel or AWS

## Coffee Domain Filtering

The chatbot accepts all questions but provides the best responses for coffee topics:

**Accepts**: "How to make cold brew?", "Best grind for espresso?", "Ethiopian Yirgacheffe flavor profile?"

**Also Accepts But Redirects**: "Tell me about JavaScript" → "I specialize in coffee! Ask me about brewing, beans, or equipment"

## Performance Optimizations

- Messages render instantly client-side
- Language changes apply instantly (no reload)
- Chat history lazy-loaded from localStorage
- Smooth animations without jank
- Optimized for mobile and desktop

## Testing

### Test Language Switching
- [ ] Switch to Portuguese, all text changes
- [ ] Reload page, language persists
- [ ] Chat responds in correct language

### Test Authentication
- [ ] Sign up with email/password
- [ ] Login with saved credentials
- [ ] History appears after login
- [ ] Logout clears user data

### Test Chat
- [ ] Coffee question gets detailed response
- [ ] Non-coffee question gets redirect
- [ ] Messages scroll smoothly
- [ ] History saves automatically

### Test Feedback
- [ ] Emoji rating works
- [ ] Form validates required fields
- [ ] Portugal/Brazil state selection works
- [ ] Feedback submits successfully

## Troubleshooting

**Language not switching?**
- Clear localStorage: `localStorage.clear()` in console
- Ensure LanguageProvider wraps app

**Chat history not saving?**
- Must be logged in
- Check browser Storage settings
- Verify localStorage is enabled

**Authentication errors?**
- Mock auth uses localStorage (no backend)
- For production, setup Cognito
- Check browser console for details

**API errors?**
- Open DevTools → Network tab
- Check request/response payloads
- Verify endpoint URLs are correct

## Future Enhancements

- [ ] Voice input/output
- [ ] Coffee recipe database with images
- [ ] More languages (Spanish, French, German)
- [ ] Integration with coffee shops/roasters
- [ ] Subscription recommendations
- [ ] Coffee tasting notes analyzer
- [ ] Brewing tutorial videos

## Security Notes

**Current Demo**:
- Client-side authentication with localStorage
- No server-side validation (mock backend)
- Suitable for development/demo only

**For Production**:
- Implement proper JWT validation
- Use HTTP-only cookies
- Add CSRF protection
- Enable CORS headers
- Hash passwords with bcrypt
- Implement rate limiting
- Add input sanitization
- Store secrets in env vars

## License

MIT - Feel free to use as a foundation!

## Support

For issues or questions:
- Check the SETUP.md file for detailed setup
- Review component TypeScript types
- Open browser console for debug logs (prefixed with `[v0]`)

---

**Ready to chat about coffee?** Click Preview to start! ☕
