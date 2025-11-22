# Barist.Ai - Coffee Chatbot Setup Guide

## Features Implemented

### 1. Yellow, Black & White Theme
- Modern yellow (#FFEB3B / oklch(0.83 0.17 90)) as primary color
- Clean black text on white backgrounds
- High contrast for accessibility
- Responsive light/dark mode support

### 2. Multilingual Support (English & Portuguese)
- Language toggle in header (EN/PT buttons)
- All UI text translatable
- Chatbot responses in both languages
- Feedback form fully localized
- Settings saved to localStorage

### 3. AI Coffee Chatbot
- Coffee-focused Q&A system
- Answers any question but emphasizes coffee topics
- Provides detailed brewing guides and recipes
- Supports both English and Portuguese responses
- Ready to integrate with OpenAI/Claude API

### 4. Working Authentication
- Email/Password login and signup
- Google OAuth integration (button ready)
- User profiles stored in localStorage
- Authentication state persisted across sessions
- Protected chat history per user

### 5. Functional Chat History
- Saves chat queries to localStorage (when logged in)
- Shows recent 20 searches in sidebar
- Click to reload previous questions
- History persists across sessions
- Only available for authenticated users

### 6. Complete Feedback System
- 5-emoji rating system
- Demographic collection (birth year, sex, country, state)
- Comments field
- Multilingual feedback form
- Brazil-specific state selection

## Project Structure

\`\`\`
app/
├── page.tsx                 # Main chat interface
├── layout.tsx              # Root layout with providers
├── globals.css             # Yellow/black/white theme
├── api/
│   ├── chat/route.ts       # Chat API endpoint (multilingual)
│   ├── feedback/route.ts   # Feedback submission
│   └── auth/
│       ├── login/route.ts  # Email login
│       ├── signup/route.ts # Email signup
│       └── google/route.ts # Google OAuth
components/
├── layout/
│   ├── header.tsx          # Header with language toggle
│   ├── sidebar.tsx         # Chat history sidebar
│   └── mobile-nav.tsx      # Mobile navigation
├── chat/
│   ├── chat-area.tsx       # Message display
│   └── chat-input.tsx      # Message input
├── feedback/
│   ├── feedback-panel.tsx  # Rating modal
│   └── feedback-form.tsx   # Detailed feedback form (i18n)
└── auth/
    └── auth-modal.tsx      # Login/signup modal (i18n)
lib/
├── i18n.ts                 # Translation strings
├── language-context.tsx    # Language state management
└── auth-context.tsx        # Auth state management
\`\`\`

## How to Use

### For Users

1. **Start Chatting**
   - Open the app and ask any coffee-related question
   - Try: "How do I make cold brew?"

2. **Switch Language**
   - Click EN/PT toggle in header
   - All content switches to Portuguese/English

3. **Create Account**
   - Click "Sign in" button
   - Choose email/password or Google
   - Your chat history will be saved

4. **View History**
   - Open sidebar (left panel)
   - Click previous questions to reload
   - History only shows when logged in

5. **Give Feedback**
   - Click "End session & give feedback"
   - Rate experience with emojis
   - Fill demographic info
   - Submit comments

### For Developers

#### Integration Points

1. **Replace Mock Chat Responses**
   \`\`\`typescript
   // app/api/chat/route.ts
   // Replace mock responses with real API calls to OpenAI/Claude
   const response = await openai.chat.completions.create({
     model: 'gpt-4',
     messages: [{ role: 'user', content: message }]
   })
   \`\`\`

2. **Add Database Integration**
   \`\`\`typescript
   // Replace localStorage with DynamoDB/PostgreSQL
   // Store in:
   // - Users table (auth data)
   // - Chats table (conversation history)
   // - Feedback table (user ratings)
   \`\`\`

3. **Implement Real Google OAuth**
   \`\`\`typescript
   // app/api/auth/google/route.ts
   // Integrate with AWS Cognito or Auth0
   const result = await signInWithGoogle()
   \`\`\`

4. **Add Email Verification**
   \`\`\`typescript
   // Send verification emails on signup
   // Validate email before account creation
   \`\`\`

## Environment Variables

For production deployment, add these to your `.env.local`:

\`\`\`env
# AI/LLM
OPENAI_API_KEY=your-key-here
ANTHROPIC_API_KEY=your-key-here

# Database
DATABASE_URL=your-db-url
DYNAMODB_TABLE_USERS=users
DYNAMODB_TABLE_CHATS=chats
DYNAMODB_TABLE_FEEDBACK=feedback

# Authentication
GOOGLE_CLIENT_ID=your-client-id
GOOGLE_CLIENT_SECRET=your-client-secret
JWT_SECRET=your-jwt-secret

# Public URLs
NEXT_PUBLIC_APP_URL=https://yourdomain.com
\`\`\`

## Testing Checklist

- [ ] Yellow/black/white theme displays correctly
- [ ] Language toggle switches EN↔PT
- [ ] Email login/signup works
- [ ] Google OAuth button functional
- [ ] Chat sends messages and gets responses
- [ ] Coffee domain filtering works
- [ ] Chat history saves when logged in
- [ ] History loads from previous sessions
- [ ] Feedback form submits successfully
- [ ] Multilingual feedback form displays correct language
- [ ] All UI text translated to Portuguese

## Production Deployment

1. **Setup AWS Services**
   - Cognito for authentication
   - DynamoDB for database
   - Lambda for API endpoints
   - S3 for file storage
   - CloudFront for CDN

2. **Configure Environment**
   - Add all env vars to Vercel/deployment platform
   - Setup Google OAuth credentials
   - Configure email service (SendGrid, AWS SES)

3. **Testing**
   - Test authentication flow
   - Verify chat responses
   - Check multilingual support
   - Test feedback submission
   - Load test with multiple users

4. **Launch**
   - Deploy to Vercel
   - Setup monitoring
   - Configure error tracking
   - Enable analytics

## Support

For issues or questions about specific features:
- Check the README.md for API documentation
- Review component prop types in TypeScript files
- Refer to translation strings in lib/i18n.ts

---

**Ready to build!** Start by replacing the mock API responses with real AI integration.
