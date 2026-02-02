# Supabase Setup Instructions

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Wait for the project to be set up

## 2. Create the Testimonials Table

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the SQL from `supabase-setup.sql`
4. Click **Run** to execute the SQL

## 3. Get Your Supabase Credentials

1. Go to **Project Settings** → **API**
2. Copy the following:
   - **Project URL** (this is your `VITE_SUPABASE_URL`)
   - **anon/public key** (this is your `VITE_SUPABASE_ANON_KEY`)

## 4. Configure Environment Variables

Create a `.env` file in the root of your project (if it doesn't exist) and add:

```env
VITE_SUPABASE_URL=your-project-url-here
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

**Important:** 
- Make sure `.env` is in your `.gitignore` file
- Never commit your Supabase keys to version control
- The `VITE_` prefix is required for Vite to expose these variables to the frontend

## 5. Restart Your Dev Server

After adding the environment variables, restart your development server:

```bash
npm run dev
```

## 6. Test the Integration

1. Open your application
2. Navigate to the testimonials section
3. Click "Share Your Experience"
4. Submit a testimonial
5. It should appear immediately and be stored in Supabase

## Database Schema

The `testimonials` table has the following structure:

- `id` (BIGSERIAL) - Primary key, auto-incrementing
- `name` (TEXT) - Customer name (required)
- `role` (TEXT) - Customer role (optional, defaults to 'Customer')
- `content` (TEXT) - Testimonial content (required)
- `rating` (INTEGER) - Rating from 1-5 (required)
- `created_at` (TIMESTAMPTZ) - Auto-set timestamp
- `updated_at` (TIMESTAMPTZ) - Auto-updated timestamp

## Security

- Row Level Security (RLS) is enabled
- Public read access is allowed (anyone can view testimonials)
- Public insert access is allowed (anyone can submit testimonials)
- No authentication required for basic functionality

## Real-time Updates

The component is set up to listen for real-time changes. When a new testimonial is added, it will automatically appear for all users viewing the page.
