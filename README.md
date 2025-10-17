# Ubuntu Afya - NGO Website

A responsive, accessible, production-ready NGO website for Ubuntu Afya, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── our-story/         # Our Story page
│   ├── impact/            # Impact Areas page
│   ├── strategy/          # Strategy page
│   ├── updates/           # Updates listing
│   │   └── [slug]/        # Individual update pages
│   └── donate/            # Donation page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Site header with navigation
│   ├── Footer.tsx        # Site footer
│   ├── Hero.tsx          # Hero section component
│   ├── StatCard.tsx      # Statistics display card
│   ├── PieChart.tsx      # Chart component
│   ├── ImpactCard.tsx    # Impact area card
│   ├── TeamGrid.tsx      # Team member grid
│   ├── UpdateCard.tsx    # Update/news card
│   └── DonateForm.tsx    # Donation form
├── data/                 # JSON data files
│   ├── stats.json        # Statistics data
│   ├── team.json         # Team member data
│   └── updates.json      # News/updates data
├── lib/                  # Utility functions
│   ├── types.ts          # TypeScript type definitions
│   ├── formatDate.ts     # Date formatting utilities
│   └── utils.ts          # General utilities
└── public/               # Static assets
    ├── docs/             # Document downloads
    │   └── ubuntu-afya-model.pdf
    └── team/             # Team photos (placeholder)
```

## 🎨 Design System

### Colors
- **Primary Blue:** `#084B8A` (ubuntu-blue)
- **Accent Orange:** `#F7941D` (ubuntu-orange)
- **Neutral Grays:** Various shades for backgrounds and text

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** Bold, Ubuntu blue color
- **Body:** Regular weight, gray color

## 📊 Features

### Homepage
- **Hero section with integrated header** - Full-screen hero with multiple rotating images, dark overlay, and integrated navigation (exactly like World Central Kitchen design)
- Statistics section with charts and number cards
- Impact areas preview
- Latest updates grid
- Strategy highlight section

### Pages
- **Our Story:** Mission, vision, team, and model information
- **Impact Areas:** Detailed information about three core areas
- **Strategy:** Three-pillar strategy with timeline
- **Updates:** News and updates with individual article pages
- **Donate:** Comprehensive donation form with impact information

### Components
- **Hero Section:** Full-screen hero with integrated header, multiple rotating background images, and smooth transitions (exactly matching World Central Kitchen design)
- Responsive design for all screen sizes
- Accessible navigation with skip links
- Interactive charts using Recharts
- Form validation and error handling
- SEO-optimized with proper meta tags

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file with:

```env
# TODO: Add your actual API keys
NEXT_PUBLIC_STRIPE_KEY=your_stripe_key_here
MOBILE_MONEY_API_KEY=your_mobile_money_key_here
```

### Content Management
All content is managed through JSON files in the `/data` directory:

- **stats.json:** Update statistics and metrics
- **team.json:** Add/remove team members
- **updates.json:** Add news articles and updates

## 📝 TODO Items

### Content Updates Required
- [ ] Replace placeholder team photos in `/public/team/`
- [ ] Add actual Ubuntu Afya model PDF to `/public/docs/`
- [ ] **Replace hero background images** (`/public/hero-healthcare-1.jpg`, `/public/hero-healthcare-2.jpg`, `/public/hero-healthcare-3.jpg`) with actual healthcare images
- [ ] Add real partner logos
- [ ] Replace placeholder content with final copy

### Payment Integration
- [ ] Integrate Stripe for credit card payments
- [ ] Add mobile money payment options (M-Pesa, Airtel Money)
- [ ] Implement donation tracking and receipts
- [ ] Add recurring donation functionality

### Additional Features
- [ ] Add search functionality for updates
- [ ] Implement newsletter subscription
- [ ] Add contact form
- [ ] Create admin panel for content management
- [ ] Add multi-language support

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify:** Compatible with static export
- **AWS Amplify:** Full-stack deployment
- **DigitalOcean App Platform:** Simple deployment

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Skip-to-content links
- High contrast color ratios
- Alt text for all images

## 🔍 SEO

- Meta tags for all pages
- Open Graph tags for social sharing
- Structured data markup
- Optimized images with Next.js Image component
- Clean URLs and navigation structure

## 📈 Analytics

Add your analytics tracking code to `app/layout.tsx`:

```tsx
// Google Analytics
// Facebook Pixel
// Other tracking scripts
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, contact:
- Email: info@ubuntuafya.org
- Phone: +254 700 000 000

---

**Ubuntu Afya** - Reimagining healthcare delivery in underserved communities across Kenya.
