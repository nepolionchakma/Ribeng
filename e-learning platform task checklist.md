# E-Learning Platform Task Checklist

## Phase 1: Planning
- [/] Research & create implementation plan
- [ ] User review of implementation plan

## Phase 2: Project Setup
- [ ] Initialize Next.js 14 project with TypeScript
- [ ] Configure TailwindCSS + shadcn/ui
- [ ] Set up fonts (Nunito, Roboto, Poppins)
- [ ] Configure dark/light theme (next-themes)
- [ ] Set up environment variables (.env.local)

## Phase 3: Database (Prisma + PostgreSQL Aiven)
- [ ] Install and configure Prisma
- [ ] Design and write full Prisma schema
  - [ ] User, Account, Session (NextAuth)
  - [ ] Category, Course, Module, Lesson
  - [ ] Enrollment, Progress, LessonProgress
  - [ ] Review, Certificate
- [ ] Generate Prisma client
- [ ] Create seed data for all tech tracks

## Phase 4: Authentication (NextAuth.js)
- [ ] Install NextAuth v5 / next-auth
- [ ] Configure Google OAuth provider
- [ ] Configure Credentials (email + password) provider
- [ ] Create auth API route
- [ ] Build Login / Register pages
- [ ] Build session middleware & protected routes

## Phase 5: Landing & Public Pages
- [ ] Hero section with animated banner
- [ ] Courses listing page (by category)
- [ ] Course detail page
- [ ] About / FAQ pages
- [ ] Responsive navbar with theme toggle

## Phase 6: Learner Dashboard
- [ ] My Courses (enrolled courses)
- [ ] Course player (lesson viewer)
- [ ] Progress tracking UI
- [ ] Certificates page

## Phase 7: Admin Dashboard
- [ ] Admin layout + sidebar navigation
- [ ] Course management (CRUD)
- [ ] Module & Lesson management
- [ ] User management (verify/block users)
- [ ] Enrollment & progress overview
- [ ] Dashboard stats (charts)

## Phase 8: API Routes
- [ ] /api/auth/* (NextAuth)
- [ ] /api/courses (list, create, update, delete)
- [ ] /api/courses/[id] (detail, enroll)
- [ ] /api/progress (track lesson progress)
- [ ] /api/users (admin: list, update)
- [ ] /api/admin/stats

## Phase 9: Verification
- [ ] Test auth flows (Google + credentials)
- [ ] Test learner enrollment and progress
- [ ] Test admin CRUD operations
- [ ] Test responsive layout on mobile/tablet
- [ ] Test dark/light theme switching
- [ ] Verify database operations
