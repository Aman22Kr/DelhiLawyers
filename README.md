# DelhiLawyers — Premier Legal Advocacy & Litigation Practice

A production-grade, multi-page static web application recreating and modernizing the Delhi legal services portal with responsive design, courtroom practice directories, and client-side persistence.

- **Reference Website**: [https://lawyersdelhi.com/](https://lawyersdelhi.com/)
- **Brand Identity**: **DelhiLawyers**
- **GitHub Username / Maintainer**: `Aman22kr`
- **Primary Hosting & Deployment**: GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- **Routing Engine**: React Router with `HashRouter` (100% compatible with static hosting)

---

## 1. Overview & Capabilities

**DelhiLawyers** delivers comprehensive legal representation, counsel, and trial advocacy across the National Capital Territory of Delhi, covering:
- **Supreme Court of India** (Tilak Marg, New Delhi)
- **High Court of Delhi** (Sher Shah Road)
- **7 District Court Complexes**: Patiala House, Tis Hazari, Saket, Rohini, Dwarka, Karkardooma
- **Specialized Tribunals**: NCLT New Delhi, NCLAT, NCDRC, DRT, and Delhi RERA

---

## 2. Key Pages & Implemented Features

1. **Homepage (`#/`)**:
   - High-fidelity classical Delhi courthouse architectural hero visual
   - Real-time Delhi courts status banner and 24/7 urgent bail desk ribbon
   - Core Practice Areas showcase with category-based filtering
   - Delhi Courts Matrix with metro connectivity and jurisdictions
   - Senior Advocates & Counsel spotlight
   - Corporate Dispute Resolution & NCLT feature split
   - **YouTube Legal Briefing Placeholder**: 16:9 blank video area matching exact YouTube aspect ratio and layout
   - Verified client case studies & quantitative outcomes
   - Recent legal articles & statutory commentary
   - Compact advertisement placeholder slot
   - Emergency consultation action strip

2. **Practice Areas (`#/practice-areas`)**:
   - Filterable catalog by category: Criminal, Family, Real Estate, Corporate, Civil & Commercial, Constitutional
   - Instant search by statute, issue, or court
   - Summary cards displaying case counts, key reliefs, and estimated listing timelines

3. **Practice Area Detail Pages (`#/practice-areas/:slug`)**:
   - Deep-dive pages for:
     * Criminal Defense & Bail Matters (`/practice-areas/criminal-defense-bail`)
     * Matrimonial Disputes & Divorce (`/practice-areas/matrimonial-divorce-custody`)
     * Property & Real Estate Litigation (`/practice-areas/property-real-estate-disputes`)
     * Corporate & Commercial Litigation (`/practice-areas/corporate-commercial-litigation`)
     * Cheque Bounce (Sec 138 NI Act) & Recovery (`/practice-areas/cheque-bounce-section-138`)
     * Constitutional Writs & High Court Appeals (`/practice-areas/constitutional-writ-petitions`)
   - Step-by-step courtroom procedure roadmap
   - Required documents checklist for case evaluation
   - Frequently Asked Questions with accordion interaction
   - Direct consultation booking trigger

4. **Advocates Directory (`#/advocates`)**:
   - Profiles of Senior Counsels, Partners, and Associates
   - Filter by court admission (Supreme Court, Delhi High Court, Patiala House, Saket, NCLT)
   - Experience, bar enrollment credentials, and client ratings
   - Bookmark advocate button with persistent storage

5. **Advocate Detail Page (`#/advocates/:id`)**:
   - Full professional bio, academic credentials (Campus Law Centre, NLU Delhi), notable precedents, and direct consultation scheduler

6. **Courts in Delhi (`#/courts`)**:
   - Complete directory of courts across Delhi NCR
   - Metro stations, registry filing timings, and courtroom hours
   - Litigant procedural guide (morning mentioning, entry gate passes, and e-filing)

7. **Legal Insights & Articles (`#/insights`)**:
   - Practical legal analysis of the New Criminal Laws (BNS, BNSS, BSA 2024)
   - Anticipatory bail guidelines and High Court precedents
   - Mutual consent divorce cooling-off waiver (Sec 13B HMA)
   - Section 138 NI Act demand notice timelines
   - Filter by category and search

8. **Legal Insight Detail (`#/insights/:slug`)**:
   - Full text analysis, statutory provisions cited, key takeaways, share link, and bookmarking

9. **Consultation Booking System (`#/consultation`)**:
   - Interactive multi-step appointment scheduler
   - Select practice area, preferred counsel, target court, and format (In-Chamber, Online Video, Court Premises)
   - Field validation with error feedback
   - Generates instant printable confirmation receipt with Booking ID (e.g. `DL-842910`)
   - Persists bookings to browser `localStorage`

10. **About Us (`#/about`)**:
    - Chambers heritage in the Delhi Bar
    - 4 Core Pillars: Courtroom Tenacity, Fee Transparency, Absolute Privilege, Pro Bono Commitment
    - Bar Council of India ethics compliance statement

11. **Contact & Chambers (`#/contact`)**:
    - Chamber addresses in Connaught Place, Patiala House, and Delhi High Court
    - 24/7 emergency bail desk helpline (`+91 11 4982 7200`)
    - Validated inquiry form with submission receipt
    - Coordinates and interactive location layout placeholder

12. **Custom 404 Page (`*`)**:
    - Helpful recovery navigation with direct links back to practice areas and home

13. **Bar Council of India Ethics Notice**:
    - Mandatory compliance banner and disclaimer dialog persisted in `localStorage`

---

## 3. Technology Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8 with `base: './'` for GitHub Pages static asset resolution
- **Styling**: Tailwind CSS v4 with bespoke legal typography tokens (`Cinzel`, `Plus Jakarta Sans`)
- **Routing**: `react-router-dom` with `HashRouter`
- **Icons**: `lucide-react`
- **Motion**: `motion` with CSS fallbacks and `@media (prefers-reduced-motion: reduce)` compliance
- **State & Persistence**: Browser `localStorage` via React Context (`SavedContext`)

---

## 4. Project Structure

```text
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions Pages deployment workflow
├── public/                         # Public static files
├── src/
│   ├── assets/
│   │   └── images/                 # Court and chamber photography assets
│   ├── components/
│   │   ├── AdPlaceholder.tsx       # Reusable compact advertising slot
│   │   ├── DisclaimerModal.tsx     # BCI ethics compliance dialog
│   │   ├── Footer.tsx              # Footer with court links & statutory disclaimer
│   │   ├── Navbar.tsx              # Strict 3-zone top bar contract
│   │   ├── SavedBookmarksModal.tsx # Drawer showing saved items & appointments
│   │   ├── SearchModal.tsx         # Instant search across all legal data
│   │   └── YouTubePlaceholder.tsx  # 16:9 blank video area placeholder
│   ├── context/
│   │   └── SavedContext.tsx        # localStorage persistence provider
│   ├── data/
│   │   └── legalData.ts            # Typed practice areas, courts, advocates, insights
│   ├── pages/
│   │   ├── AboutPage.tsx
│   │   ├── AdvocateDetailPage.tsx
│   │   ├── AdvocatesPage.tsx
│   │   ├── ConsultationPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── CourtsPage.tsx
│   │   ├── HomePage.tsx
│   │   ├── InsightDetailPage.tsx
│   │   ├── InsightsPage.tsx
│   │   ├── NotFoundPage.tsx
│   │   ├── PracticeAreaDetailPage.tsx
│   │   └── PracticeAreasPage.tsx
│   ├── App.tsx                     # Main router & modal wrapper
│   ├── index.css                   # Global styles & legal typography tokens
│   └── main.tsx                    # React DOM entry point
├── .gitignore
├── index.html                      # SEO metadata & Google Fonts
├── metadata.json                   # Applet metadata
├── package.json                    # Dependencies & scripts
├── package-lock.json               # Committed npm dependency lockfile
├── tsconfig.json
└── vite.config.ts                  # Vite config with base: './'
```

---

## 5. Local Development & Build Commands

### Prerequisites
- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or higher

### Install Dependencies
```bash
# Clean install using committed lockfile
npm ci

# Alternatively
npm install
```

### Start Development Server
```bash
npm run dev
```
The application will be accessible at `http://localhost:3000`.

### Build for Production
```bash
npm run build
```
Generates optimized static assets in the `./dist` directory.

### Preview Production Build Locally
```bash
npm run preview
```

---

## 6. LocalStorage Persistence & Limitations

The following items are persisted locally in the user's browser via `localStorage`:
- **Bookmarked Articles**: Saved legal analysis and case briefings.
- **Bookmarked Advocates**: Saved counsel profiles for quick reference.
- **Consultation Bookings**: Appointment reservations with reference IDs (e.g., `DL-842910`).
- **Bar Council Disclaimer**: Record of terms acceptance so the prompt is not shown on every visit.

### Important Limitations:
- `localStorage` is tied exclusively to the user's current device and browser.
- It does **not** synchronize across multiple computers or phones.
- Clearing browser cache or cookies will reset stored appointments and bookmarks.
- Form submissions and booking confirmations are client-side demo flows; no server-side credit card charge or official court filing occurs.

---

## 7. GitHub Pages Deployment via GitHub Actions

The repository is configured for automated continuous deployment using the official GitHub Pages deployment action.

### Step 1: Configure GitHub Repository Settings
1. Go to your GitHub repository: `https://github.com/Aman22kr/<repository-name>`.
2. Click on **Settings** > **Pages** (under "Code and automation").
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.

### Step 2: Push to `main`
```bash
git add .
git commit -m "feat: complete DelhiLawyers multi-page static portal"
git push origin main
```

### Step 3: Deployment Execution
The GitHub Actions workflow in `.github/workflows/deploy.yml` will automatically:
1. Check out the codebase.
2. Set up Node.js 22 with npm cache.
3. Run `npm ci` to install dependencies deterministically.
4. Run `npm run build` to compile the app into `./dist`.
5. Upload the build artifact and deploy it directly to GitHub Pages.

Your live application will be published at:
`https://Aman22kr.github.io/<repository-name>/`

---

## 8. Troubleshooting Common Deployment Issues

1. **Blank page or broken assets on GitHub Pages**:
   - Verify `base: './'` is configured in `vite.config.ts`. This ensures assets resolve relative to the repository subpath.
2. **Page refresh returns 404**:
   - The application uses `HashRouter` (`#/practice-areas`), so refreshing any page on static hosting works without server-side URL rewrite rules.
3. **`npm ci` failure in GitHub Actions**:
   - Ensure `package-lock.json` is committed and matches `package.json`. If you modify dependencies, run `npm install` locally and commit the updated lockfile.

---

## 9. Brand & Content Customization

To repurpose or adjust the branding:
- **Brand Name**: Update `DelhiLawyers` in `src/components/Navbar.tsx`, `src/components/Footer.tsx`, and `index.html`.
- **Contact & Helpline**: Edit the phone numbers and chamber addresses in `src/data/legalData.ts` and `src/pages/ContactPage.tsx`.
- **Practice Areas & Advocates**: Update or add entries to `PRACTICE_AREAS` and `ADVOCATES` in `src/data/legalData.ts`.
- **Typography & Colors**: Modify the theme tokens in `src/index.css`.

---

## 10. Disclaimer

In adherence to the **Bar Council of India** rules, advocates are prohibited from soliciting work or advertising. This website is intended solely for general informational and educational purposes.
